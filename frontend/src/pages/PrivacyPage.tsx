import { Link } from 'react-router-dom'

const s = {
  page: { minHeight: '100vh', background: '#0d0d0d', padding: '40px 20px', display: 'flex', justifyContent: 'center' },
  content: { maxWidth: 640, width: '100%' },
  h1: { fontFamily: 'var(--pixel-font)', fontSize: '16px', color: '#c4a35a', marginBottom: 24 },
  h2: { fontFamily: 'var(--pixel-font)', fontSize: '11px', color: '#7ab648', marginTop: 28, marginBottom: 10 },
  p: { fontFamily: 'var(--pixel-font)', fontSize: '9px', color: '#8a7a65', lineHeight: 2.2, marginBottom: 4 },
  back: { fontFamily: 'var(--pixel-font)', fontSize: '8px', color: '#4a3f33', textDecoration: 'none', display: 'inline-block', marginTop: 32 },
} as const

export default function PrivacyPage() {
  return (
    <div style={s.page}>
      <div style={s.content}>
        <h1 style={s.h1}>POLÍTICA DE PRIVACIDADE</h1>

        <h2 style={s.h2}>O QUE COLETAMOS</h2>
        <p style={s.p}>Ao criar conta: nome, email e senha (guardada com hash, nunca em texto puro). Ao jogar: título das suas tarefas, datas de rega/colheita e seu nível de oxigênio.</p>

        <h2 style={s.h2}>MODO VISITANTE</h2>
        <p style={s.p}>Se você jogar sem criar conta, nada sai do seu navegador — os dados ficam só no localStorage do seu computador e não chegam no nosso servidor.</p>

        <h2 style={s.h2}>PRA QUE USAMOS</h2>
        <p style={s.p}>Só pra fazer o jogo funcionar: autenticar seu login e mostrar seu progresso. Não vendemos, não compartilhamos e não usamos seus dados pra propaganda.</p>

        <h2 style={s.h2}>ONDE FICA GUARDADO</h2>
        <p style={s.p}>Num banco PostgreSQL hospedado na Neon. O acesso é restrito e protegido por senha.</p>

        <h2 style={s.h2}>SEUS DIREITOS</h2>
        <p style={s.p}>Você pode pedir a exclusão da sua conta e de todos os seus dados a qualquer momento, mandando um email pro contato abaixo.</p>

        <h2 style={s.h2}>CONTATO</h2>
        <p style={s.p}>Dúvida sobre seus dados? Abre uma issue no <a href="https://github.com/Pedroaruana/Wasteland-Garden" style={{ color: '#c4a35a' }}>repositório do projeto</a>.</p>

        <Link to="/" style={s.back}>‹ Voltar</Link>
      </div>
    </div>
  )
}
