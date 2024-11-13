import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies:[],
        popularmovies: [],
        topratedmovies: [],
        upcomingmovies: []
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        getpopularmovies: (state, action) => {
            state.popularmovies = action.payload;
        },
        topratedmovies: (state, action) => {
            state.topratedmovies = action.payload;
        },
        upcomingmovies: (state, action) => {
            state.upcomingmovies = action.payload;
        }
    }
});

export const { getNowPlayingMovies, getpopularmovies, topratedmovies, upcomingmovies } = movieSlice.actions;
export default movieSlice.reducer;
