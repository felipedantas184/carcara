import { createClient } from 'contentful'
import Card from '../../components/Card'
import Discounts from '../../components/Discounts';
import Head from 'next/head'

import { MembersData } from '../../components/Card/CardData'


{/*---> BEGIN CONTENTFUL PART
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "member" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'member',
    'fields.slug': params.slug
  })

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { member: items[0] },
    revalidate: 1
  }
}
---> END CONTENTFUL PART*/}


{/* USING GOOGLE SPREADSHEET */}
export const getStaticPaths = async () => {
  /*const sheets = await getDataFromSheets();

  const paths = sheets.map(item => {
  return {
    params: { slug: item.registration }
  }
  */

  const paths = MembersData.map(item => {
    return {
      params: { slug: item.registration }
    }
})

return {
  paths,
  fallback: false
}
}

export const getStaticProps = async (context) => {
  /*const sheets = await getDataFromSheets();


  const slug = context.params.slug;
  const data = sheets.filter(item => item.registration == slug );

  return {
    props: { member: data[0] }
  }
  */

  const slug = context.params.slug;
  const data = MembersData.filter(item => item.registration == slug );

  return {
    props: { member: data[0] }
  }
}
{/* USING GOOGLE SPREADSHEET */}



export default function RecipeDetails({ member }) {  
    
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

        <Card member={member} />
        <Discounts />
      </>
    )
}
