/* -- Copyright (C) JheysonDev ~ All right reserved -- */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";

function About(): JSX.Element {
  return (
    <Layout
      title="About"
      description="this is the page about me and my profession"
      className="page-about"
    >
      <div className="about-left">
        <h1>Jheyson Saavedra</h1>
        <ul className="social-networks">
          <li>
            <a href="https://github.com/JheysonDev"></a>
          </li>
          <li>
            <a href="https://twitter.com/JheysonDev"></a>
          </li>
          <li>
            <a href="https://discord.gg/fN9jrZ2">ﭮ</a>
          </li>
        </ul>
        <p>
          I am a developer from Colombia, passionate about web-focused
          programming and a linux lover
        </p>
      </div>
      <div className="about-right">
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

export default About;
