import Head from "next/head";
import Header from "@/components/Header";

interface LayoutProps {
  title: string;
  defaultTitle?: boolean;
  description?: string;
  className?: string;
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
        <meta name="description" content={props.description} />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content={globalTitle} />
        <meta property="og:site_name" content="Jheyson Saavedra" />
        <meta property="og:title" content={globalTitle} />
        <meta property="og:description" content={props.description} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jheysonsaav" />
        <meta name="twitter:creator" content="@jheysonsaav" />
      </Head>
      <Header />
      <main className={props.className}>{props.children}</main>
    </>
  );
}

export default Layout;
