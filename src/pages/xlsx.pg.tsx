import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx'

type Data = {
  name: string
  age: number
  email: string
}

const generateExcel = (data: Data[]) => {
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(data)
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
  const file = new Blob([excelBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
  saveAs(file, 'data.xlsx')
}

export default function Xlsx() {
  const data: Data[] = [
    { name: 'John Doe', age: 30, email: 'john.doe@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', age: 40, email: 'bob.johnson@example.com' },
  ]

  const handleGenerateExcel = () => {
    generateExcel(data)
  }

  return <button onClick={handleGenerateExcel}>Generate Excel</button>
}
