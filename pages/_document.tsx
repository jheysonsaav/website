import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html translate="no" lang="en">
        <Head>
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
            href="/fonts/Inter/Inter-Medium.woff2"
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
        <body className="font-sans font-normal text-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
