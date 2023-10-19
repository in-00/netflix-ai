import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6 z-20">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex whitespace-nowrap overflow-auto scrollbar-hide md:scrollbar-default">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
