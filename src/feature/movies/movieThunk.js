import { createAsyncThunk } from '@reduxjs/toolkit';

//const { createAsyncThunk } = require('@reduxjs/toolkit');

createAsyncThunk('movies/fetchMovies', async({page}, {rejectWithValue}) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`);
        const data = await response.json();
        return data.results; 
    } catch(error) {
        return rejectWithValue(error.message);
    }
})