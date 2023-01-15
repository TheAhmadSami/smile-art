/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = (props) => {
  return (
    <Html dir={props.locale === "ar" ? "ltr" : "ltr"} lang={props.locale}>
      <Head>
        <title>SmileArt</title>
        <meta
          name="description"
          content="Al Ola Business Services is a full-service provider for information management, specializing in large scale document scanning and conversion services. We have provided professional digitization services for the top companies in Egypt"
        />

        <link rel="shortcut icon" href="_code_/logo.ico" type="image/x-icon" />

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

        <link
          rel="stylesheet"
          href="_code_/assets/bootstrap_4_3_1/bootstrap.css"
        />
        <link
          rel="stylesheet"
          href="_code_/assets/font-awesome-5.12/css/all.css"
        />
        <link rel="stylesheet" href="_code_/webfonts/Roboto/Roboto.css" />
        <link rel="stylesheet" href="_code_/css/custom-classes.css" />
        <link rel="stylesheet" href="_code_/css/hover-min.css" />
        <link rel="stylesheet" href="_code_/css/reset.css" />
        <link rel="stylesheet" href="_code_/assets/slick/slick.css" />
        <link rel="stylesheet" href="_code_/assets/slick/slick-theme.css" />
        <link rel="stylesheet" href="_code_/assets/swiper/swiper.min.css" />
        <link
          rel="stylesheet"
          href="_code_/assets/breaking-news/breaking-news-ticker.css"
        />
        <link
          type="text/css"
          rel="stylesheet"
          href="_code_/assets/lightgallery/css/lightgallery.css"
        />
        <link rel="stylesheet" href="_code_/css/styles.css" />
        <link rel="stylesheet/less" href="_code_/css/styles.less" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="_code_/js/jquery-3.4.1.min.js"></script>
        <script src="_code_/js/popper.js"></script>
        <script src="_code_/js/less.js"></script>
        <script src="_code_/assets/bootstrap_4_3_1/bootstrap.bundle.min.js"></script>
        <script src="_code_/assets/bootstrap_4_3_1/bootstrap.min.js"></script>
        <script src="_code_/js/jquery.fittext.js"></script>
        <script src="_code_/js/mixitup.min.js"></script>
        <script src="_code_/assets/slick/slick.min.js"></script>
        <script src="_code_/assets/swiper/swiper.min.js"></script>
        <script src="_code_/assets/breaking-news/breaking-news-ticker.min.js"></script>
        <script src="_code_/assets/lightgallery/js/lightgallery-all.min.js"></script>
        <script src="_code_/js/script.js"></script>

  <div id="THE_RESPONCE_DIV_ID"></div>
      </body>
    </Html>
  );
};

export const getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx?.locale || "en" };
};

export default Document;
