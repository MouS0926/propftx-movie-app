import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../Redux/Api/movieAPI'
import { selectLoading, selectMovies } from '../Redux/Slice/movieSlice'
import {  CircularProgress, Container, Grid } from '@mui/material'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

export default function Movielist() {

    const dispatch=useDispatch()
const movies=useSelector(selectMovies)
const loading =useSelector(selectLoading)

    useEffect(()=>{
        dispatch(fetchMovies())
    },[])
    console.log(loading);
    console.log(movies);
if(loading==true)
{
return  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
<CircularProgress disableShrink />
</div>
}


  return (
    <div>
        <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>


{movies && movies.map((movie) => (

   <Grid item xs={6} sm={4} md={3} key={movie._id}>
    <Link to={`movie/${movie._id}`}>
        <MovieCard {...movie} />

    </Link>
 
   </Grid>





))}


</Grid>
        </Container>



   
</div>
  )
}
