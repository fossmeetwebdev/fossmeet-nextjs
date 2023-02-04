import styles from "../styles/Banner.module.css";

Banner.defaultProps = {
  subtitle: "",
  title: "",
  button: false,
  buttonOnClick: false,
};

export default function Banner(props) {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles["subtitle"]}>{props.subtitle}</div>
        <div className={styles["title"]}>{props.title}</div>
      </div>
      {props.button && (
        <button className={styles["button"]} onClick={props.buttonOnClick}>
          <props.button size="30" className={styles['button-icon']}/>
        </button>
      )}
    </div>
  );
}
