import React from 'react'
import Head from 'next/head'
import Coming from '../components/LandingPage/Coming'
import styles from '../styles/Register.module.css'
import Script from 'next/script'

function register() {
  return (
    <div>
      {/* <Coming/> */}
      <iframe className={styles.iframe} id="ts-iframe" src="https://www.townscript.com/v2/widget/FOSSMeet23/booking"></iframe> <link rel="stylesheet" href = "https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" />
    </div>
  )
}

export default register
