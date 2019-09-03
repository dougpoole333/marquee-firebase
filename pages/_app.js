import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import Cookies from 'js-cookie';

class MyApp extends App {

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Marquee</title>
          <meta charSet="utf-8" />
        </Head>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
