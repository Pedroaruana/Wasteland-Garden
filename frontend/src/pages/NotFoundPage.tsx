import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 16, background: '#0d0d0d', padding: 24, textAlign: 'center',
    }}>
      <p style={{ fontFamily: 'var(--pixel-font)', fontSize: '32px', color: '#3d3428' }}>404</p>
      <p style={{ fontFamily: 'var(--pixel-font)', fontSize: '11px', color: '#c4a35a' }}>ÁREA CONTAMINADA</p>
      <p style={{ fontFamily: 'var(--pixel-font)', fontSize: '9px', color: '#8a7a65', lineHeight: 2, maxWidth: 400 }}>
        Essa página não existe nesse pedaço da wasteland.
      </p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <button style={{ fontFamily: 'var(--pixel-font)', fontSize: '9px', background: 'transparent', border: '1px solid #7ab648', color: '#7ab648', padding: '10px 20px', cursor: 'pointer' }}>
          ▶ VOLTAR AO INÍCIO
        </button>
      </Link>
    </div>
  )
}
