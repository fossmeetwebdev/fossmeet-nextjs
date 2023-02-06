import styles from "../../styles/event-details/Description.module.css";

Description.defaultProps = {
  about: "This event is being worked upon. We will be updating the page once everything is ready to go. Thanks for your patience!",
  // prereqs: ["Nothing", "Much", "For Real"],
};

export default function Description(props) {
  return (
    <div className={styles.container}>

      <h3 className={styles.title}>{props.title}</h3>

      <div className={styles.aboutContainer}>
        <div className={styles.heading}>
          <h3>About</h3>
        </div>
        <p className={styles.about}>{props.about}</p>
      </div>

      {props.prereqs? <div className={styles.prereqContainer}>
        <div className={styles.heading}>
          <h3>Prerequisites</h3>
        </div>
        <div className={styles.prereqs}>
          {/* map prereqs */}
          <ul>
            {props.prereqs.map((pr, i) => (
              <li key={i}>
                {i + 1}. {pr}
              </li>
            ))}
          </ul>
        </div>
      </div>: ""}
    </div>
  );
}
