import { cor } from '@/pages/styles/colors'
import React from 'react'
import { IUserInc } from '../../dtos'
import * as S from './styles'

interface Props {
  item: IUserInc
  pres: () => void
  reprov: () => void
}

export function CandidatoComp({ item, reprov, pres }: Props) {
  return (
    <S.Container>
      <S.bx>
        <S.title>Candidato: </S.title>
        <S.sub>{item?.name}</S.sub>
        <S.image alt="photo" src={item?.photo} />
      </S.bx>

      <S.bx>
        <S.title>E-mail: </S.title>
        <S.sub>{item?.email}</S.sub>
      </S.bx>

      <S.bx>
        <S.title>Sexo: </S.title>
        <S.sub>{item?.sexo}</S.sub>
      </S.bx>

      <S.bx>
        <S.title>Data de nascimento: </S.title>
        <S.sub>{item?.birthday}</S.sub>
      </S.bx>

      <S.bx>
        <S.title>CPF: </S.title>
        <S.sub>{item?.cpf}</S.sub>
      </S.bx>

      <S.bx>
        <S.title>Experiência em TOW IN ...: </S.title>
        <S.sub>{item?.expTow}</S.sub>
      </S.bx>

      <S.bx>
        <S.title>Experiência em REMADA:</S.title>
        <S.sub>{item?.expRemada}</S.sub>
      </S.bx>

      <S.bx>
        <S.title>Data de Inscriçao: </S.title>
        <S.sub>{item?.created_at}</S.sub>
      </S.bx>

      <S.bx>
        <S.title>Status: </S.title>
        <S.sub
          style={{
            color: item?.status === 'AUTORIZADO' ? cor.azul[1] : '#861818',
          }}
        >
          {' '}
          {item?.status}
        </S.sub>
      </S.bx>

      <div>
        <S.title>Categorias:</S.title>
        {item?.category?.map((h) => (
          <S.sub key={h.type} style={{ color: cor.roxo[1] }}>
            {h.type}
          </S.sub>
        ))}
      </div>

      <S.hs>
        {item?.status !== 'AUTORIZADO' && (
          <S.button color="alert">NÃO AUTORIZAR</S.button>
        )}
        {item?.status !== 'AUTORIZADO' && (
          <S.button color="sucess">AUTORIZAR </S.button>
        )}
        <S.button color="caution">image upload</S.button>
      </S.hs>
    </S.Container>
  )
}
