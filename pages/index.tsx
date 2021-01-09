import Header from '@/components/Header';
import Head from 'next/head';

function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>JheysonDev - I am a geek developer and this is my website</title>
      </Head>
      <Header />
      <h1 className="text-red">lorem1000</h1>
    </div>
  );
}

export default Home;
