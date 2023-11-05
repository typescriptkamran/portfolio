import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between 1 rem">
      
      
        <Hero />
      
      
    
    <div className='text-center text-5xl text-green-500'> Helo world </div>

    <div className='w-full border-cyan-700 border-2 rounded-m h-2 text-center font-mono text-lg py-8 '> My name</div>



    </main>
  )
}
