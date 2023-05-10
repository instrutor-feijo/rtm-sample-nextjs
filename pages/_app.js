import Head from "next/head";


function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>rtm-sample</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
