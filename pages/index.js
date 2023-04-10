import Head from 'next/head'
import CenteredHero from '@components/CenteredHero'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Southeast Scramble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CenteredHero title={"Southeast Scramble"} />
      </main>

      <Footer />
    </div>
  )
}
