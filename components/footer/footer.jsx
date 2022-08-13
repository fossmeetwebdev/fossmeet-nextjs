import "./footer.css";

export default function Footer() {
  return (
    <section className="footer">
  <div className="d-flex justify-content-start">
    <img className="ftr-image1" src="fosscell-1@2x.png" alt="fosscell" />
    <img className="ftr-image" src="csea-1@2x.png" alt="csea_icon" />
    <img className="ftr-image" src="nitc-1@2x.png" alt="nit_calicut" />
  </div>
  <div className="ftr-ctnt">
    <p>
      FOSSMeet’23 - an event conducted by,
      <br /> FOSSCell and CSEA of National Institute of
      <br />
      Technology, Calicut
    </p>
  </div>
  <div className="d-flex justify-content-start" id="icons">
    <span className="icons">
      <i className="fa-brands fa-facebook-f" style={{ margin: 20 }} />
      <i className="fa-brands fa-twitter" style={{ margin: 20 }} />
      <i className="fa-brands fa-instagram" style={{ margin: 20 }} />
      <i className="fa-solid fa-envelope" style={{ margin: 20 }} />
    </span>
  </div>
  <div className="ftr-ctnt1">
    <p>Follow us on our Socials!</p>
  </div>
</section>

  );
}
