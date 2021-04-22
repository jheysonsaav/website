import React, { ComponentType } from "react";
import "@/style/tailwind.css";
import "@/style/fonts.css";

export default function App(
  { Page, pageProps }: { Page: ComponentType<any>; pageProps: any },
) {
  return (
    <>
      <head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </head>
      <div className="w-screen h-screen font-sans font-normal text-gray-800">
        <Page {...pageProps} />
      </div>
    </>
  );
}
