import styles from "../../styles/event-details/Info.module.css"
import Image from "next/image";
function Info(props){
    return (
        <div className={styles['info-container']}>
            <h2 className={styles['info-heading']}>Event Info</h2>
            <div className={styles.info}>Date: {props.date}</div>
            <div className={styles.info}>Timing: {props.timing}</div>
            <div className={styles.info}>Venue: {props.venue}</div>
            <div className={styles.info}>Conducted by:</div>
            <div className={styles.speakers}>
                {/* {console.log(props.speakers)} */}
                {props.speakerImages.map((speaker, k) => {
                    return(
                        <div key={k} className={styles['speaker-container']}>
                            <Image
                                src={speaker}
                                alt="speaker"
                                width={80}
                                height={80}
                                className={styles.img}
                                />
                            <p className={styles.name}>{props.speakerNames[k]}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
            <div className={styles.contact}>To know more about this event, please contact <br /><br /> {props.contact} </div>
        </div>
    )
}

Info.defaultProps = {
    date: "25 December",
    timing: "3 Am IST",
    venue: "SSL Lab",
    speakerNames: ["Akshay", "Deepika"],
    speakerImages:["/images/speakers/asd.jpg","/images/speakers/Deepika.jpg"],
    contact: "John Doe: johndoe@doemail.doe"
}

export default Info;