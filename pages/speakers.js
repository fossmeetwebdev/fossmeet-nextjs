import React from "react";
import styles from "../styles/Speakers.module.css";
import imgDeepika from "../public/images/Deepika.jpg";
import imgPrasad from "../public/images/Prasad.jpg";
import img3 from "../public/images/Amol Kahat.jpg";
import img4 from "../public/images/marco.jpg";
import Image from "next/image";
import Banner from "../components/Banner";
import Link from "next/link";
import {
  BsFacebook,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

function speakers() {
  const speakersData = [
    {
      name: "Deepika K",
      description: "Professor at RV College of Engineering.",
      img: imgDeepika,
      events: [{ name: "Oxygenate your systems with FOSS" }],
      links: {
        facebook: "",
        instagram: "",
        web: "https://rvce.edu.in/mca-faculty-dk",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
    },
    {
      name: "Prasad Khake",
      description: "Open-Source Hardware. Co Founder of Papered.ink.",
      img: imgPrasad,
      events: [{ name: "paperd.ink's journey" }],
      links: {
        facebook: "",
        instagram: "",
        web: "",
        twitter: "",
        youtube: "",
        linkedin: "https://www.linkedin.com/in/prasadkhake/",
      },
    },
    {
      name: "Akshay S Dinesh",
      description: "Fossmeet 2020 invitee.",
      img: imgDeepika,
      events: [
        { name: "Enough of javascript build tools. Solving real world problems collaboratively through FOSS. " }
      ],
      links: {
        facebook: "",
        instagram: "",
        web: "https://asd.learnlearn.in/about/",
        twitter: "",
        youtube: "",
      },
    },
    // {
    //   name: "Gopikrishna Sashikumar",
    //   description: "Product engineer at entri.app",
    //   img: imgDeepika,
    //   events: [{ name: "AI / ML" }],
    //   links: {
    //     facebook: "",
    //     instagram: "",
    //     web: "https://rvce.edu.in/mca-faculty-dk",
    //     twitter: "",
    //     youtube: "",
    //   },
    // },
  ];

  return (
    <div>
      <Banner image="mic.jpg" title="Speakers" subtitle="Meet our" />
      <div className="margin">
        {speakersData &&
          speakersData.map((speaker) => {
            return (
              <div key={speaker.name} className={styles.card}>
                <div className={styles.image_container}>
                  <Image
                    src={speaker.img}
                    alt={`Photo of ${speaker.name}`}
                    width="200"
                    height="200"
                    className={styles.Image}
                  />
                </div>
                <div className={styles.details}>
                  <div>
                    <h2 className={styles.name}>{speaker.name}</h2>
                    <p>{speaker.description}</p>
                  </div>
                  <div className={styles.links}>
                    {speaker.links.web && (
                      <Link href={speaker.links.web} className={styles.link}>
                        <BsGlobe size={20} />
                      </Link>
                    )}
                    {speaker.links.facebook && (
                      <Link
                        href={speaker.links.facebook}
                        className={styles.link}
                      >
                        <BsFacebook size={20} />
                      </Link>
                    )}
                    {speaker.links.instagram && (
                      <Link
                        href={speaker.links.instagram}
                        className={styles.link}
                      >
                        <BsInstagram size={20} />
                      </Link>
                    )}
                    {speaker.links.twitter && (
                      <Link
                        href={speaker.links.twitter}
                        className={styles.link}
                      >
                        <BsTwitter size={20} />
                      </Link>
                    )}
                    {speaker.links.youtube && (
                      <Link
                        href={speaker.links.youtube}
                        className={styles.link}
                      >
                        <BsYoutube size={20} />
                      </Link>
                    )}
                    {speaker.links.linkedin && (
                      <Link
                        href={speaker.links.linkedin}
                        className={styles.link}
                      >
                        <BsLinkedin size={20} />
                      </Link>
                    )}
                  </div>
                </div>
                <div className={styles.events}>
                  <h3 className={styles.name}>Events</h3>
                  <ul>
                    {speaker.events.map((speakerEvent) => {
                      return (
                        <li key={speakerEvent.name}>{speakerEvent.name}</li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

        <div className={styles['stay-tuned']}>
          <h4>Stay tuned for more speakers!</h4>
        </div>
      </div>
    </div>
  );
}

export default speakers;
