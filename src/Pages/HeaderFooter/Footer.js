import styles from "./Footer.module.scss";
import fb from "../../assets/images/facebook.png";
import insta from "../../assets/images/instagram.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="colorFooter">
      <div className={`df fc jcc aic fsize2 ${styles.footerLogo}`}>
        <p>LILLE</p>
        <p>LATINA</p>
        <p className="ffamily3">Dance</p>
      </div>
      <div className={`df jcc fsize08 ${styles.footerend}`}>
        <p>Copyright©2023 |Tous droits réservés -</p>
        <span>
          <Link to="/mentions">Mentions légales</Link>
        </span>
        <div className={styles.icons}>
          <a href="">
            <img className="ml20" src={fb} alt="logo de facebook" />
          </a>
          <a href="">
            <img src={insta} alt="logo de instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
