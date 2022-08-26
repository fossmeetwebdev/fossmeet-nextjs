import Banner from "../components/Banner";
import styles from "../styles/Contacts.module.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";

function Contacts() {
  return (
    <div>
      <Banner
        image="contacts.webp"
        title="Get in Touch"
        subtitle="Send us a message"
      />

      <div className={`${styles.container} margin`}>
        <ContactForm />

        <ContactInfo />
      </div>
    </div>
  );
}

export default Contacts;
