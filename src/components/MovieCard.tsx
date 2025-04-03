import styles from "./MovieCard.module.css";

interface MovieProps {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function MovieCard({ title, poster_path, release_date }: MovieProps) {
  return (
    <>
      <li className={styles.movieCard}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className={styles.moviePoster}
        />
        <h3 className={styles.movieTitle}>{title}</h3>
        <p className={styles.movieDate}>Date de sortie : {release_date}</p>
        <button className={styles.movieBtn}>Discover</button>
      </li>
    </>
  );
}

export default MovieCard;
