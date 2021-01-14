// Copyright (C) Jheyson Saavedra ~ All right reserved.
import Head from 'next/head';
import Header from 'src/components/Header';

interface LayoutProps {
  title: string;
  description?: string;
  favicon?: string;
  className?: string;
  header?: boolean;
  footer?: boolean;
  children?: any;
}

function Layout(props: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        {props.favicon ? (
          <link rel="shortcut icon" href={props.favicon} type="image/x-icon" />
        ) : (
          ''
        )}
        {props.description ? (
          <>
            <meta name="description" content={props.description} />
            <meta name="twitter:description" content={props.description} />
            <meta property="og:description" content={props.description} />
          </>
        ) : (
          ''
        )}
        {props.title ? (
          <>
            <title>{`${props.title} - JheysonSaavedra`}</title>
            <meta
              name="twitter:title"
              content={`${props.title} - JheysonSaavedra`}
            />
            <meta
              property="og:title"
              content={`${props.title} - JheysonSaavedra`}
            />
          </>
        ) : (
          ''
        )}
      </Head>
      {props.header ? <Header /> : ''}
      <main className={props.className}>{props.children}</main>
    </>
  );
}

export default Layout;
