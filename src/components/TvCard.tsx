import styles from "./MovieCard.module.css";

interface tvProps {
  id: number;
  name: string;
  poster_path: string;
}

function TvCard({ name, poster_path }: tvProps) {
  return (
    <>
      <li className={styles.movieCard}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={name}
          className={styles.moviePoster}
        />
        <h3 className={styles.movieTitle}>{name}</h3>
        <button className={styles.movieBtn}>Découvrir</button>
      </li>
    </>
  );
}

export default TvCard;
