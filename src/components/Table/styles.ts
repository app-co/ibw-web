import { cor } from '@/pages/styles/colors'
import styled from 'styled-components'

export const Container = styled.div``

export const table = styled.table`
  padding: 5px;
  width: 100%;
  text-align: left;
  border: 1px solid ${cor.azul[1]};

  th {
    font-weight: 600;
    font-size: calc(10px + 0.5vw);
  }

  td {
    font-size: 14px;
    padding: 2px;
  }

  tr {
  }

  th,
  td {
    border: 1px solid ${cor.azul[1]};
  }
`

export const tr = styled.tr``

export const th = styled.th``

export const td = styled.td``
