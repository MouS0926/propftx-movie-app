import styled from "@emotion/styled";
import { Button, Grid, Paper, TextField, Typography, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authuser } from "../Redux/Slice/authSlice";
import { addMovie } from "../Redux/Api/movieAPI";

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

export default function AddMovie() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const user = useSelector(authuser);

    const [formData, setFormData] = useState({
        title: '',
        image: '',
        director: '',
        genre: '', 
        year: '',
        
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        dispatch(addMovie(formData))
        .then((res) => {
            console.log(res);
            // alert("Movie added successfully");
            navigate('/');
        })
        .catch((err) => {
            alert("Failed to add movie");
        });
    };

    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' ,
        }}>
            <Grid item xs={12} sm={6} md={5}>
                <Paper sx={{ padding: "20px", maxWidth: 400 , backgroundColor:"#292828" }}>
                    <Typography variant="h5" align="center" gutterBottom sx={{ color: "#ffffff" }}>
                        Add Movie
                    </Typography>
                    <form onSubmit={handleSubmit}>
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
                                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
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
                                    Add Movie
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}
