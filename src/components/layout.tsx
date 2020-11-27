/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import Head from "next/head";
import Navigation from "@/components/navigation";
import React from "react";

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <Head>
          <title>{`${this.props.title} - JheysonDev`}</title>
          <meta
            name="description"
            content={this.props.description || "Description undefined"}
          />
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
