import React from "react";
import styles from "../styles/Speakers.module.css";
import imgDeepika from "../public/images/speakers/Deepika.jpg";
import imgPrasad from "../public/images/speakers/Prasad.jpg";
import imgASD from "../public/images/speakers/asd.jpg"
import imgGopi from "../public/images/speakers/Gopi.jpg"
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
      name: "Dr. Deepika K",
      description: "Dr. Deepika Kripanithi, a professor in the MCA department of RV College of Engineering, is a highly accomplished free software advocate and is an active member of the FOSS community. She believes in implementing FOSS wherever she can, so much so that she has inculcated FOSS into her Ph.D. thesis. Ms.Kripanithi has also worked on various communication technologies such as UWB, Lora, BLE, Wi-Fi, and GPS. A torchbearer for women in FOSS, she continues to mentor and motivate them to learn and contribute. She holds a global publication record, publishing over 15 papers, and 2 book chapters, and has over 150 citations to her name.",
      img: imgDeepika,
      events: [{ name: "Oxygenate your systems with FOSS" }],
      links: {
        facebook: "",
        instagram: "",
        web: "https://deepikak.in",
        twitter: "",
        youtube: "",
        linkedin: "",
      },
    },
    {
      name: "Prasad Khake",
      description: "He is the co-founder of paperd.ink, an open-source e-paper development board developed in India, that can also be programmed in Arduino IDE. Mr.Khake hails from Chennai, Tamil Nadu. After earning his B.Tech from MIT Pune, he currently works as a Marketing Manager at Inaza full-time. Furthermore, he has published some outstanding articles in the field of global economics and spectrum sensing techniques.",
      img: imgPrasad,
      events: [{ name: "Paperd.ink's journey" }],
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
      name: "Dr. Akshay S Dinesh",
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
     {
     name: "Gopikrishna Sashikumar",
     description: "He is a machine learning engineer at FullContact Inc. and runs project initiatives for the TinkerHub Foundation. Hailing from Kottayam, Kerala, he has completed his B.Tech in Computer engineering from the Rajiv Gandhi Institute of Technology, Kottayam, where he founded the RIT Chapter of Tinkerhub and worked on a Computer Vision project whilst implementing the Pytorch Learning Program.  In addition, Mr.Sashikumar has several stimulating open-source projects under his belt. RITA - a virtual voice assistant, and JOJI- a project that converts text to a corresponding emoji, are a few among his impressive array of projects.",
       img: imgGopi,
     events: [{ name: "AI for solving regional problems" }],
      links: {
        facebook: "",
         instagram: "",
      web: "https://github.com/GopikrishnanSasikumar",
       twitter: "",
       youtube: "",
      },
     },
  ];

  return (
    <div>
      <Banner image="speaker.png" title="Speakers" subtitle="Meet our" />
      <div className={styles.container}>
        {speakersData &&
          speakersData.map((speaker, index) => {
            return (
              <Speaker data={speaker} key={index} id={index} />
            );
          })}

        <div className={styles['stay-tuned']}>
          <h3>More speakers coming soon...</h3>
        </div>
      </div>
    </div>
  );
}

function Speaker(speaker_data){

  let speaker = speaker_data.data
  let key = speaker_data.id
  // let [width, setWidth] = useState(0)
  let [open, setOpen] = useState(false);
  
  // Something wrong here, needs fixing
  // const handleWindowResize = () => {
  //   setWidth(window.innerWidth);
  //   width < 660 ? setOpen(true): setOpen(false);
  // }
  
  // useEffect(() => {
  // component is mounted and window is available
  //   setWidth(window.innerWidth)
  // }, []);

  // useEffect(()=>{
  //   console.log(width);
  // },[width])

  function revealDescription(e){ 
    let key = e.target.id

    let icon = document.getElementById(key);
    let description = document.getElementById(`description-${key}`);
    let display = window.getComputedStyle(description).display;
    console.log("Key: ",key)
    console.log(`description-${key}`)
    console.log('description:', description)
    console.log(display)
    if(display === 'none')
      description.style.display = 'block';
    else
      description.style.display = 'none';

    if (open) {
      icon.classList.remove('up-down')
      setOpen(false)
    }else{
      icon.classList.add('up-down')
      setOpen(true)
    }
  }

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

        <div className={styles['personal-info-web']}>
          <h2 className={styles.name}>{speaker.name}</h2>
          <p className={styles.description}>{speaker.description}</p>
        </div>
          
          {/* {open &&  <p className={styles.description}>{speaker.description}</p>} */}
        
      </div>
      <div className={styles.events}>
        <div>
            <summary className={styles['summary-name']}>
              <h3>{speaker.name}</h3>
              <img
                width={20}
                height={20}
                onClick={revealDescription}
                id={`${key}`}
                className={`${styles["description-drop-icon"]} ${
                  open ? styles["up-down"] : ""}`}
                src="/icons/chevron-down.svg"/>
            </summary>
          <h3 className={ `${styles.talk} ${styles.name}` } >Talk</h3>
          
          {/* Events */}
          <ul>
            {speaker.events.map((speakerEvent) => {
              return (
                <li key={speakerEvent.name}>{speakerEvent.name}</li>
              );
            })}
          </ul>
        </div>

        {/* Links */}
        <div className={styles.links}>
          {speaker.links.web && (
            <a href={speaker.links.web} className={styles.link} target="_blank" rel="noopener noreferrer">
              <BsGlobe size={20} sizes="(max-width: 820px) 10px, 20vw" />
            </a>
          )}
          {speaker.links.facebook && (
            <a
              href={speaker.links.facebook}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={20} />
            </a>
          )}
          {speaker.links.instagram && (
            <a
              href={speaker.links.instagram}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={20} />
            </a>
          )}
          {speaker.links.twitter && (
            <a
              href={speaker.links.twitter}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={20} />
            </a>
          )}
          {speaker.links.youtube && (
            <a
              href={speaker.links.youtube}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube size={20} />
            </a>
          )}
          {speaker.links.linkedin && (
            <a
              href={speaker.links.linkedin}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Mobile description */}
      <p id={`description-${key}`} className={styles['description-mob']}>{speaker.description}</p>
    </div>
  )
}

export default Speakers;
