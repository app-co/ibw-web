import React from 'react'
import Login from './login'

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Login />
    </div>
  )
}
