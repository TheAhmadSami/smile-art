import "@sa/styles/globals.scss";
import "@sa/i18n";
import { Provider } from "react-redux";
import { store } from "@sa/redux/store";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
