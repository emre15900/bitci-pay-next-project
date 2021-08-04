import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next JS </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
