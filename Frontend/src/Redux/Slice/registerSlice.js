import {createSlice} from '@reduxjs/toolkit'

import { registerUser } from '../Api/authApi';

const initialState = {
   message: null,
    isLoading: false,
    error: null,
   
  };

const registerSlice=createSlice({
    name:'register',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(registerUser.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.message = action.payload; 
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message; 
        });
    }
}
   
)

export default registerSlice.reducer;

//selectors
export const registerSelectUser = (state) => state.register.message;
export const authLoading = (state) => state.register.isLoading;
export const authError = (state) => state.register.error;
