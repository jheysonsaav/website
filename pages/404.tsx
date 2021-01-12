import Image from 'next/image';
import Layout from '@/components/Layout';

function ErrorPage(): JSX.Element {
  return (
    <Layout title="Page Not Found - JheysonDev" className="text-center" header>
      <div className="p-2 grid justify-center align-center items-center select-none">
        <Image src="/img/page_not_found.svg" width="450" height="450" alt="Page Not Found JheysonDev" />
        <h1 className="text-gray-800 dark:text-gray-100 font-bold text-xl md:text-4xl">
          404 - Not Found
        </h1>
        <a
          href="/"
          className="text-blue-400 font-medium text-md hover:underline"
        >
          Back to home {'->'}
        </a>
      </div>
    </Layout>
  );
}
export default ErrorPage;
