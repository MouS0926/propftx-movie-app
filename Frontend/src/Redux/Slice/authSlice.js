import {createSlice} from '@reduxjs/toolkit'

import { login } from '../Api/authApi';

const initialState = {
    user: null,
    isLoading: false,
    error: null,
   
  };

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
          state.isLoading = false;
          state.message = action.payload; 
        })
        .addCase(login.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message; 
        });
    }
}
   
)

export default authSlice.reducer;

//selectors
export const registerSelectUser = (state) => state.auth.user;
export const authLoading = (state) => state.auth.isLoading;
export const authError = (state) => state.auth.error;
