import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="wrapper">{children}</main>
      <Footer />
    </div>
  );
}
