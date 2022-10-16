import { useState } from "react";
import Button from "./Button";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!toggle);
  };

  return (
    <header className={styles["header"]}>
      <nav className={styles["navbar"]}>
        <Link href="/">
          <a className={styles["nav-logo"]}>FOSSMeet &apos;22</a>
        </Link>
        <div className={styles["nav-menu"]}>
          <Link href="/events">
            <a className={styles["nav-link"]}>Events</a>
          </Link>
          <Link href="/faqs">
            <a className={styles["nav-link"]}>FAQ</a>
          </Link>
          <Link href="/contacts">
            <a className={styles["nav-link"]}>Contacts</a>
          </Link>
          <Link href="code-of-conduct">
            <a className={styles["nav-link"]}>Code of Conduct</a>
          </Link>
        </div>
        <div className={styles["flex-row"]}>
          <Button text="Register" toLink={"/register"} />
          <div className={styles["hamburger"]}>
            {toggle ? (
              <IoMdClose
                onClick={() => {
                  toggleButton();
                }}
                size="30"
              />
            ) : (
              <GiHamburgerMenu
                onClick={() => {
                  toggleButton();
                }}
                size="30"
              />
            )}
          </div>
        </div>
      </nav>
      {toggle && (
        <div className={styles["navbar-mobile"]}>
          <div className={styles["nav-menu-mobile"]}>
            <Link href="/events" >
              <a className={styles["nav-link-mobile"]} 
              onClick={()=>{
              toggleButton()
              }}>Events</a>
            </Link>
            <Link href="/speakers" >
              <a className={styles["nav-link-mobile"]}
              onClick={()=>{
              toggleButton()
              }}>Speakers</a>
            </Link>
            <Link href="/faqs" >
              <a className={styles["nav-link-mobile"]}
              onClick={()=>{
              toggleButton()
              }}>FAQ</a>
            </Link>
            <Link href="/media" >
              <a className={styles["nav-link-mobile"]} 
              onClick={()=>{
              toggleButton()
              }}>Media</a>
            </Link>
            <Link href="code-of-conduct" >
              <a className={styles["nav-link-mobile"]}
              onClick={()=>{
              toggleButton()
              }}>Code of Conduct</a>
            </Link>
            <Link href="/contacts" >
              <a className={styles["nav-link-mobile"]}
              onClick={()=>{
              toggleButton()
              }}>Contact Us</a>
            </Link>
          </div>
          <Link href="https://fosscell.org/" >
            <a className={styles["nav-link-logo"]}
            onClick={()=>{
            toggleButton()
            }}>
              <Image
                src={"/fosscell-logo.jpg"}
                alt={"FOSSCell logo"}
                width="150%"
                height="90%"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
      )}
    </header>
  );
}
