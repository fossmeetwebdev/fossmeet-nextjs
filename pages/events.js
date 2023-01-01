import React from 'react'
import Head from 'next/head'
import Coming from '../components/LandingPage/Coming'
function events() {
  return (
        <div className="error">      
			<Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <Coming/>
      </div>

  )
}

export default events
