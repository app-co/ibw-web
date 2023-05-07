import React from 'react'
import { fire } from '@/config/firebase'
import { IUserInc } from '@/dtos'
import { collection, onSnapshot } from 'firebase/firestore'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/ico.png'

export default function Home() {
  const [data, setData] = React.useState<IUserInc[]>([])

  const colection = collection(fire, 'inscricao')

  React.useEffect(() => {
    onSnapshot(colection, (h) => {
      const rs = h.docs.map((p) => p.data() as IUserInc)
      setData(rs)
    })
  }, [colection])

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
