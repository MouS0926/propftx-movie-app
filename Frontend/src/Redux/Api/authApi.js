import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "./movieAPI";

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async ({ username, email, password }, thunkAPI) => {
      try {
        const response = await axios.post(`${apiUrl}/users/register`, {
          username,
          email,
          password,
        });
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );

  export const login=()=>{}