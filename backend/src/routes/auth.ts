import type { FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { createHash } from 'crypto'
import bcrypt from 'bcryptjs'
import { registerSchema, loginSchema } from '../schemas/auth.js'
import { authenticate } from '../middleware/authenticate.js'

const prisma = new PrismaClient()
const BCRYPT_ROUNDS = 12

function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, BCRYPT_ROUNDS)
}

function legacySha256(password: string): string {
  return createHash('sha256').update(password).digest('hex')
}

async function verifyPassword(password: string, storedHash: string): Promise<boolean> {
  if (storedHash.startsWith('$2')) return bcrypt.compare(password, storedHash)
  return storedHash === legacySha256(password)
}

export async function authRoutes(app: FastifyInstance) {
  app.get('/me', { onRequest: [authenticate] }, async (request) => {
    const userId = (request.user as { sub: string }).sub
    return prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, oxygenLevel: true },
    })
  })
  app.post('/register', { config: { rateLimit: { max: 5, timeWindow: '1 minute' } } }, async (request, reply) => {
    const result = registerSchema.safeParse(request.body)
    if (!result.success) {
      return reply.status(400).send({ error: result.error.flatten() })
    }

    const { name, email, password } = result.data

    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      return reply.status(409).send({ error: 'Email já cadastrado' })
    }

    const user = await prisma.user.create({
      data: { name, email, passwordHash: await hashPassword(password) },
      select: { id: true, name: true, email: true, oxygenLevel: true },
    })

    const token = app.jwt.sign({ sub: user.id }, { expiresIn: '7d' })
    return reply.status(201).send({ user, token })
  })

  app.post('/login', { config: { rateLimit: { max: 5, timeWindow: '1 minute' } } }, async (request, reply) => {
    const result = loginSchema.safeParse(request.body)
    if (!result.success) {
      return reply.status(400).send({ error: result.error.flatten() })
    }

    const { email, password } = result.data

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user || !(await verifyPassword(password, user.passwordHash))) {
      return reply.status(401).send({ error: 'Email ou senha incorretos' })
    }

    if (!user.passwordHash.startsWith('$2')) {
      await prisma.user.update({ where: { id: user.id }, data: { passwordHash: await hashPassword(password) } })
    }

    const token = app.jwt.sign({ sub: user.id }, { expiresIn: '7d' })
    return reply.send({
      user: { id: user.id, name: user.name, email: user.email, oxygenLevel: user.oxygenLevel },
      token,
    })
  })
}
