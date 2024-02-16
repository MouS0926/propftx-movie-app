import {createSlice} from '@reduxjs/toolkit'
import { addMovie, fetchMovies } from '../Api/movieAPI';

const initialState = {
    movies: [],
    loading: false,
    error: null,
   
  };

const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.pending,(state)=>{
            state.loading=true
        }),
        builder.addCase(fetchMovies.fulfilled,(state,action)=>{
            state.loading=false,
            state.movies=action.payload
        }),

        builder.addCase(fetchMovies.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload
            
        }),
        builder.addCase(addMovie.pending, (state) => {
            state.loading = true;
            state.error = null;
          }),
          builder .addCase(addMovie.fulfilled, (state) => {
            state.loading = false;
            // state.movies.push(action.payload);
          }),
          builder .addCase(addMovie.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          
       

    }
}
   
)

export default movieSlice.reducer;

//selectors

export const selectMovies = (state) => state.movies.movies;
export const selectLoading = (state) => state.movies.loading;
export const selectError = (state) => state.movies.error;