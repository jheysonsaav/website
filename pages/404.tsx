import Image from 'next/image';
import Header from '@/components/Header';

function ErrorPage(): JSX.Element {
  return (
    <div className="text-center">
      <Header />
      <div className="p-2">
        <Image
          src="/img/page_not_found.svg"
          width="500"
          height="500"
          className="select-none"
        />
        <h1 className="font-bold text-xl md:text-4xl">404 - Not Found</h1>
      </div>
    </div>
  );
}
export default ErrorPage;
