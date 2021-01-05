import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

export default class WebsiteDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/fonts/JetBrainsMono.css" />
          <link rel="stylesheet" href="/fonts/Lato.css" />
        </Head>
        <body className="font-mono text-gray-100 bg-gray-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
