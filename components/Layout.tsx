import React, { ReactNode } from "react";
import { useDeno } from "framework/react";

export interface TwitterTags {
  title?: string;
  description?: tstring;
  image?: string;
  card?: "summary" | "summary_large_image";
  site?: string;
  creator?: string;
}

export interface OgTags {
  siteName?: string;
  title?: string;
  description?: string;
  type?: string;
  url?: string;
  image?: string;
}

interface LayoutProps {
  // Basic tags
  title: string;
  description?: string;

  // Page content
  children?: ReactNode;

  // Seo tags
  ogTags?: OgTags;
  twitterTags?: TwitterTags;

  // Robots meta tags
  robots?: {
    index?: boolean | undefined;
    follow?: boolean | undefined;
  };
}

function Layout(props: LayoutProps) {
  const globalTitle = props.title
    ? `${props.title} - Jheyson Saavedra`
    : "Jheyson Saavedra";

  return (
    <>
      <head>
        <title>{globalTitle}</title>
        <meta
          name="description"
          content={props.description || "Jheyson Saavedra"}
        />

        <meta
          property="og:title"
          content={props.ogTags?.title || globalTitle}
        />
        <meta
          property="og:description"
          content={props.ogTags?.description || props.description}
        />
        <meta
          property="og:url"
          content={props.ogTags?.url || location.origin + location.pathname}
        />
        <meta property="og:type" content={props.ogTags?.type || "website"} />
        <meta
          property="og:image"
          content={props.ogTags?.image || "/logo.png"}
        />

        <meta
          name="twitter:card"
          content={props.twitterTags?.card || "summary_large_image"}
        />
        <meta
          name="twitter:image"
          content={props.twitterTags?.image || "/logo.png"}
        />
        <meta name="twitter:domain" content={location.host} />
        <meta
          name="twitter:title"
          content={props.twitterTags?.title || globalTitle}
        />
        <meta
          name="twitter:description"
          content={props.twitterTags?.description || props.descripton}
        />

        <meta
          name="robots"
          content={`${props.robots?.index ? "index" : "noindex"}, ${
            props.robots?.follow ? "follow" : "nofollow"
          }`}
        />
        <link rel="canonical" href={location.origin + location.pathname} />
      </head>
      <main>
        {props.children}
      </main>
    </>
  );
}

export default Layout;
