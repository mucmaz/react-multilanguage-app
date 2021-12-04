import 'tailwindcss/tailwind.css'

import { useEffect } from 'react';
import Head from "next/head";
import configureStore from "../redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { IntlProvider } from "react-intl";
import translations from "../i18n";
import { language } from '../redux/initialValues/defaultLanguage';

const { store, persistor } = configureStore();

function MyApp({ Component, pageProps }) {

  useEffect(()=>{
    if(typeof window !== "undefined"){
      if(!window.localStorage.getItem("language")){
        window.localStorage.setItem("language",language)
        window.location.reload();
      }
    }
  },[])
  
  let lang;
  
  if (typeof window !== "undefined") {
    lang = localStorage.getItem("language");
  }

  return (
    <>
      <Provider store={store}>
        <IntlProvider locale={lang} messages={translations[lang]}>
          <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
            <Head>
              <title>Multi Language App</title>

              {/* FontAwesome cdn */}
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
              <Component {...pageProps} />
          </PersistGate>
        </IntlProvider>
      </Provider>
    </>
  );
}

export default MyApp;
