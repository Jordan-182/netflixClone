import logo from "../assets/img/wildflixLogo.png";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src={logo} alt="logo wildflix" />
        <p>Tous droits réservés - Wildflix 2025</p>
      </footer>
    </>
  );
}

export default Footer;
