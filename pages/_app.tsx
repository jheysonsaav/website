import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';

function Website({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Website;
