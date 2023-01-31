import React from "react";
import styles from "../styles/Speakers-Workshops.module.css";
import imgSasi from "../public/images/speakers/Sasikumar.jpeg";
import imgDeepika from "../public/images/speakers/Deepika.jpg";
import imgAndrew from "../public/images/speakers/andrew.jpg";
import imgPrasad from "../public/images/speakers/Prasad.jpg";
import imgASD from "../public/images/speakers/asd.jpg"
import imgPrab from "../public/images/speakers/prabhanshu.webp"
import imgGoku from "../public/images/speakers/Gokul.jpg"
import imgGopi from "../public/images/speakers/Gopi.jpg"
import imgNand from "../public/images/speakers/Nandakishor.png"
import imgSubin from "../public/images/speakers/Subin.png"
import imgArya from "../public/images/speakers/Arya.jpg"

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
  BsGithub,
} from "react-icons/bs";

function Speakers() {
  const speakersData = [
    {
      name: "Dr. Sasi Kumar",
      description: "Dr. Sasi Kumar is a Free Software activist and a member of the Board of Directors of the Free Software Foundation of India. He has conducted research in atmospheric electricity, rainfall studies and cloud physics and has wrote popular science articles. He has also published three popular science books in Malayalam. He is an educationist and has been teaching school children for about a decade.",
      img: imgSasi,
      events: [{ name: "Keynote Talk" }],
      links: {
        facebook: "",
        instagram: "",
        web: "https://swatantryam.wordpress.com",
        twitter: "",
        youtube: "",
        linkedin: "https://www.linkedin.com/in/sasi-kumar-6770681b2",
      },
    },
    {
      name: "Dr. Deepika K",
      description: "Dr. Deepika Kripanithi, a professor in the MCA department of RV College of Engineering, is a highly accomplished free software advocate and is an active member of the FOSS community. She believes in implementing FOSS wherever she can, so much so that she has inculcated FOSS into her Ph.D. thesis. Dr. Deepika has also worked on various communication technologies such as UWB, Lora, BLE, Wi-Fi, and GPS. A torchbearer for women in FOSS, she continues to mentor and motivate them to learn and contribute. She holds a global publication record, publishing over 15 papers, and 2 book chapters, and has over 150 citations to her name.",
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
    // {
    //   name: "Andrew Bastin",
    //   description: "",
    //   img: imgAndrew,
    //   events: [{ name: "" }],
    //   links: {
    //     facebook: "",
    //     instagram: "",
  //     web: "",
    //     twitter: "",
    //     youtube: "",
    //     linkedin: "",
    //   },
    // },
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
        twitter: "https://twitter.com/asdofindia",
        youtube: "",
      },
    },
    {
      name: "Prabhanshu Gupta",
      description: "Prabhanshu Gupta works as a developer for simple.org. Empowering over 9000 public healthcare organisations, it is a free and open-source application that provides a simple and contextual digital platform to help record patient data enabling the effective treatment of patients with hypertension. He is also a software engineer for Nilenso software and co-founded StreetHack, a company that turns innovative hackathon ideas into products.",
      img: imgPrab,
      events: [
        { name: "Building web apps in the open " }
      ],
      links: {
        facebook: "",
        instagram: "",
        twitter: "",
        youtube: "",
        github: "https://github.com/prabhanshuguptagit",
        linkedin: "https://www.linkedin.com/in/prabhanshu-gupta",
      },
    },
    // {
    //   name: "Gokul Soumya",
    //   description: "",
    //   img: imgGoku,
    //   events: [
    //     { name: "" }
    //   ],
    //   links: {
    //     facebook: "",
    //     instagram: "",
    //     twitter: "",
    //     youtube: "",
    //     github: "",
    //     linkedin: "",
    //   },
    // },
     {
      name: "Gopikrishna Sashikumar",
      description: "He is a machine learning engineer at FullContact Inc. and runs project initiatives for the TinkerHub Foundation. Hailing from Kottayam, Kerala, he has completed his B.Tech in Computer engineering from the Rajiv Gandhi Institute of Technology, Kottayam, where he founded the RIT Chapter of Tinkerhub and worked on a Computer Vision project whilst implementing the Pytorch Learning Program.  In addition, Mr.Sashikumar has several stimulating open-source projects under his belt. RITA - a virtual voice assistant, and JOJI- a project that converts text to a corresponding emoji, are a few among his impressive array of projects.",
      img: imgGopi,
      events: [{ name: "AI for solving regional problems" }],
      links: {
        facebook: "",
        instagram: "",
        github: "https://github.com/GopikrishnanSasikumar",
        twitter: "",
        youtube: "",
        linkedin: "https://linkedin.com/in/gopikrishnan-sasikumar",
      },
     },
     {
      name: "Subin Siby",
      description: "Subin Siby is a tech lead at Big Binary, a company that has a track record of building high-quality web and mobile software with proven results. His foray into the world of programming started at a very young age. The first project that he worked on, a social network called Open was also his first encounter with open source software. A curious learner by nature who is also very passionate about sharing the knowledge he's acquired, Subin runs a blog with over 300 tutorials that shed light on topics that aren't covered extensively on the internet. He also plays an instrumental role in the Varnam Project that deals with the transliteration of Indian languages.",
      img: imgSubin,
      events: [{ name: "Open Source Beginner Experience: Contributing to large projects and web-torrents" }],
      links: {
        facebook: "",
        instagram: "",
        web: "https://subinsb.com/",
        twitter: "",
        youtube: "",
        github: "https://github.com/subins2000",
      },
     },
     {
      name: "Nanda Kishor M Pai",
      description: "As a Machine Learning Engineer with a strong background in Natural Language Processing and Data Science, Nanda Kishor aims to research on model architecture and implement them to automate and accomplish production level accuracy in real-world problems. Being a student at College of Engineering, Trivandrum, Nanda Kishor has already made publications of Machine Learning articles in his Paperspace blog. Being young, aspiring yet so accomplished in his field makes him an integral speaker of our event.",
      img: imgNand,
      events: [{ name: "Hackathons and Importance of Documentation" }],
      links: {
        facebook: "",
        instagram: "",
        web: "https://nmpai.tech/",
        github: "https://github.com/nandakishormpai",
        // twitter: "https://twitter.com/nm22by7",
        youtube: "",
      },
     },
     {
      name: "Arya Kiran",
      description: "Libre Software enthusiast and teenage wunderkind, FOSSMeet'23's youngest speaker, Arya Kiran is a school student from Chennai. From free-software and technology to History and Biology his interests are wide and varied. He has worked on multiple tilde projects including Vern, as a system administrator. He has also developed Sedtrix, a sed-bot and is currently the admin of Project Segfault, which concerns itself with open source development and hosting services.",
      img: imgArya,
      events: [{ name: "Free Software, Decentralization, Self-Hosting and Free Service Hosts" }],
      links: {
        facebook: "",
        instagram: "",
        web: "https://aryak.vern.cc",
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
          width="350"
          height="350"
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
              <BsGlobe size={25} className={styles['link-icon']} />
            </a>
          )}
          {speaker.links.github && (
            <a href={speaker.links.github} className={styles.link} target="_blank" rel="noopener noreferrer">
              <BsGithub size={25} className={styles['link-icon']} />
            </a>
          )}
          {speaker.links.facebook && (
            <a
              href={speaker.links.facebook}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={25} className={styles['link-icon']} />
            </a>
          )}
          {speaker.links.instagram && (
            <a
              href={speaker.links.instagram}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={25} className={styles['link-icon']} />
            </a>
          )}
          {speaker.links.twitter && (
            <a
              href={speaker.links.twitter}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter size={25}  className={styles['link-icon']}/>
            </a>
          )}
          {speaker.links.youtube && (
            <a
              href={speaker.links.youtube}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube size={25} className={styles['link-icon']} />
            </a>
          )}
          {speaker.links.linkedin && (
            <a
              href={speaker.links.linkedin}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={25} className={styles['link-icon']}/>
            </a>
          )}
          <img
                width={20}
                height={20}
                onClick={revealDescription}
                id={`${key}`}
                className={`${styles["description-drop-icon"]} ${
                  open ? styles["up-down"] : ""}`}
                src="/images/assets/chevron-down.svg"/>
        </div>
      </div>

      {/* Mobile description */}
      <p id={`description-${key}`} className={styles['description-mob']}>{speaker.description}</p>
    </div>
  )
}

export default Speakers;
