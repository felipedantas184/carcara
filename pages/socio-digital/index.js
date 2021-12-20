import Head from "next/head";

import { getDataFromSheets } from '../../libs/sheets';

export async function getStaticProps(context) {
  const sheet = await getDataFromSheets();

  return {
    props: {
      data: sheet.slice(1, sheet.length), // remove sheet header
    },
    revalidate: 1, // In seconds
  };
}

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Nextsheet 💩</title>
        <meta
          name="description"
          content="Connecting NextJS with Google Spreadsheets as Database"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>hello</h1>
    </>
  );
}