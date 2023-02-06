import { useRouter } from "next/router";
import styles from "../../styles/event-details/EventDetails.module.css"
import Description from "../../components/event-details/Description";
import Info from "../../components/event-details/Info";
import Banner from "../../components/Banner";
import events from "/public/events.json";
import Error from "/pages/404.js";
import { useEffect, useState } from "react";
import Link from "next/link";

const Event = () => {
    const router = useRouter()

    let [id, setId] = useState(0)
    let [event, setEvent] = useState({})
    function nextEvent(){
        setId(id+1)
    }
    function prevEvent(){
        setId(id-1)
    }

    function findEvent() {
        let i = 0;
        for(i ; i < events.length; i++){
            if(events[i].id == id){
                setEvent(events[i])
                router.push(`/events/${id}`, undefined, { shallow: true })
                break
            }
        }if(i == events.length)
            setEvent({"Error": 404})
    }
    
    useEffect(()=> {
        if(!router.isReady) return
        setId(Number(router.query.id))
    },[router.isReady])

    useEffect(() => {
        findEvent()
    },[id])

    // console.log(event)
    if(event.Error)
        return(<Error />)
    else
        return(
            <div>
                {/* <Coming /> */}
                {/* bannner */}
                <Banner title="Event Details" subtitle="More about" />
                <div className={`${styles['event-details-container']} margin`}>
                {/* workshop description */}
                    {/* <div className={styles["description-container"]}> */}
                        <Description
                        about={event.about}
                        prereqs={event.prereqs}
                        />
                    {/* </div> */}

                    {/* workshop info */}
                    {/* <div className={styles["info-container"]}> */}
                        <Info
                        date={event.date}
                        timing={event['start_time']}
                        venue={event.venue}
                        // cby={}
                        speaker={event.by}
                        speakerNames={event.speakers}
                        speakerImages={event.images}
                        // contact={}
                        />

                    {/* </div> */}
                    <div className={styles['event-navigation']}>
                        {(id>1) ? <div className={styles['nav-button']} onClick={prevEvent} >
                            <img
                                className={styles.left}
                                src="/images/assets/chevron-down.svg"
                            />
                            {/* <p>Previous event</p> */}
                        </div>: ""}
                        <div className={styles['nav-button']}>
                            <Link href="/schedule">Back to schedule</Link>
                        </div>
                        {(id < events.length) ? <div className={styles['nav-button']} onClick={nextEvent}>
                            {/* <p>Next event</p> */}
                            <img
                            className={styles.right}
                            src="/images/assets/chevron-down.svg"
                            />
                        </div>: ""}
                    </div>
                </div>
            </div>
        );
}

export default Event