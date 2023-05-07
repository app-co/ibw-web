import { cor } from '@/pages/styles/colors'
import styled from 'styled-components'

export const container = styled.div`
  display: flex;
  flex-direction: column;
`

export const head = styled.div`
  padding: 20px;
  width: 100vw;

  display: flex;
  position: fixed;
  margin-bottom: 20rem;

  align-items: center;
  background-color: ${cor.roxo[1]};

  justify-content: space-between;
`

export const upload = styled.button`
  padding: 6px 10px;
  background-color: ${cor.azul[1]};
  color: ${cor.text[1]};
`

export const box = styled.div`
  padding: 20px;
  margin-top: 5rem;
`
