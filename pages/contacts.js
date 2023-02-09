import Banner from "../components/Banner";
import styles from "../styles/Contacts.module.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Head from "next/head";
function Contacts() {
  return (
    <div>
      <Banner
        image="contacts.webp"
        title="Get in Touch"
        subtitle="Send us a message"
      />
      <div className={`${styles.container}`}>
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default Contacts;
