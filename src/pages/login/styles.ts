import styled from 'styled-components'
import { cor } from '../styles/colors'

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
`

export const box = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`

export const input = styled.input`
  width: 200px;
  height: 50px;
  padding: 3px 10px;
  margin-top: 40px;
  border-radius: 8px;
  border: none;

  & + input {
    margin-top: 20px;
  }
`

export const button = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 30px;

  background-color: ${cor.roxo[1]};
`

export const content = styled.div`
  margin-top: 6rem;
  align-items: center;
  width: 100vw;

  display: flex;
  flex-direction: column;
`
