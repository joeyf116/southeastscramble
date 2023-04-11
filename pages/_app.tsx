import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Southeast Scramble</title>
        <meta name="title" content="Southeast Scramble" />
        <meta name="description" content="Sub Only. EBI Rules." />
        <meta
          property="image"
          content="https://southeastscramble.com/images/MultiColorS_48.png"
        />
        <meta property="og:title" content="Southeast Scramble" />
        <meta property="og:description" content="Sub Only. EBI Rules." />
        <meta
          property="og:image"
          content="https://southeastscramble.com/images/MultiColorS_48.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
