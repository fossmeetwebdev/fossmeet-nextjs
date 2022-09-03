import '../styles/globals.css'
// import "../components/card/card.css";
import "../components/header/header.css";
import "../components/navbar/navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/card1/cards1.css";
import "../components/footer/footer.css"
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return( 
  <>
    
  <Script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
  crossorigin="anonymous"/>
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
