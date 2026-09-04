import { Link } from 'react-router-dom'

const s = {
  page: { minHeight: '100vh', background: '#0d0d0d', padding: '40px 20px', display: 'flex', justifyContent: 'center' },
  content: { maxWidth: 640, width: '100%' },
  h1: { fontFamily: 'var(--pixel-font)', fontSize: '16px', color: '#c4a35a', marginBottom: 24 },
  h2: { fontFamily: 'var(--pixel-font)', fontSize: '11px', color: '#7ab648', marginTop: 28, marginBottom: 10 },
  p: { fontFamily: 'var(--pixel-font)', fontSize: '9px', color: '#8a7a65', lineHeight: 2.2, marginBottom: 4 },
  back: { fontFamily: 'var(--pixel-font)', fontSize: '8px', color: '#4a3f33', textDecoration: 'none', display: 'inline-block', marginTop: 32 },
} as const

export default function TermsPage() {
  return (
    <div style={s.page}>
      <div style={s.content}>
        <h1 style={s.h1}>TERMOS DE USO</h1>

        <h2 style={s.h2}>O QUE É</h2>
        <p style={s.p}>Wasteland Garden é um projeto pessoal de portfólio, sem fins comerciais. É oferecido de graça, do jeito que está, sem garantia de disponibilidade contínua.</p>

        <h2 style={s.h2}>SUA CONTA</h2>
        <p style={s.p}>Você é responsável por manter sua senha em segredo. Não crie conta com dados de outra pessoa.</p>

        <h2 style={s.h2}>SEM GARANTIAS</h2>
        <p style={s.p}>O progresso salvo pode ser perdido em caso de manutenção, mudança de infraestrutura ou encerramento do projeto. Não há compromisso de backup de longo prazo.</p>

        <h2 style={s.h2}>USO ACEITÁVEL</h2>
        <p style={s.p}>Não tente explorar falhas de segurança, sobrecarregar o servidor de propósito ou automatizar acesso em massa.</p>

        <h2 style={s.h2}>MUDANÇAS</h2>
        <p style={s.p}>Esses termos podem mudar conforme o projeto evolui, sem aviso prévio formal.</p>

        <Link to="/" style={s.back}>‹ Voltar</Link>
      </div>
    </div>
  )
}
