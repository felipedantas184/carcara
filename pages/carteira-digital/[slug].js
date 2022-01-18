import { createClient } from 'contentful'
import Card from '../../components/Card'
import Discounts from '../../components/Discounts';

import { getDataFromSheets } from '../../libs/sheets';


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
  const sheets = await getDataFromSheets();

  const paths = sheets.map(item => {
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
  const sheets = await getDataFromSheets();


  const slug = context.params.slug;
  const data = sheets.filter(item => item.registration == slug );

  return {
    props: { member: data[0] }
  }
}
{/* USING GOOGLE SPREADSHEET */}



export default function RecipeDetails({ member }) {  
    
    return (
      <>
        <Card member={member} />
        <Discounts />
      </>
    )
}
