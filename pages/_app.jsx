import "@sa/styles/globals.scss";
import "@sa/i18n";
import { Provider } from "react-redux";
import { store } from "@sa/redux/store";
import Script from "next/script";
import { Reservation } from "@sa/components";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NBJ2R5NJFQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NBJ2R5NJFQ');
        `}
      </Script>

      <Reservation />

      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
