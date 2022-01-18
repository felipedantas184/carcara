import Head from 'next/head'
import Card from '../../components/Card'

import { createClient } from 'contentful';
import Form from '../../components/Form';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'member'})

  return {
    props: {
      members: res.items
    }
  }
}


export default function Identification({ members }) {
  return (
    <>
      <Head>
        <title>Carteira Digital | A.A.A. Carcará</title>
        <meta name="description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        
        <meta property="og:title" content="Carteira Digital | A.A.A. Carcará | Medicina UFPI"/>
        <meta property="og:type" content="school"/>
        <meta property="og:description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013"/>
        <meta property="og:image" content="/apple-touch-icon.png"/>
        <meta property="og:site_name" content="A.A.A. Carcará"/>

        <meta property="twitter:title" content="Carteira Digital | A.A.A. Carcará | Medicina UFPI"/>
        <meta property="twitter:url" content="https://carcara.vercel.app/"/>
        <meta property="twitter:description" content="🦅 Associação Atlética Acadêmica da Medicina UFPI | 🏆 A primeira e maior do PI, desde 2013"/>
        <meta property="twitter:image" content="/apple-touch-icon.png"/>
      </Head>

      <Form />
    </>
  )
}
