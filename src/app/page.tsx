


// app/page.tsx
'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.msg))
  }, [])

  return (
    <main style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>Welcome to the Fullstack Next.js App</h1>
      <p>Backend says: {message}</p>
    </main>
  )
}

