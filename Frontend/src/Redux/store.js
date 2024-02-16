import { configureStore } from '@reduxjs/toolkit';
import movieReducer from "./Slice/movieSlice"
import registerReducer from "./Slice/registerSlice"
import authReducer from "./Slice/authSlice"
export const store = configureStore({
    reducer: {
      movies: movieReducer,
      register:registerReducer,
      auth:authReducer
    },
  });