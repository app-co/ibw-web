import { cor } from '@/pages/styles/colors'
import styled from 'styled-components'

export type variable = 'alert' | 'sucess' | 'caution'

interface Props {
  color: variable
}

const variavel = {
  alert: '#a11717',
  sucess: cor.azul[1],
  caution: '#9b6218',
}

export const Container = styled.div`
  padding: 20px;
  width: 90vw;

  border-width: 2px;
  border: 1px solid ${cor.azul[1]};
`

export const title = styled.p`
  font-size: calc(1rem + 0.5vw);
  color: ${cor.text[2]};

  & + p {
    margin-left: 10px;
  }
`

export const image = styled.img``

export const sub = styled.p`
  color: ${cor.text[2]};
`

export const bx = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: flex-start
  margin: 5px 0;
`

export const hs = styled.div`
  margin-top: 2rem;
  display: flex;
`

export const button = styled.button<Props>`
  padding: 4px 10px;
  align-items: center;
  justify-content: center;
  background-color: ${(h) => variavel[h.color]};

  & + button {
    margin-left: 20px;
  }
`
