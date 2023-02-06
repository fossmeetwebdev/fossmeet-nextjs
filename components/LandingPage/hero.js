import React from 'react'
import styles from '../../styles/LandingPage/Hero.module.css'
import Image from 'next/image'
import logo from '../../public/images/assets/landing-page-illustration-1.svg'
function Hero(){ 

  function show(){
    console.log(document.getElementById('notif').classList)
    let notif = document.getElementById('notif')
    notif.classList.add(styles.show)
    setTimeout(() => notif.classList.remove(styles.show), 5000)
  }

  return (
    <div className={styles.container} onLoad={show}>
      <div className={styles.notification} id="notif">
        <p>Registration ends Feb. 7<sup>th</sup> 11 PM</p>
      </div>
      <div className={styles.heading}>
        <h1>
          It&apos;s Free<br/> and Open.
        </h1>
        <p>
          Nope, not like free beer at an open bar. It&apos;s much more than that.
        </p>
      </div>
      <div className={styles['image-container']}>
          <Image src={logo} alt="FOSS Cell NITC" className={styles.img} height="700px" width="1000px" />
      </div>
    </div>
  )
    
  

}



  

export default Hero