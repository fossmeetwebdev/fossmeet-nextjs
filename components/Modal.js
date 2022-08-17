import styles from "../styles/Media.module.css";
import Link from "next/link"

const Modal = ({img_name}) => {
  let location = "/gallery_images/".concat(img_name);
  let media_url = "media/?image=".concat(img_name);
  return (
    <div>
      <Link href="/media">
        <div className = {styles.modal_container}>
            <img src={location} className = {styles.modal_image}/>
            <p>Click Anywhere to Exit</p>
        </div>
      </Link>
    </div>
  )
}

export default Modal