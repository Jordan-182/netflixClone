import { useEffect, useState } from "react";
import styles from "./Movies.module.css";
import TvCard from "./TvCard";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=fr-FR&page=1`;

interface tv {
  id: number;
  name: string;
  poster_path: string;
  release_date: string;
}

function TV() {
  const [tv, setTv] = useState<tv[]>([]);

  useEffect(() => {
    const fetchTv = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setTv(data.results);
      } catch (error) {
        console.error("Erreur lors du fetch des séries :", error);
      }
    };

    fetchTv();
  }, []);
  return (
    <>
      {console.log(tv)}
      <div className={styles.moviesSection}>
        <h2>Séries TV</h2>
        <ul className={styles.movieList}>
          {tv.map((tv) => (
            <TvCard key={tv.id} {...tv} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TV;
