/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import "@/styles/styles.scss";
import { AppProps } from "next/app";

function Website({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Website;
