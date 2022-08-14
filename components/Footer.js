import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles["footer"]} ${styles["flex-col"]}>
      <div className={styles["flex-row"]}>
        <div className={styles["flex-row"]}>
          <Link
            href="https://fosscell.org/"
            className={styles["nav-item"]}
          >
            <Image
              className={styles["logo"]}
              src={"/fosscell-logo.jpg"}
              alt={"FOSSCell Logo"}
              width="100%"
              height="40%"
              objectFit="contain"
            />
          </Link>
          <Link href="https://minerva.nitc.ac.in/?q=activities/computer-science-and-engineering-association">
            <Image
              className={styles["logo"]}
              src={"/csea-logo.jpg"}
              alt={"CSEA Logo"}
              width="40%"
              height="40%"
              objectFit="contain"
            />
          </Link>
          <Link href="http://www.nitc.ac.in">
            <Image
              className={styles["logo"]}
              src={"/nitc-logo.png"}
              alt={"NITC Logo"}
              width="40%"
              height="40%"
              objectFit="contain"
            />
          </Link>
        </div>
        <div>
          <div className={styles["nav-menu"]}>
            <Link href="/events" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Events</a>
            </Link>
            <Link href="/speakers" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Speakers</a>
            </Link>
            <Link href="/faqs" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>FAQ</a>
            </Link>
            <Link href="/media" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Media</a>
            </Link>
            <Link href="code-of-conduct" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Code of Conduct</a>
            </Link>
            <Link href="/contacts" className={styles["nav-item"]}>
              <a className={styles["nav-link"]}>Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
      <hr className={styles["divider"]}></hr>
      <div className={styles["flex-row"]}>
        <div>
          <p>
            FOSSMeet’23 - an event conducted by FOSSCell and CSEA of National
            Institute of Technology, Calicut
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  );
}
