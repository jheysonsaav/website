import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';

export default class WebsiteDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en" className="light">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="JheysonDev, Jheyson Saavedra, Developer, Blog, Technology"
          />
          <meta name="author" content="Jheyson Saavedra" />
          <meta name="twitter:site" content="@JheysonDev" />
          <meta name="twitter:creator" content="@JheysonDev" />
          <meta
            name="twitter:title"
            content="JheysonDev - I am a geek developer and this is my website"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:site_name"
            content="JheysonDev - I am a geek developer and this is my website"
          />
          <link rel="stylesheet" href="/fonts/JetBrainsMono.css" />
          <link rel="stylesheet" href="/fonts/Lato.css" />
        </Head>
        <body className="text-gray-800 bg-gray-50 font-sans dark:text-gray-200 dark:bg-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
