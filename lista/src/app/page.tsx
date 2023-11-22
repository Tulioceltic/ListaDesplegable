import Image from 'next/image'
import InformationList from './list';



export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <InformationList></InformationList>
    </main>
  )
}
