import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Southeast Scramble" />
        <meta name="description" content="Sub Only. EBI Rules." />
        <meta property="og:title" content="Southeast Scramble" />
        <meta property="og:description" content="Sub Only. EBI Rules." />
        <meta
          property="og:image"
          content="https://southeastscramble.com/images/spinnerAsset5_32.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
