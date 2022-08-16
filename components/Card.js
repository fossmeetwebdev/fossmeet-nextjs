import styles from "../styles/Media.module.css";

const Card = ({img_name}) => {
  let location = "/gallery_images/".concat(img_name);
  return (
    <div className = {styles.image_container}>
        <img src={location} />
    </div>
  )
}

export default Card