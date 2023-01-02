import styles from "../../styles/LandingPage/Gallery.module.css";
import Card from "../Card";
import Modal from "../Modal";
import { useRouter } from "next/router";

const Media = () => {
  let router = useRouter();

  return (
    <div>
      <Banner title="Gallery" subtitle="FOSSMeet in Pictures"  />

      <div className={`{styles.media_body} margin`}>
        <div className={styles.media_gallery}>
          <Card img_name="1.webp" />
          <Card img_name="2.webp" />
          <Card img_name="3.webp" />
          <Card img_name="4.webp" />
          <Card img_name="5.webp" />
          <Card img_name="6.webp" />
          <Card img_name="7.webp" />
          <Card img_name="8.webp" />
          <Card img_name="9.webp" />
          <Card img_name="10.webp" />
          <Card img_name="11.webp" />
          <Card img_name="12.webp" />
          <Card img_name="13.webp" />
          <Card img_name="14.webp" />
          <Card img_name="15.webp" />
          <Card img_name="16.webp" />
          <Card img_name="17.webp" />
          <Card img_name="18.webp" />
          <Card img_name="19.webp" />
          <Card img_name="20.webp" />
        </div>
      </div>

      {router.query.image && <Modal img_name={router.query.image} />}
    </div>
  );
};

export default Media;

// Ideas: If I cannot use an image modal, we create separate page for image, and add CSS to it.
// https://www.youtube.com/watch?v=P4W_LaotmNI
function Banner(props){
return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(banners/${props.image})` }}
    >
      <div className={styles.subtitle}>
        <p>
        {props.title}
        </p>
          </div>
      <div className={styles.title}>
        <h1>
          {props.subtitle}
          </h1>
        </div>
    </div>
  );
}