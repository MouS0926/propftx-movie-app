import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const apiUrl='https://propftx-backend.onrender.com'

export const fetchMovies=createAsyncThunk("movies/fetchMovies",async()=>{
    const res=await axios.get(`${apiUrl}/movie/`)
    return res.data
})
export const addMovie = createAsyncThunk(
    "movies/addMovie",
    async (movieData, { rejectWithValue }) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }
  
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
  
        const res = await axios.post(
          `${apiUrl}/movie/add`,
          movieData,
          config
        );
        return res.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  



export const updateMovie = async (id, updatedMovieData) => {
    try {
     
      const response = await axios.patch( `${apiUrl}/movie/update/${id}`, updatedMovieData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
  
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };

  export const deleteMovie = async (id) => {
    try {
     
      const response = await axios.delete( `${apiUrl}/movie/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
      console.log(response);
  
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  };
   

  export const submitReview = async (movieId, reviewData) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found");
      }
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.post(
        `${apiUrl}/movie/review/add/${movieId}`,
        reviewData,
        config
      );
  
      if (response.status === 201) {
        console.log('Review added successfully');
        return response.data;
      } else {
        throw new Error("Failed to add review");
      }
    } catch (error) {
      console.error('Error adding review:', error);
      throw error;
    }
  };