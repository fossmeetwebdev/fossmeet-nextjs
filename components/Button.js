import styles from "../styles/Button.module.css";
import Link from "next/dist/client/link";

export default function Button({ text, toLink, onClickFunction }) {
  return (
    <Link href={`/${toLink}`}>
      <button className={styles.button} role="button">
        {text}
      </button>
    </Link>
  );
}

Button.defaultProps = {
  text: "Button",
  toLink: "#",
  onClickFunction: () => {},
};
