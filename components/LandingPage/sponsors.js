import React from 'react'
import styles from '../../styles/LandingPage/Sponsor.module.css'
import Image from 'next/image'
import img1 from '../../public/images/nilenso1.png'
import img2 from '../../public/images/fossee-1@2x.png'
import img3 from '/public/images/icfoss-1@2x.svg'
import img4 from '/public/images/stickermule-1@2x.png'

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
          <Image src={img1} alt="Nilenso" width="200" height="50"/>
        </div>
        <div className={styles.sponsors_image}>
          <Image src={img2} alt="Nilenso" width="200" height="50"/>
        </div>
        <div className={styles.sponsors_image}>
          <Image src={img3} alt="Nilenso" width="200" height="50"/>
        </div>
        <div className={styles.sponsors_image}>
          <Image src={img4} alt="Nilenso" width="200" height="50"/>
        </div>
      </div>
    </div>
  )
}

export default sponsors