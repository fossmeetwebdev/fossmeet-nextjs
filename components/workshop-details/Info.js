import styles from "../../styles/workshop-details/Info.module.css"

function Info(props){
    return (
        <div className={styles['info-container']}>
            <h2 className={styles['info-heading']}>Event Info</h2>
            <div className={styles.info}>Date: {props.date}</div>
            <div className={styles.info}>Timing: {props.timing}</div>
            <div className={styles.info}>Venue: {props.venue}</div>
            <div className={styles.info}>Conducted by: {props.cby}</div>
            <hr />
            <div className={styles.contact}>To know more about this event, please contact <br /><br /> {props.contact} </div>
        </div>
    )
}

Info.defaultProps = {
    date: "25 December",
    timing: "3 Am IST",
    venue: "SSL Lab",
    cby: "Marcus",
    contact: "John Doe: johndoe@doemail.doe"
}

export default Info;