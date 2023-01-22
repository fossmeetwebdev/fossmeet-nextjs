import React, { useEffect, useState } from "react";
import styles from "../styles/Schedule.module.css";
import Banner from "../components/Banner";
import Link from "next/link";
import events from "../public/events.json";

const Schedule = () => {
  const convertDateToDay = (eventDate) => {
    switch (eventDate) {
      case "2023-02-10":
        return 1;
      case "2023-02-11":
        return 2;
      case "2023-02-12":
        return 3;
      default:
        return 0;
    }
  };

  const [day, setDay] = useState(1);
  const [eventsSorted, setEventsSorted] = useState([]);

  useEffect(() => {
    const startTimeMap = new Map();
    events.forEach((event) => {
      if (day == convertDateToDay(event.date)) {
        if (startTimeMap.has(event.start_time)) {
          startTimeMap.get(event.start_time).push(event);
        } else {
          startTimeMap.set(event.start_time, [event]);
        }
      }
    });
    setEventsSorted(
      Array.from(startTimeMap).reduce((acc, [start_time, events]) => {
        acc.push({ start_time, events });
        return acc;
      }, [])
    );
  }, [day]);

  return (
    <div>
      <Banner
        image="scedule.png"
        title="Schedule"
        subtitle="Workshops, Seminars and Competitons"
      />
      <div className="margin">
        <div className={styles["tabs"]}>
          {[1, 2, 3].map((dayIterator) => {
            return (
              <>
                <input
                  type="radio"
                  className={styles["tabs__radio"]}
                  name="tabs-day"
                  value={dayIterator}
                  id={`tab${dayIterator}`}
                  onChange={(e) => {
                    setDay(e.target.value);
                  }}
                ></input>
                <label
                  htmlFor={`tab${dayIterator}`}
                  className={styles["tabs__label"]}
                >
                  Day {dayIterator}
                </label>
              </>
            );
          })}
        </div>
        {eventsSorted &&
          eventsSorted.map((eventsSameStartTime) => {
            return (
              <div
                key={eventsSameStartTime.start_time}
                className={styles["events"]}
              >
                <div className={styles["time"]}>
                  <h4>{eventsSameStartTime.start_time}</h4>
                </div>
                <div>
                  {eventsSameStartTime.events.map((event, i) => {
                    return (
                      <Link href={`/events/${event.id}`} key={event.id}>
                        <div className={styles["event"]}>{event.title}</div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Schedule;
