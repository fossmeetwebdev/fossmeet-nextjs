import "../styles/globals.css";
import Layout from "../components/Layout.js";
import "../styles/globals.css";
import '../styles/globals.css'
import "../components/card/card.css";
import "../components/header/header.css";
import "../components/navbar/navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/card1/cards1.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
