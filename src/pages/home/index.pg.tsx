import React from 'react'
import * as S from './styles'

import { IUserInc } from '@/dtos'
import { xlsx } from '@/utils/xlsx'
import { collection, onSnapshot } from 'firebase/firestore'
import { fire } from '@/config/firebase'
import { Table } from '@/components/Table'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/router'
import { format } from 'date-fns'

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
      const ctSurf = h.category.find(
        (p) => p.type === 'TOW IN LAJE DO SHOCK - SURFISTA',
      )

      const ctJet = h.category.find(
        (p) => p.type === 'TOW IN LAJE DO SHOCK - PILOTO',
      )

      const ctRem = h.category.find(
        (p) => p.type === 'REMADA PRAIA DE ITACOATIARA - SURFISTA',
      )

      const cat = {
        surf: ctSurf || { exp: '', type: '' },
        jet: ctJet || { exp: '', type: '' },
        remada: ctRem || { exp: '', type: '' },
      }

      return {
        Candidato: h.name,
        'E-mail': h.email,
        Sexo: h.sexo,
        'Data de nascimento': h.birthday,
        'Exp em Tow In Surf': cat.surf.exp,
        'Exp em Tow In Piloto': cat.jet.exp,
        'Categoria Piloto': cat.jet.type,
        'Categoria Surfista': cat.surf.type,
        'Categoria Remada': cat.remada.type,
        'Categoria Bodyboarding': h.bodyboarding,
        'Categoria Cinegrafista': h.cinegrafista,
        'Data de inscrição': format(h.created_at, 'dd/MM/yyyy'),
        Status: h.status,
        Photo: h.photo,
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
