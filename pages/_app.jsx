
import { appWithTranslation } from "next-i18next";

import '@sa/styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
  
}

export default appWithTranslation(MyApp);
