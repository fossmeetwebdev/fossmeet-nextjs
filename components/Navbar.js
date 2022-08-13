import { useState } from "react";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar({ signOutWallets, walletConnected }) {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <header className={`${styles["header"]}`}>
      <nav className={`${styles["navbar"]}`}>
        <Link href="/">
          <a className={`${styles["nav-logo"]}`}>FOSSMeet '22</a>
        </Link>
        <div className={`${styles["nav-menu"]}`}>
          <Link href="/events" className={`${styles["nav-item"]}`}>
            <a className={`${styles["nav-link"]}`}>Events</a>
          </Link>
          <Link href="/faq" className={`${styles["nav-item"]}`}>
            <a className={`${styles["nav-link"]}`}>FAQ</a>
          </Link>
          <Link href="/contacts" className={`${styles["nav-item"]}`}>
            <a className={`${styles["nav-link"]}`}>Contacts</a>
          </Link>
          <Link href="code-of-conduct" className={`${styles["nav-item"]}`}>
            <a className={`${styles["nav-link"]}`}>Code of Conduct</a>
          </Link>
        </div>
        <div className={`${styles["buttons"]}`}>
          <Button text="Register" toLink={"/register"} />
          <div className={`${styles["hamburger"]}`}>
            <span className={`${styles["bar"]}`}></span>
            <span className={`${styles["bar"]}`}></span>
            <span className={`${styles["bar"]}`}></span>
          </div>
        </div>
      </nav>
    </header>
  );
}
