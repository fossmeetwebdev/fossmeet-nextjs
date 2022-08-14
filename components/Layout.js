import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar className={styles.main} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
