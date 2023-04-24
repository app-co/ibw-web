import { IUserInc } from '@/dtos'
import React from 'react'
import * as S from './styles'

interface Props {
  item: IUserInc[]
}

export function Table({ item }: Props) {
  return (
    <S.Container>
      <S.table border={1} align="right">
        <tr>
          <th>Candidato</th>
          <th>E-mail</th>
          <th>Sexo</th>
          <th>Data de nascimento</th>
          <th>Exp em Tow In</th>
          <th>Exp em Remada</th>
          <th>Data de inscrição</th>
          <th>Status</th>
          <th>Categoria A</th>
          <th>Categoria B</th>
          <th>Photo</th>
        </tr>

        {item.map((h) => (
          <tr key={h.id}>
            <td>{h?.name}</td>
            <td>{h?.email}</td>
            <td>{h?.sexo}</td>
            <td>{h?.brithday}</td>
            <td>{h?.expTow}</td>
            <td>{h?.expRemada}</td>
            <td>{h?.created_at}</td>
            <td>{h?.status}</td>
            <td>{h?.category[0]?.type}</td>
            <td>{h?.category[1]?.type}</td>
            <td>
              <a href={'https://www.google.com'}>{h.photo}</a>
            </td>
          </tr>
        ))}
      </S.table>
    </S.Container>
  )
}
