import { IUserInc } from '@/dtos'
import React from 'react'
import * as S from './styles'
import { format } from 'date-fns'

interface Props {
  item: IUserInc[]
}

export function Table({ item }: Props) {
  const rs = item.map((h) => {
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
      ...h,
      category: cat,
    }
  })

  return (
    <S.Container>
      <S.table border={1} align="right">
        <tr>
          <th>Candidato</th>
          <th>E-mail</th>
          <th>Sexo</th>
          <th>Data de nascimento</th>
          <th>Exp em Tow In Surf</th>
          <th>Exp em Tow In Piloto</th>
          <th>Categoria Piloto</th>
          <th>Categoria Surfista</th>
          <th>Categoria Remada</th>
          <th>Categoria Bodyboarding</th>
          <th>Categoria Cinegrafista</th>
          <th>Data de inscrição</th>
          <th>Status</th>
          <th>Photo</th>
        </tr>

        {rs.map((h) => (
          <tr key={h.id}>
            <td>{h?.name}</td>
            <td>{h?.email}</td>
            <td>{h?.sexo}</td>
            <td>{h?.birthday}</td>
            <td>{h.category.surf.exp}</td>
            <td>{h.category.jet.exp}</td>
            <td>{h.category.jet.type}</td>
            <td>{h.category.surf.type}</td>
            <td>{h.category.remada.type}</td>
            <td>{h.bodyboarding}</td>
            <td>{h.cinegrafista}</td>
            <td>{format(h?.created_at, 'dd/MM/yyyy')}</td>
            <td>{h?.status}</td>
            <td>
              <a href={h.photo}>baixar imagem</a>
            </td>
          </tr>
        ))}
      </S.table>
    </S.Container>
  )
}
