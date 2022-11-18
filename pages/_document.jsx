import { Html, Head, Main, NextScript } from "next/document";

const Document = (props) => {
  return (
    <Html
      dir={props.locale === "ar" ? "rtl" : "ltr"}
      lang={props.locale}
    >
      <Head></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

const getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps, locale: ctx?.locale || "en" };
};

export default Document;
