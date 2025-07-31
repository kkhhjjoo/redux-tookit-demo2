import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../feature/movies/movieSlice';

export const store = configureStore({reducer: {
    movie: movieSlice
}})