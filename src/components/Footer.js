import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareHackerNews } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="section is-primary is-small has-text-centered">
        <div className="container is-narrow">
          <Link className="logo has-text-white" href="/">
            <i className="fak fa-mf-logo fa-4x"></i>
          </Link>
          <div className="columns is-centered">
            <div className="column is-one-third">
              <h1 className="title is-size-4-touch has-text-weight-normal">
                Living, learning, &amp; leveling up one day at a time.
              </h1>
            </div>
          </div>
          <div className="social-icons">
            <p className="field">
              <Link
                className="button is-medium"
                href="https://twitter.com/farleymatters"
                target="_blank"
              >
                <span className="icon is-small">
                  <i className="fab fa-twitter fa-fw"></i>
                </span>
              </Link>
              <Link
                className="button is-medium"
                href="https://linkedin.com/in/matthew-farley-32526014/"
                target="_blank"
              >
                <span className="icon is-small">
                  <i className="fab fa-linkedin-in fa-fw"></i>
                </span>
              </Link>
              
              
              <Link
                className="button is-medium"
                href="mailto:sahildhiman98765@gmail.com"
              >
                <span className="icon is-small">
                  <i className="far fa-envelope fa-fw"></i>
                </span>
              </Link>
            </p>
          </div>
          <div className="copyright">
            Handcrafted by me ©
            Tanya Angra
          </div>
        
          {/* <div className="made-by-bulma"><Link href="https://bulma.io"><img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31" /></Link></div> */}
        </div>
        {/* <div className="float-right">
          <img className="animated-image" src="/chat-bot.png"></img> 
          </div> */}
        
      </footer>
    </>
  );
}
export default Footer;
