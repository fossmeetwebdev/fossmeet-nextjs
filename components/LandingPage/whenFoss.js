import React from 'react'
import Image from 'next/image'
import NITC from '/public/images/rectangle.png'
import Button from "../Button";
import styles from '../../styles/LandingPage/When.module.css'

function whenFoss() {
  return (
    <div className={styles.when}>
      <div className={styles.when_heading}>
        <p>
          And finally,<br/> when and where is it?
        </p>
        <h1>
          10/02/2023
        </h1>
        <h1>
          at 
        </h1>
        <h1>
          National Institute of Technology, Calicut
        </h1>
        <h3>
          Save the date for the exciting 3 day event. See y’all there 
        </h3>
        {/* <div className={styles.when_button}>
          <Button text="Get Tickets" toLink={"/"} />
          <Button text="Location" toLink={"/"} />
        </div> */}
      </div>
      <div className={styles.when_image}>
        <Image src={NITC} alt="NITC" width="1500" className={styles.img}/>
      </div>
    </div>
  )
}

export default whenFoss