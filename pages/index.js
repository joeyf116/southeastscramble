import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Southeast Scramble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SOUTHEAST SCRAMBLE" />
        <p className="description">
          Launching Soon..
        </p>
      </main>

      <Footer />
    </div>
  )
}
