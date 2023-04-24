import { CandidatoComp } from '@/components/CandidatoComp'
import { Table } from '@/components/Table'
import { fire } from '@/config/firebase'
import { useAuth } from '@/context/AuthContext'

import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import * as S from './styles'

export default function Login() {
  const router = useRouter()
  const { signIn, isAuth } = useAuth()
  const [email, setEmail] = React.useState('')
  const [senha, setSenha] = React.useState('')

  const handleSubmit = React.useCallback(async () => {
    try {
      await signIn({
        email,
        password: senha,
      })

      if (isAuth) {
        router.push('/login/home')
      }
    } catch (err) {}
  }, [email, isAuth, router, senha, signIn])

  return (
    <S.Container>
      <S.box>
        <h1>Login</h1>

        <S.input
          onChange={(h) => setEmail(h.currentTarget.value)}
          placeholder="E-mail"
        />
        <S.input
          onChange={(h) => setSenha(h.currentTarget.value)}
          placeholder="Senha"
        />

        <S.button onClick={handleSubmit}>ENTRAR</S.button>
      </S.box>
    </S.Container>
  )
}
