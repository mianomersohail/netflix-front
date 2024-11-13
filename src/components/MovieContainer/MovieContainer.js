import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function MovieContainer() {
    const movie=useSelector((store)=>store.movies)
    console.log(movie)
    return (
        <div className="bg-black">
            <div className="mt-[-20rem] relative z-10">
                <MovieList title="Now Playing" movies={movie.nowPlayingMovies} />
                <MovieList title="Popular Movies" movies={movie.popularmovies} />
                <MovieList title="Top Movies" movies={movie.topratedmovies} />
                <MovieList title="Upcoming Movies" movies={movie.popularmovies} />
                



            </div>
        </div>
    );
}
