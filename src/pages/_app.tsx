import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import Head from 'next/head';

function Website({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JheysonDev - I am a geek developer and this is my website</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default Website;
