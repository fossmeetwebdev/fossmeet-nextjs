import styles from "../styles/Button.module.css";

export default function Button({ text, toLink, onClickFunction }) {
  return (
    <button className={`${styles.button}`} role="button">
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: "Button",
  toLink: "#",
  onClickFunction: () => {},
};
