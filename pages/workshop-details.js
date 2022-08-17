import { useState, useEffect } from "react";
import styles from "../styles/workshop-details/WorkshopDetails.module.css";
import Description from "../components/workshop-details/Description";
import Info from "../components/workshop-details/Info";
import Banner from "../components/Banner";

function WorkshopDetails() {
  // API - obtain details of workshop
  // about, prereqs, info

  return (
    <div>
      {/* bannner */}
      <Banner image="workshop-details.png" />

      <div className="container margin">
        {/* workshop description */}
        <div className={styles["description-container"]}>
          <Description />
        </div>

        {/* workshop info */}
        <div className={styles["info-container"]}>
          <Info />
        </div>
      </div>
    </div>
  );
}

export default WorkshopDetails;
