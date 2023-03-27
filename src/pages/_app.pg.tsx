import { AuthProvider } from '@/context/AuthContext'
import type { AppProps } from 'next/app'
import Global from './styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <Global />
    </AuthProvider>
  )
}
