import Head from "next/head";
import Navigation from "@/components/navigation";

interface LayoutProps {
  title: string;
  defaultTitle?: false | boolean;
  description?: string;
  keywords?: string;
  header?: true | boolean;
  children?: React.ReactNode;
}

function Layout(props: LayoutProps): JSX.Element {
  const globalTitle = props.defaultTitle
    ? props.title
    : `${props.title} - Jheyson Saavedra`;

  return (
    <>
      <Head>
        <title>{globalTitle}</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content={
            props.keywords ||
            "Jheyson Saavedra, Software Developer, Rust, Typescript, React, Linux"
          }
        />
        <meta name="author" content="Jheyson Saavedra" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={props.description} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Jheyson Saavedra" />
        <meta property="og:title" content={globalTitle} />
        <meta property="og:description" content={props.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JheysonDev" />
        <meta name="twitter:creator" content="@JheysonDev" />

        <link rel="stylesheet" href="/fonts/Inter/inter.css" />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Inter/Inter-Regular.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Inter/Inter-Italic.woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/fonts/Inter/Inter-Bold.woff2"
          crossOrigin="anonymous"
        />
      </Head>
      {props.header ? <Navigation /> : null}
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
