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
              <a href="#">TV Shows</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Recently added</a>
            </li>
            <li>
              <a href="#">My list</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
