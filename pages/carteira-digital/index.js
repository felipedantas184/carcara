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
      </Head>

      <Form />
    </>
  )
}
