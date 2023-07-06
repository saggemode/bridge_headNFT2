import Dashboard from "../components/pages/dashboard/dashboard";
import Head from "next/head";
const saggePage = () => {
  return (
    <>
    <Head>
        <title>WOOFY</title>
        <meta property='og:title' content='WOOFY' />
        <meta name='twitter:title' content='WOOFY' />
        <meta name='description' content='Mint, buy, sell WOOFY tokens, and enjoy reduced marketplace commission rates for every NFT sale you make.' />
        <meta property='og:description' content='Mint, buy, sell WOOFY tokens, and enjoy reduced marketplace commission rates for every NFT sale you make.' />
        <meta name='twitter:description' content='Mint, buy, sell WOOFY tokens, and enjoy reduced marketplace commission rates for every NFT sale you make.' />
    </Head>
    <Dashboard />
</>
  )
}

export default saggePage