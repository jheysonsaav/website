/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import Head from "next/head";
import Navigation from "@/components/navigation";
import React from "react";

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <Head>
          <title>{`${this.props.title} - JheysonDev` || "JheysonDev"}</title>
          <meta
            name="description"
            content={this.props.description || "Description undefined"}
          />
          <meta
            name="keywords"
            content="JheysonDev, JheysonDev website, Jheyson Saavedra"
          />
          <meta name="author" content="Jheyson Saavedra" />
          <meta name="robots" content="index, follow" />
          <meta name="copyright" content="Jheyson Saavedra" />
          <meta name="theme-color" content="#5294e2" />
          <meta name="color-scheme" content="dark" />
          <meta property="og:site_name" content="JheysonDev Website"/>
          <meta property="og:title" content={this.props.title} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jheysondev.tk" />
          <meta property="og:description" content={this.props.description} />
          <meta
            property="og:image"
            content="https://jheysondev.tk/_next/image?url=%2Fimg%2Flogo.jpg&w=384&q=75"
          />
          <meta name="twitter:creator" content="@JheysonDev" />
          <meta name="twitter:site" content="@JheysonDev" />
          <meta name="twitter:card" content="summary_large_image" />
          <link
            rel="stylesheet"
            href="https://necolas.github.io/normalize.css/latest/normalize.css"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Navigation />
        <main className={this.props.className || this.props.title}>
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;