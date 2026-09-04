import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Erro não tratado:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 16, background: '#0d0d0d', padding: 24, textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'var(--pixel-font)', fontSize: '16px', color: '#c0392b' }}>ERRO INESPERADO</p>
        <p style={{ fontFamily: 'var(--pixel-font)', fontSize: '9px', color: '#8a7a65', lineHeight: 2, maxWidth: 420 }}>
          Alguma coisa quebrou no jardim. Tenta recarregar a página — se continuar, seus dados de visitante estão salvos no navegador.
        </p>
        <button
          onClick={() => window.location.assign('/')}
          style={{ fontFamily: 'var(--pixel-font)', fontSize: '9px', background: 'transparent', border: '1px solid #7ab648', color: '#7ab648', padding: '10px 20px', cursor: 'pointer' }}
        >
          ▶ VOLTAR AO INÍCIO
        </button>
      </div>
    )
  }
}
