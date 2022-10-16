import React from 'react'
import styles from '../../styles/LandingPage/What.module.css'
import Image from 'next/image'
import img from '../../public/images/foss-meet-expo-final.svg'

export default function whatFoss() {
  return (
    <div className={styles.what_container}>
      <div className={styles.what_heading}>
        <p>
          What is FossMeet? 
        </p>
        <h1>
           An annual gathering to celebrate the freedom in FOSS 
           featuring exciting events, workshops, and brilliant speakers.
        </h1>
      </div>
      <div className={styles.what_img}>
        <div>
        <Image src={img} alt="FOSS Meet" width="1200" height="600"/>
        </div>
      </div>
    </div>
  )
}
