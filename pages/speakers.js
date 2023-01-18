import React from "react";
import styles from "../styles/Speakers.module.css";
import imgDeepika from "../public/images/Deepika.jpg";
import imgPrasad from "../public/images/Prasad.jpg";
import imgASD from "../public/images/asd.jpg"
import Image from "next/image";
import Banner from "../components/Banner";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  BsFacebook,
  BsGlobe,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

function Speakers() {
  const speakersData = [
    {
      name: "Deepika K",
      description: "Deepika Kripanithi, a professor in the MCA department of RV College of Engineering, is a highly accomplished free software advocate and is an active member of the FOSS community. She believes in implementing FOSS wherever she can, so much so that she has inculcated FOSS into her Ph.D. thesis. Ms.Kripanithi has also worked on various communication technologies such as UWB, Lora, BLE, Wi-Fi, and GPS. A torchbearer for women in FOSS, she continues to mentor and motivate them to learn and contribute. She holds a global publication record, publishing over 15 papers, and 2 book chapters, and has over 150 citations to her name.",
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
      description: "He is the co-founder of paperd.ink, an open-source e-paper development board developed in India, that can also be programmed in Arduino IDE. Mr.Khake hails from Chennai, Tamil Nadu. After earning his B.Tech from MIT Pune, he currently works as a Marketing Manager at Inaza full-time. Furthermore, he has published some outstanding articles in the field of global economics and spectrum sensing techniques.",
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
      description: "Known for his passion for free software, Dr. Akshay S Dinesh challenges the principle of personifying people based on their educational or professional backgrounds. Interestingly, he is an MBBS graduate and has done his postgraduate coursework in Medical Law and Ethics, a subject that deals with medico-legal issues. His accomplishments as a programmer include working in a non-profit organization and contributing to many open-source projects, such as Debian and Mozilla. Besides these, he is also a blogger and writes in three different domains: medicine, technology, and social commentary.",
      img: imgASD,
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
      <Banner image="speaker.png" title="Speakers" subtitle="Meet our" />
      <div className={styles.container}>
        {speakersData &&
          speakersData.map((speaker, index) => {
            return (
              <Speaker key={index} data={speaker} />
            );
          })}

        <div className={styles['stay-tuned']}>
          <h4>Stay tuned for more speakers!</h4>
        </div>
      </div>
    </div>
  );
}

function Speaker(speaker_data){

  
  let speaker = speaker_data.data
  

  // let [width, setWidth] = useState(0)
  let [open, setOpen] = useState(true);
  
  // Something wrong here, needs fixing
  // const handleWindowResize = () => {
  //   setWidth(window.innerWidth);
  //   width < 660 ? setOpen(true): setOpen(false);
  // }
  
  // useEffect(() => {
  //   // component is mounted and window is available
  //   setWidth(window.innerWidth)
  // }, []);

  return(
    <div className={styles.card}>
      <div className={styles.image_container}>
        <Image
          src={speaker.img}
          alt={`Photo of ${speaker.name}`}
          width="400"
          height="400"
          className={styles.Image}
        />
      </div>
      <div className={styles.details}>
        <div className={styles['personal-info']}>
          <div className={styles['name-arrow']}>
            <h2 className={styles.name}>{speaker.name}</h2>
            <img
              className={`${styles["description-drop-icon"]} ${
                open ? styles["up-down"] : ""
              }`}
              onClick={() => setOpen((curr) => !curr)}
              src="/icons/chevron-down.svg"
            />
          </div>
          {open &&  <p className={styles.description}>{speaker.description}</p>}
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
        <h3 className={styles.name}>Talk</h3>
        <ul>
          {speaker.events.map((speakerEvent) => {
            return (
              <li key={speakerEvent.name}>{speakerEvent.name}</li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Speakers;
