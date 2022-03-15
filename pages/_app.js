import Layout from "../components/Layout";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

// import allReducers from "../redux/store";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// const store= createStore(allReducers);

function MyApp({ Component, pageProps }) {
  return (
    // <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </Provider>
  );
}

export default MyApp;
