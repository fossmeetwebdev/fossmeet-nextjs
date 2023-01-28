import React from "react";
import styles from "../styles/Events.module.css";
import imgArya from "../public/images/speakers/Arya.jpg"
import imgRust from "../public/images/events/Kerala Rustaceans.webp"
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

function Events() {
  const eventsData = [
    {
      name: "Talks",
      description: "Several speakers across diverse fields talk about their experience with FOSS.",
      img: imgArya,
    },
    {
      name: "Rust Workshop",
      description: "Introduction to Rust conducted by Kerala Rustaceans",
      img: imgRust,
    },
    {
      name: "Nest Workshop",
      description: "Several speakers across diverse fields talk about their experience with FOSS.",
      img: imgArya,
    },

  ];

  return (
    <div>
      <Banner title="Events" subtitle="View our" />
      <div className={styles.container}>
        {eventsData &&
          eventsData.map((event, index) => {
            return (
              <Event data={event} key={index} id={index} />
            );
          })}

      </div>
      {/* <div className={styles['stay-tuned']}>
        <h3>More events coming soon...</h3>
      </div> */}
    </div>
  );
}

function Event(eventData){

  let event = eventData.data
  let key = eventData.id

  let [open, setOpen] = useState(false);
  
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
          src={event.img}
          alt={`Photo of ${event.name}`}
          width="400"
          height="200"
          className={styles.Image}
        />
      </div>
      <h2 className={styles.name}>{event.name}</h2>
      <div className={styles.details}>
        <div className={styles.description}>
          <p className={styles.description}>{event.description}</p>
        </div>

          
          {/* {open &&  <p className={styles.description}>{speaker.description}</p>} */}
        
      </div>

      {/* Mobile description */}
      {/* <p id={`description-${key}`} className={styles['description-mob']}>{event.description}</p> */}
    </div>
  )
}

export default Events;
