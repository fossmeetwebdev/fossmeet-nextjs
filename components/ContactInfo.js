import styles from "../styles/Contacts.module.css";

import {BsPinMapFill, BsFillTelephoneFill} from "react-icons/bs";
import {MdAlternateEmail} from "react-icons/md";
import Image from "next/image";

const ContactInfo = () => {
  return <div className={styles["contact-info"]}>

    <div className={styles["contact-info__header"]}>
      <p className={styles["contact-info__header__sub-title"]}>Feel free to reach out to us</p>
      <h2 className={styles["contact-info__header__title"]}>Contact Info</h2>
    </div>

    <div className={styles["contact-info__main"]}>
      <div className={styles["contact-info__main__info"]}>
        <div className={styles["contact-info__main__info__box"]}>
          <div className={styles["contact-info__main__info__box__image"]}><BsPinMapFill/></div>
          <div className={styles["contact-info__main__info__box__text"]}>
            <p>First Floor</p>
            <p>Mini Canteen</p>
            <p>NITC</p>
          </div>
        </div>

        <div className={styles["contact-info__main__info__box"]}>
          <div className={styles["contact-info__main__info__box__image"]}><MdAlternateEmail/></div>
          <p className={styles["contact-info__main__info__box__text"]}>fosscell@nitc.ac.in</p>
        </div>

        <div className={styles["contact-info__main__info__box"]}>
          <div className={styles["contact-info__main__info__box__image"]}><BsFillTelephoneFill/></div>
          <p className={styles["contact-info__main__info__box__text"]}>+91 7511123456</p>
        </div>

      </div>

      <div className={styles["contact-info__main__picture"]}><Image src="/../public/Email_PNG.png" alt="Contact Us Image" width={200} height={200}/></div>
    </div>

  </div>;
};

export default ContactInfo;
