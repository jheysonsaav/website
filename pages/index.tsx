import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <Layout
      title="Home"
      header
      className="flex flex-col lg:flex-row flex-wrap justify-center items-center mt-4"
    >
      <div className="px-4">
        <Image
          src="/logo.png"
          width="300"
          height="300"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center px-4 mt-4 lg:mt-0">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-left">
            <span className="text-2xl sm:text-3xl">Hello, I'm</span>
            <h1 className="font-bold text-4xl sm:text-5xl">Jheyson Saavedra</h1>
          </div>
          <p className="max-w-full md:max-w-sm lg:max-w-xl pt-4">
            I am a software developer who loves coffee and is passionate about
            open source. I really like working with rust and typescript, I also
            really like doing web development in general, if you want to see my
            best projects and those that I am currently working on, look{" "}
            <Link href="/projects">
              <a className="text-blue-500 hover:text-blue-500">here</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
