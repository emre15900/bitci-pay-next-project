import Head from 'next/head'
import Header from '../components/header'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next JS </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>design by Emre</footer>
    </div>
  )
}

export default Layout
