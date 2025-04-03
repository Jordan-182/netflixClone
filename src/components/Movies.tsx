import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import styles from "./Movies.module.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Erreur lors du fetch des films :", error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <>
      {console.log(movies)}
      <div className={styles.moviesSection}>
        <h2>Movies</h2>
        <ul className={styles.movieList}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Movies;
