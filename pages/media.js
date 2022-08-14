import Head from 'next/head'
import styles from "../styles/Media.module.css";

const media = () => {
  return (
    <div>
        <Head>
            <title>Media</title>
        </Head>

        <div className = {styles.media_showcase}>
            <small>FOSSmeet in Pictures</small>
            <h1>Gallery</h1>
        </div>

        <div>

        </div>

    </div>
  )
}

export default media