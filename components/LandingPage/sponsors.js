import React from 'react'
import styles from '../../styles/LandingPage/Sponsor.module.css'
import Image from 'next/image'
import img1 from '../../public/images/nilenso1.png'
import img2 from '/public/images/stickermule-1@2x.png'

function sponsors() {
  return (
    <div className={styles.sponsors}>
      <div className={styles.sponsors_heading}>
        <p>
          A huge thank you to
        </p>
        <h1>
          Our Sponsors
        </h1>
      </div>
      <div className={styles.sponsors_images}>
        <div className={styles.sponsors_image}>
          <Image src={img1} width={200} className={styles.img} alt="Nilenso"/>
        </div>
      </div>
    </div>
  )
}

export default sponsors