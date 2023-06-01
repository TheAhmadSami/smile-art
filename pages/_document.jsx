/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

const Document = (props) => {
  return (
    <Html>
      <Head>
        <title>SmileArt</title>
        <meta
          name="description"
          content="Al Ola Business Services is a full-service provider for information management, specializing in large scale document scanning and conversion services. We have provided professional digitization services for the top companies in Egypt"
        />

        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />

        <link rel="canonical" href="http://www.smileart-eg.com/" />

        <meta property="og:type" content="Website" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="http://www.smileart-eg.com/" />
        <meta
          property="og:site_name"
          content="Arabesque Decoration Contracting LLC."
        />
        <meta property="og:updated_time" content="2019-02-15T15:35:35+00:00" />
        <meta
          property="og:image"
          content="http://alola-eg.com/_code_/media/website_image.png"
        />
        <meta
          property="og:image:secure_url"
          content="http://alola-eg.com/_code_/media/website_image.png"
        />

        <meta name="geo.region" content="EGYPT-CAIRO" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0705616,31.3360852" />
        <meta name="ICBM" content="30.0705616,31.3360852" />

        <meta property="article:tag" content="Smile Art" />
        <meta property="article:section" content="Engineering" />
        <meta
          property="article:published_time"
          content="2019-03-06T16:31:08+00:00"
        />
        <meta
          property="article:modified_time"
          content="2019-07-15T15:35:35+00:00"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Smile Art Modern Systems Inc" />
        <meta
          name="twitter:description"
          content="Al Ola Business Services is a full-service provider for information management, specializing in large scale document scanning and conversion services. We have provided professional digitization services for the top companies in Egypt"
        />
        <meta name="twitter:url" content="http://www.smileart-eg.com/" />
        <meta
          name="twitter:image"
          content="http://alola-eg.com/_code_/media/website_image.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
