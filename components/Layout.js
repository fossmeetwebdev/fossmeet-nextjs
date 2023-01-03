import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import styles from "../styles/Layout.module.css";
import Head from 'next/head'
import Link from 'next/link'
export default function Layout({ children }) {
  return (
    <div>

      <Head>
        <title>FOSS Meet 2022-23</title>
        <meta name='description' content='FOSSMeet is an annual gathering to celebrate the 
        freedom in FOSS featuring exciting events,
        workshops, and brilliant speakers.' />
        {/* <link rel="icon" href="../public/favicon.ico" /> */}
      </Head>
      <Navbar />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
}
