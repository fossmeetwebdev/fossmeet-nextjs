import styles from "../styles/Banner.module.css";

//  Pass the name of image for banner background as prop

Banner.defaultProps = {
  image: "",
  subtitle: "Loreum",
  title: "Ipsum Dolor Sit Amet",
};

export default function Banner(props) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(banners/${props.image})` }}
    >
      <div className={styles.subtitle}>{props.subtitle}</div>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
}
