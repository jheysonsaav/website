// Copyright (C) Jheyson Saavedra ~ All right reserved.
import Layout from 'src/components/Layout';
import Image from 'next/image';
import {useRouter} from 'next/router'

function Home(): JSX.Element {
  const { query } = useRouter();

  return (
    <Layout header title="">
      <div className="m-2 inline-block text-center md:flex md:justify-evenly md:items-center md:my-8">
        <Image
          src={`/logo.${'png' || 'svg' || 'ico'}`}
          width={350}
          height={350}
          className="rounded-full w-40 h-40"
        />
        <div className="text-center">
          <h1 className="text-gray-200 text-4xl font-bold">Jheyson Saavedra</h1>
          <span className="text-primary-500 text-md font-semibold">
            Software Developer
          </span>
          <span>{query.asd}</span>
          <p className="text-gray-300 pt-3 max-w-md">
            I am a coffee lover fullstack programmer with experience in
            technologies such as javascript, typescript, react, vue, go etc.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
