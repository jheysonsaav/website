/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

class PageNotFound extends React.Component {
  render() {
    return (
      <Layout title="404">
        <Image
          src="/img/not_found.png"
          alt="404 Page Not Found"
          width={500}
          height={500}
        />
        <h1>Page Not Found</h1>
      </Layout>
    );
  }
}

export default PageNotFound;
