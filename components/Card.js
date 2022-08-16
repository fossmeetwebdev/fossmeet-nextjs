import styles from "../styles/Media.module.css";

const Card = ({img_name}) => {
  let location = "/gallery_images/".concat(img_name);
  return (
    <div>
      <div className = {styles.image_container}>
        <img src={location} className = {styles.image_card}/>
      </div>
    </div>
  )
}

export default Card