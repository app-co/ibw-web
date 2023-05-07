import React from 'react'
import * as S from './styles'

import { IUserInc } from '@/dtos'
import { xlsx } from '@/utils/xlsx'
import { collection, onSnapshot } from 'firebase/firestore'
import { fire } from '@/config/firebase'
import { Table } from '@/components/Table'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'

export default function Home() {
  const route = useRouter()
  const { isAuth } = useAuth()
  const [response, setResponse] = React.useState<IUserInc[]>([])

  React.useEffect(() => {
    const insc = collection(fire, 'inscricao')
    onSnapshot(insc, (h) => {
      const rs = h.docs.map((p) => {
        return {
          ...p.data(),
          id: p.id,
        } as IUserInc
      })

      setResponse(rs)
    })
  }, [])

  console.log('resp', response[0])

  const xls = React.useMemo(() => {
    return response.map((h) => {
      const a = h.category ? h.category[0]?.type : ''
      const b = h.category ? h.category[1]?.type : ''

      return {
        NOME: h.name,
        'E-MAIL': h.email,
        SEXO: h.sexo,
        'EXP EM TOW IN': h.expTow,
        'EXP EM REMADA': h.expTow,
        'DATA DE INSCRIÇÃO': h.created_at,
        STATUS: h.status,
        'CAT. A': a,
        'CAT. B': b,
      }
    })
  }, [response])
  console.log(xls)

  const handleGenerateXlsx = React.useCallback(async () => {
    xlsx(xls)
  }, [xls])

  React.useEffect(() => {
    if (!isAuth) {
      route.push('/login')
    }
  }, [isAuth, route])

  return (
    <S.container>
      <S.head>
        <h1>IBW</h1>
        <S.upload onClick={handleGenerateXlsx}>Baixar lista</S.upload>
      </S.head>

      <S.box>
        <Table item={response} />
      </S.box>
    </S.container>
  )
}
