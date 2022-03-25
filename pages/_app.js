import '../styles/globals.css'
//this page wraps all of your page components 

import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
