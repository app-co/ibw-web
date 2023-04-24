import { cor } from '@/pages/styles/colors'
import styled from 'styled-components'

export const Container = styled.div`
  overflow: scroll;
`

export const table = styled.table`
  padding: 5px;
  width: 130%;
  text-align: left;

  th {
    border: 1px solid ${cor.text[3]};
    font-weight: 600;
    font-size: calc(10px + 0.5vw);
    padding: 2px 5px;
    text-align: center;
  }

  td {
    border: 1px solid ${cor.text[3]};
    font-size: 14px;
    padding: 2px;
    text-align: center;
  }
`

export const tr = styled.tr``

export const th = styled.th``

export const td = styled.td``
