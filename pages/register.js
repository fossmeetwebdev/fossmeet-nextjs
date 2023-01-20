import React from 'react'
import Head from 'next/head'
import Coming from '../components/LandingPage/Coming'
import styles from '../styles/Register.module.css'
import Script from 'next/script'

function register() {

  function preventRedirection(){
    window.addEventListener('beforeunload', (event) => {
      // event.preventDefault()
      alert('redirecting')
      window.location.replace("http://fossmeet.net")
    })
  }

  return (
    <div>
      {/* <Coming/> */}
      <iframe onLoad={preventRedirection} className={styles.iframe} id="ts-iframe" src="https://www.townscript.com/v2/widget/FOSSMeet23/booking"></iframe> <link rel="stylesheet" href = "https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css" />
      {/* <script id='script'>
        {preventRedirection()}
      </script> */}
    </div>
  )
}

export default register
