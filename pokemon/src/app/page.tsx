import Image from 'next/image'
import Card from './card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <Card></Card>
    </main>
  )
}
