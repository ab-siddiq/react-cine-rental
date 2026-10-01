import { getAllMovies } from "../assets/data/movies.js";

import MovieCard from "./MovieCard";
export default function MovieLists() {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {/* <!-- Begin Card --> */}
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
