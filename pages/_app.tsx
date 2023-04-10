import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Southeast Scramble</title>
        <meta name="title" content="Southeast Scramble" />
        <meta name="description" content="Sub Only. EBI Rules." />
        <meta property="og:title" content="Southeast Scramble" />
        <meta property="og:description" content="Sub Only. EBI Rules." />
        <meta
          property="og:image"
          content="https://southeastscramble.com/images/spinnerAsset5_32.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
