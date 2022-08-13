import "./navbar.css";

export default function Navbar() {
  return (
    <section id="first-page">
  <nav id="heading" className="navbar navbar-expand-lg navbar-light">
    <a id="heading1" className="navbar-brand" href="#">
      FOSSMeet'22
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div id="headeroptions">
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div id="headeroptions" className="navbar-nav">
          <a className="top-hdr1" id="top-header" href="#">
            About <span className="sr-only">(current)</span>
          </a>
          <a id="top-header" className="nav-item nav-link" href="#">
            FAQ
          </a>
          <a id="top-header" className="nav-item nav-link" href="#">
            Contacts
          </a>
          <a id="top-header" className="nav-item nav-link disabled" href="#">
            Code of conduct
          </a>
          <a id="top-header" className="nav-item nav-link disabled" href="#" />
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <a id="top-header" className="nav-item nav-link" href="#">
              Login
            </a>
            <button type="button" className="btn btn-primary" id="rndbtn">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <section></section>
</section>

  );
}