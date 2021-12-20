import { createClient } from 'contentful'
import Card from '../../components/Card'
import { getDataFromSheets } from '../../libs/sheets';
import Image from 'next/image'

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

    console.log(data)
    return {
      props: { member: data[0] }
    }
}


export default function RecipeDetails({ member }) {  
    
    return (
      <>
        <h1>{member.name}</h1>
        <h2>{member.registration}</h2>
        <h3>{member.document}</h3>
        <Image src={'https://drive.google.com/uc?id=' + member.imageUrl} width={60} height={60} />
      </>
    )
}
