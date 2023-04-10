// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import Head from 'next/head'

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Southeast Scramble</title>
        <link rel="icon" href="/images/smallSES.svg" />
        <meta property="og:image" content="https://myurl.com/images/smallSES.svg" />
        <meta name="description" content="Sub Only Superfights"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Application
