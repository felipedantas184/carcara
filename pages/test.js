import Head from "next/head";
import Card from "../components/Card";

import { getDataFromSheets } from '../libs/sheets';

export async function getStaticProps(context) {
  const sheet = await getDataFromSheets();

  console.log(sheet)
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

      <main>
        <h1>Welcome to Nextsheet 💩</h1>
        <p>Connecting NextJS with Google Spreadsheets as Database</p>
        <p>Example fetched from Google Spreadsheet: </p>
        <ul>
          {data && data.length ? (
            data.map((item) => (
              <Card key={item.registration} member={item} />
            ))
          ) : (
            <li>Error: do not forget to setup your env variables 👇</li>
          )}
        </ul>
        <h2>Setting up environment variables</h2>
        <code>GOOGLE_SHEETS_PRIVATE_KEY=[YOUR KEY]</code>
        <br />

        <code>GOOGLE_SHEETS_CLIENT_EMAIL=[YOUR ACCOUNT EMAIL]</code>
        <br />
        <code>SPREADSHEET_ID=[YOU CAN GET THIS ON URL OF YOUR SHEETS]</code>
        <br />
        <code>SPREADSHEET_NAME=[SHEET NAME]</code>
        <p>
          <a href="https://github.com/lucasromerodb/nextsheet">GitHub repo »</a>
          <br />
        </p>
      </main>
    </>
  );
}