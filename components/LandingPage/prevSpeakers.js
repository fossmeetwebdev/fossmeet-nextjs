import styles from "../../styles/LandingPage/PrevSpeakers.module.css"
import img1 from '../../public/images/Bradley.jpg'
import img2 from '../../public/images/sasikumar.png'
import img3 from '../../public/images/Amol Kahat.jpg'
import img4 from '../../public/images/marco.jpg'
// import img1 from '../../public/images/dropdown-arrow2-512-1@2x.png'
import Image from 'next/image'

function prevSpeakers() {
  const data = [
    {},
    {},
    {},
    {}]

  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <p>
                Once upon a time in FOSSMeet...
            </p>
            <h1>
                Some Previous Speakers
            </h1>
        </div>

        <div className={styles.cards_container}>

            <div className={styles.card}>
                <div className={styles.author}>
                    <div className={styles.image_container}>
                        <Image
                        src={img1}
                        alt="image"
                        width="300"
                        height="320"
                        className={styles.Image} />
                    </div>
                    <div className={styles.details}>
                        <h3>Bradley M Kuhn</h3>
                        <p>Free software Acitvist</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.author}>
                    
                    <div className={styles.image_container}>
                        <Image
                        src={img2}
                        alt="image"
                        width="300"
                        height="320" 
                        className={styles.Image}/>
                    </div>
                    <div className={styles.details}>
                        <h3>Dr. Sasi Kumar</h3>
                        <p>Director, FSF India</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.author}>
                    <div className={styles.image_container}>
                        <Image
                        src={img3}
                        alt="image"
                        width="300"
                        height="320"
                        className={styles.Image} />
                    </div>
                    <div className={styles.details}>
                        <h3>Amol Kahat</h3>
                        <p>Red Hatter, Open source enthusiast</p>
                    </div>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.author}>
                    
                    <div className={styles.image_container}>
                        <Image
                        src={img4}
                        alt="image"
                        width="300"
                        height="320" 
                        className={styles.Image}/>
                    </div>
                    <div className={styles.details}>
                        <h3>Marco Fioretti</h3>
                        <p>Author and Researcher</p>
                    </div>
                </div>
            </div>            

        </div>
    </div>
  )
}

export default prevSpeakers