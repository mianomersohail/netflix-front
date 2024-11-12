import MovieCard from "./MovieCard";

export default function MovieList( {title,movies} ) {
  return (
    <>
      <div>
        <h1 className="text-3xl text-white">{title}</h1>
        <div className="flex overflow-x-auto no-scrollbar cursor-pointer">
          <div className="flex items-center">
{
  movies.map((movie)=>{
    return(
      <>
      <MovieCard key={movie.id} posterPath={movies.poster_path} />
      
      </>
    )
  })
}
          
          </div>
        </div>
      </div>
    </>
  
  );
}
