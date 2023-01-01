import Banner from "../components/Banner";
import styles from "../styles/Contacts.module.css";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Head from 'next/head'
function Contacts() {
  return (
    <div>
      
			<Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      {/* <div className="error">
        
      </div> */}
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
