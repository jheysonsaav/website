/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

class About extends React.Component {
  render() {
    return (
      <Layout
        title="About"
        description="this is the page about me and my profession"
        className="page_about_containner"
      >
        <div className="about_left">
          <h1>Jheyson Saavedra</h1>
          <p>
            I am a developer from Colombia, passionate about web-focused
            programming and a linux lover
          </p>
        </div>
        <div className="about_right">
          <Image
            src="/img/logo.jpg"
            width={300}
            height={300}
            alt="JheysonDev Logo"
          />
        </div>
      </Layout>
    );
  }
}

export default About;
