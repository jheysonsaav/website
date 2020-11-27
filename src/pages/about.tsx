/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

class About extends React.Component {
  render() {
    return (
      <Layout title="About" className="page_about_containner">
        <div className="about_left">
          <h1>Jheyson Saavedra</h1>
          <p>
            I am a developer from Colombia, I am very passionate about
            programming focused on the web and passionate about linux
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
