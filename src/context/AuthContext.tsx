import { auth } from '@/config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, ReactNode, useContext } from 'react'

type SignCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignCredentials): Promise<void>
  isAuth: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = React.useState(false)

  const signIn = React.useCallback(
    async ({ email, password }: SignCredentials) => {
      if (email === '' || password === '') {
        console.log(email, password)
        return alert('comapos obrigatórios')
      }
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setIsAuth(true)
        })
        .catch((err: any) => {
          const { code } = err
          if (code === 'auth/user-not-found') {
            setIsAuth(false)
            return alert('Usuário não encontrado')
          }
          if (code === 'auth/wrong-password') {
            setIsAuth(false)

            return alert('Senha inconrreta')
          }
          return alert('Usuário nao encontrado')
        })
    },
    [],
  )

  return (
    <AuthContext.Provider value={{ signIn, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
