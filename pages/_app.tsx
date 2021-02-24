import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

function Website({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Website;
