// Copyright (C) Jheyson Saavedra ~ All right reserved.
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
      <Html lang="en" translate="no">
        <Head>
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="JheysonDev, Jheyson Saavedra, Developer, Blog, Technology"
          />
          <meta name="author" content="Jheyson Saavedra" />
          <meta name="twitter:site" content="@JheysonDev" />
          <meta name="twitter:creator" content="@JheysonDev" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:domain" content="jheysondev.tk" />
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
          <meta name="theme-color" content="#3B82F6" />
          <meta name="color-scheme" content="light dark" />
          <link rel="stylesheet" href="/fonts/Inter.css" />
          <link rel="stylesheet" href="/fonts/JetBrainsMono.css" />
        </Head>
        <body className="h-screen text-gray-800 bg-gray-50 font-sans font-normal dark:text-gray-200 dark:bg-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
