import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const apiUrl='http://localhost:8080'

export const fetchMovies=createAsyncThunk("movies/fetchMovies",async()=>{
    const res=await axios.get(`${apiUrl}/movie/`)
    return res.data
})