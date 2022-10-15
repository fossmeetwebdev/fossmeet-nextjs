import React from 'react'
import Image from 'next/image'
import styles from '../../styles/LandingPage/Who.module.css'
import student from '../../public/images/img_student1.svg'
import teacher from '../../public/images/img_teacher1.svg'
import coding from '../../public/images/img_coders1.svg'
function whoseFoss() {
  return (
    <div className={styles.who_container}>
      <div className={styles.who_heading}>
        <h1>
          Who is it for?
        </h1>
      </div>
      <div className={styles.who_content}>
        <div className={styles.details}>
          {/* <div className={styles.details_heading}> */}
            <h2>
              Students
            </h2>
          {/* </div> */}
          {/* <div className={styles.details_image}> */}
            <Image src={student} alt="Student" />
          {/* </div> */}
          {/* <div className={styles.para}> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus.
            </p>
          {/* </div> */}
        </div>
        <div className={styles.details}>
          <h2>
            Teachers
          </h2>
          <Image src={teacher} alt="teacher" />
          <p>
            Lorem ipsum dolor sit ame, consectetur adipiscing elit. Ut dapibus.
          </p>
        </div>
        <div className={styles.details}>
          <h2>
            Coding Enthusiasts
          </h2>
          <Image src={coding} alt="Coding Enthusiasts" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus.
          </p>
        </div>
      </div>
    </div>
  )
}

export default whoseFoss