import styles from "../styles/Media.module.css";
import Link from "next/link";

const Card = ({ img_name, alt }) => {
  let location = "/gallery_images/".concat(img_name);
  let media_url = "media/?image=".concat(img_name);
  return (
    <div>
      <div className={styles.image_container}>
        <Link href={media_url}>
          <img src={location} alt={alt} className={styles.image_card} />
        </Link>
      </div>
    </div>
  );
};

export default Card;

Card.defaultProps = {
  alt: "FOSSMeet picture",
};
