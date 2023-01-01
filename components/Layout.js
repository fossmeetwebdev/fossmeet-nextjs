import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import styles from "../styles/Layout.module.css";
import Head from 'next/head'
export default function Layout({ children }) {
  return (
    <div>
      
			<Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <Navbar />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
}
