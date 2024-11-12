import MovieList from "./MovieList";
import { useSelector } from "react-redux";

export default function MovieContainer() {
    const movi = useSelector((store) => store.movies);
    console.log(movi,'io')

    return (
        <div className="bg-black">
            <div className="mt-[-20rem] relative z-10">
                <MovieList title={'Now Playing'} movies={movi.nowPlayingMovies} />
                <MovieList title={'Popular Movies'} movies={movi.popularmovies} />
                <MovieList title={'Top Rated'} movies={movi.topratedmovies} />
                <MovieList title={'Upcoming Movies'} movies={movi.upcomingmovies} />
            </div>
        </div>
    );
}
