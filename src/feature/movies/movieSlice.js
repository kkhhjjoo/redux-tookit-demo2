import { fetchMovies } from './movieThunk';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: [],
     loading: false,
     error: null,
     currentPage: 1,
     favorites: [],

}

const movieSlice = createSlice({name: 'movies', initialState, reducers: {
    addFavorite: (state, action) => {
        state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
        state.favorites.filter((movie) => movie.id !== action.payload)
    },
    setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    },
},
 extraReducers: (builder)=> {
    builder.addCase(fetchMovies.pending,(state)=>{
        state.loading = true;
    })
    .addCase(fetchMovies.fulfilled, (state, action)=> {
        state.loading = false;
        state.movies = action.payload;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    });
  }, // thunk에서 사용하는 액션들을 처리하는 곳
});

export const {addFavorite, removeFavorite, setCurrentPage } = movieSlice.actions;
export default movieSlice.reducer;