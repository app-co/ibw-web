import React from 'react'
import { CandidatoComp } from '@/components/CandidatoComp'
import { fire } from '@/config/firebase'
import { IUserInc } from '@/dtos'
import { saveAs } from 'file-saver'
import { collection, onSnapshot } from 'firebase/firestore'
import * as XLSX from 'xlsx'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/ico.png'

type Data = {
  name: string
  age: number
  email: string
}

const generateExcel = (data: IUserInc[]) => {
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(data)
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const file = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
  saveAs(file, 'data.xlsx')
}

export default function Home() {
  const [data, setData] = React.useState<IUserInc[]>([])

  const colection = collection(fire, 'inscricao')

  React.useEffect(() => {
    onSnapshot(colection, (h) => {
      const rs = h.docs.map((p) => p.data() as IUserInc)
      setData(rs)
    })
  }, [])

  const handleGenerateExcel = () => {
    generateExcel(data)
  }

  console.log(data)

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Link href={'/login'}>
        <Image src={logo} alt="logo" />
      </Link>
    </div>
  )
}
