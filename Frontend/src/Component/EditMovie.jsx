import styled from "@emotion/styled";
import { Button, Grid, Paper, TextField, Typography, Select, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  fetchMovies, updateMovie } from "../Redux/Api/movieAPI";
import { selectMovies } from "../Redux/Slice/movieSlice";

const CustomTextField = styled(TextField)`
  && {
    label {
      color: #ffffff; 
    }
    input {
      color: #ffffff; 
    }
    .MuiOutlinedInput-root {
      fieldset {
        border-color: #636363; 
      }
      &:hover fieldset {
        border-color: #e0e0e0; 
      }
      &.Mui-focused fieldset {
        border-color: #e1e1e1; 
      }
    }
  }
`;

export default function EditMovie() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
 

    const allmovies=useSelector(selectMovies)

    const {id}=useParams()



    

    const [formData, setEditFormData] = useState({
        title: '',
        image: '',
        director: '',
        genre: '', 
        year: '',
    });

    useEffect(()=>{
        dispatch(fetchMovies())
        const moviestoEdit=allmovies.find((el)=>el._id==id)
        if(moviestoEdit)
        {
          setEditFormData(moviestoEdit)
        }
        },[id])

    const handleInputChange = (e) => {
        setEditFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

       
    }

   

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            
            const updatedMovieData = {
                ...formData,
            };

            
            await updateMovie(id, updatedMovieData);

            alert('Movie updated successfully!');
         
            navigate('/account');
        } catch (error) {
            console.error('Error updating movie:', error);
           
        }
    };

    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' ,
        }}>
            <Grid item xs={12} sm={6} md={5}>
                <Paper sx={{ padding: "20px", maxWidth: 400 , backgroundColor:"#160a20" }}>
                    <Typography variant="h5" align="center" gutterBottom sx={{ color: "#ffffff" }}>
                       Edit Movie
                    </Typography>
                    <form onSubmit={handleUpdate}>
                        <Grid container  spacing={2}>
                            <Grid item xs={12}>
                                <CustomTextField
                                    label="Title"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    required
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    label="Image URL"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                  
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    label="Director"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                  
                                    name="director"
                                    value={formData.director}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <CustomTextField
                                    label="Year"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                   
                                    name="year"
                                    value={formData.year}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Select
                                    label="Genre"
                                    fullWidth
                                   
                                    name='genre'
                                    value={formData.genre}
                                    onChange={(e) => setEditFormData({ ...formData, genre: e.target.value })}
                                >
                                    <MenuItem value="Action">Action</MenuItem>
                                    <MenuItem value="Comedy">Comedy</MenuItem>
                                    <MenuItem value="Drama">Drama</MenuItem>
                                 
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    sx={{ backgroundColor: "#bc6106" }}
                                >
                                   Update
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}
