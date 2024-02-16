import { Button, Container, Grid, Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { apiUrl, deleteMovie } from '../Redux/Api/movieAPI'

import MymovieCard from './MymovieCard'


export default function Account() {
const [mymovies,setMymovies]=useState([])
const handleDelete = async (movieId) => {
    try {
       
        await deleteMovie(movieId);
        fetchUsrMovie()
        console.log('Movie deleted successfully');
    } catch (error) {
        console.error('Error deleting movie:', error);
       
    }
};

useEffect(()=>{
   fetchUsrMovie()
},[])

function fetchUsrMovie(){
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

    axios.get(`${apiUrl}/movie/usermovie`,config)
    .then((res)=>{
        setMymovies(res.data)
        //console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}


console.log(mymovies);


  return (
    <div style={{ height: '100vh'}}>
    <Container maxWidth='lg'>
        <Link to='/movie/add'>
        <Button variant='outlined'>Add</Button>
        </Link>
       

        <Grid  container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>



        {mymovies?.length == 0 ? (
                        <Typography variant="h5" sx={{margin:"40px"}} color="#fff">No movies added</Typography>
                    ) : (
                        mymovies.map((movie) => (
                            <Grid item xs={6} sm={4} md={3} key={movie._id}>
                                <MymovieCard movie={movie} handleDelete={handleDelete}/>
                            </Grid>
                        ))
                    )}


        {/* {mymovies && mymovies.map((movie) => (

<Grid item xs={6} sm={4} md={3} key={movie._id}>

     <MymovieCard movie={movie} handleDelete={handleDelete}/>



</Grid>

))} */}



</Grid>
    </Container>
    </div>
  )
}
