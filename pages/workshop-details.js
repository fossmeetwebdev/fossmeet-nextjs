import { useState, useEffect } from "react";
import styles from "../styles/workshop-details/WorkshopDetails.module.css";
import Description from "../components/workshop-details/Description";
import Info from "../components/workshop-details/Info";
import Banner from "../components/Banner";

import Head from 'next/head'
import Coming from '../components/LandingPage/Coming'
function WorkshopDetails() {
  // API - obtain details of workshop
  // about, prereqs, info

  return (
    <div>
      
			<Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
            <Coming/>
      {/* bannner */}
      {/* <Banner image="workshop-details.png" /> */}

      {/* <div className="container margin"> */}
        {/* workshop description */}
        {/* <div className={styles["description-container"]}>
          <Description />
        </div> */}

        {/* workshop info */}
        {/* <div className={styles["info-container"]}>
          <Info />
        </div>
      </div> */}
    </div>
  );
}

export default WorkshopDetails;
