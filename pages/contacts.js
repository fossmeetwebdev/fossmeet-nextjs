import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import styles from "../styles/workshop-details/WorkshopDetails.module.css";

function Contacts() {
  return (
    <div>
      {/* bannner */}
      <Banner
        image="contacts.webp"
        title="Get in Touch"
        subtitle="Send us a message"
      />

      <div className={`${styles.container} margin`}>
        {/* workshop description */}
        {/* <div className={styles["description-container"]}>
          <Description />
        </div> */}

        {/* workshop info */}
        {/* <div className={styles["info-container"]}>
          <Info />
        </div> */}
      </div>
    </div>
  );
}

export default Contacts;
