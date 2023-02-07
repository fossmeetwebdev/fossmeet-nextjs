import { useEffect } from "react";
import styles from "../styles/Notification.module.css"

export default function Notification(props){

    function show() {
        let notif = document.getElementById("notif");
        notif.classList.add(styles.show);
        setTimeout(() => notif.classList.remove(styles.show), 4000);
    }

    useEffect(() => show, [])

    return(
        <div className={styles.notification} id="notif">
            <p>{props.message}</p>
        </div>
    )
}