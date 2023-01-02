import styles from "../styles/Media.module.css";
import Card from "../components/Card";
import Modal from "../components/Modal";
import { useRouter } from "next/router";
import Banner from "../components/Banner";
import Head from 'next/head'
const Media = () => {
  let router = useRouter();

  return (
    <div>
      
			<Head>
				<title>FOSS Meet 2022-23</title>
				<meta name='description' content='FOSS Meet 2022-23' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
      <Banner title="Gallery" subtitle="FOSSMeet in Pictures" image="" />

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
