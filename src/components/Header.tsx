import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img
          src="../src/assets/img/wildflixLogo.png"
          alt="Logo Wildflix"
          className={styles.headerLogo}
        />
        <nav className={styles.headerNav}>
          <ul>
            <li>
              <a href="#">Films</a>
            </li>
            <li>
              <a href="#">Séries TV</a>
            </li>
            <li>
              <a href="#">Ajouts récents</a>
            </li>
            <li>
              <a href="#">Ma liste</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
