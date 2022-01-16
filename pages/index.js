import Head from 'next/head'
import Image from 'next/image'
import { Button } from '../components/ButtonElement'
import Discounts from '../components/Discounts'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>A.A.A. Carcará | Medicina UFPI</title>
      </Head>

      <Hero />
      <Discounts />
    </>
  )
}
