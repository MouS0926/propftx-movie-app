import {createSlice} from '@reduxjs/toolkit'
import { loginUser } from '../Api/authApi';



const initialState = {
    user: null,
    isLoading: false,
    error: null,
   IsloggedIn:false
  };

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.IsloggedIn = true;
          state.message = action.payload; 
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.IsloggedIn = false;
          state.error = action.error.message; 
        });
    }
}
   
)

export default authSlice.reducer;

//selectors
export const authuser = (state) => state.auth.user;
export const authLoading = (state) => state.auth.isLoading;
export const authError = (state) => state.auth.error;
export const isLoggedin = (state) => state.auth.IsloggedIn;
