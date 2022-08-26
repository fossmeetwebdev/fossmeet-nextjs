import styles from "../styles/Contacts.module.css";
import { useState } from "react";
import Button from "../components/Button";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState("");

  const sendMessage = () => {
    // setFullName("");
    // setEmail("");
    // setPhone("");
    // setMessage("");
    setToast("✅ Your Message has been sent");
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Full Name"
        type="text"
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
          setToast("");
        }}
        className={styles["form-control"]}
      ></input>
      <input
        placeholder="Email Address"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setToast("");
        }}
        className={styles["form-control"]}
      ></input>
      <input
        placeholder="Phone Number"
        type="number"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          setToast("");
        }}
        className={styles["form-control"]}
      ></input>
      <textarea
        placeholder="Your Message ..."
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          setToast("");
        }}
        rows={5}
        className={styles["form-control"]}
      ></textarea>
      <div className={styles["form-button"]}>
        <Button text="Send" onClickFunction={sendMessage} />
        {toast && <p className={styles.toast}>{toast}</p>}
      </div>
    </form>
  );
};

export default ContactForm;
