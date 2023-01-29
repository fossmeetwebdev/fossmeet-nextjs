import React from "react";
import styles from "../styles/Events.module.css";

import Image from "next/image";
import imgArya from "../public/images/speakers/Arya.jpg"
import imgRust from "../public/images/events/Kerala Rustaceans.webp"
import imgMic from "../public/images/events/mic.jpg"

import Banner from "../components/Banner";
import { useState, useEffect } from "react";


function Events() {
  const eventsData = [
    {
      name: "Talks",
      description: "Several speakers across diverse fields talk about their experience with FOSS.",
      img: imgMic,
    },
    {
      name: "Rust Workshop",
      description: "Introduction to Rust conducted by Kerala Rustaceans. Kerala Rustaceans is a group of people who are keen on teaching people about Rust. They are active on several social medias like Twitter and Telegram. They conduct several workshops and seminars for people.",
      img: imgRust,
    },
    {
      name: "Nest Workshop",
      description: "Several speakers across diverse fields talk about their experience with FOSS.",
      img: imgArya,
    },
    {
      name: "Panel Discussion",
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

      <div className={styles['description-container']}>
        <h2 className={styles.name}>{event.name}</h2>
        <p className={styles.description}>{event.description}</p>
      </div>

          
          {/* {open &&  <p className={styles.description}>{speaker.description}</p>} */}
        


      {/* Mobile description */}
      {/* <p id={`description-${key}`} className={styles['description-mob']}>{event.description}</p> */}
    </div>
  )
}

export default Events;
