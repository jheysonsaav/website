/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

function PageNotFound(): JSX.Element {
  return (
    <Layout title="404" className="page-404">
      <h1 className="color-primary">404</h1>
      <h2>Page Not Found</h2>
    </Layout>
  );
}

export default PageNotFound;
