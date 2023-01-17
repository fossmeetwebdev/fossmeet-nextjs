import styles from "../../styles/LandingPage/PrevSpeakers.module.css";
import img1 from "../../public/images/Bradley.jpg";
import img2 from "../../public/images/sasikumar.png";
import img3 from "../../public/images/Amol Kahat.jpg";
import img4 from "../../public/images/marco.jpg";
// import img1 from '../../public/images/dropdown-arrow2-512-1@2x.png'
import Image from "next/image";

function prevSpeakers() {
  const data = [
    {
      name: "Bradley M Kuhn",
      description: "Free software Activist",
      img: img1,
    },
    { name: "Dr. Sasi Kumar", description: "Director, FSF India", img: img2 },
    {
      name: "Amol Kahat",
      description: "Red Hatter, Open source enthusiast",
      img: img3,
    },
    { name: "Marco Fioretti", description: "Author and Researcher", img: img4 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p>Once upon a time in FOSSMeet...</p>
        <h1>Some Previous Speakers</h1>
      </div>

      <div className={styles.cards_container}>
        {data &&
          data.map((prevSpeaker) => {
            return (
              <div key={prevSpeaker.name} className={styles.card}>
                <div className={styles.author}>
                  <div className={styles.image_container}>
                    <Image
                      src={prevSpeaker.img}
                      alt={`Photo of ${prevSpeaker.name}`}
                      width="300"
                      height="320"
                      className={styles.Image}
                    />
                  </div>
                  <div className={styles.details}>
                    <h3>{prevSpeaker.name}</h3>
                    <p>{prevSpeaker.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default prevSpeakers;
