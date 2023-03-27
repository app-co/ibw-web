import React from 'react'
import * as S from './styles'

import { IUserInc } from '@/dtos'
import { xlsx } from '@/utils/xlsx'
import { collection, onSnapshot } from 'firebase/firestore'
import { fire } from '@/config/firebase'
import { Table } from '@/components/Table'

export default function Home() {
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

  console.log(response)

  const handleGenerateXlsx = React.useCallback(async () => {
    xlsx(response)
  }, [response])

  return (
    <S.container>
      <S.head>
        <h1>heol</h1>
        <S.upload onClick={handleGenerateXlsx}>Gerar execel</S.upload>
      </S.head>

      <S.box>
        <Table item={response} />
      </S.box>
    </S.container>
  )
}
