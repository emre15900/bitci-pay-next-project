import "../styles/globals.scss";
import React from "react";
import App from "next/app";

import "bootstrap/scss/bootstrap.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
