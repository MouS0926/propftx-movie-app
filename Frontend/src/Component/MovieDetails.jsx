import { Card, CardContent, CardMedia, CircularProgress, Container, Grid,  Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiUrl } from '../Redux/Api/movieAPI'
import { useParams } from 'react-router-dom'


export default function MovieDetails() {
const {id}=useParams()
const [moviedetails,setMoviedetails]=useState({})
const [loading,setLoading]=useState(false)

useEffect(()=>{
    setLoading(true)
axios.get(`${apiUrl}/movie/${id}`)

.then((res)=>{
    setLoading(false)
    setMoviedetails(res.data)
    console.log(res.data);
})
.catch((err)=>{
    console.log(err);
})

},[])

if(loading)
{
return  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
<CircularProgress disableShrink />
</div>
}

  return (
 <Container maxWidth='lg' >
<div style={{ padding: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card sx={{backgroundColor:"#2d2c2c",color:"#f7f7f7"}}>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    alt="Movie Poster"
                    height="600"
                    image={moviedetails.image}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" gutterBottom>
                  {moviedetails.title}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    Release Date: January 1, 2024
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                    fringilla turpis at augue feugiat, a feugiat ligula ultricies.
                    Nulla facilisi. Duis hendrerit justo non ante pharetra, sit amet
                    molestie tortor sollicitudin. Vivamus et tempor nisi. Ut et diam
                    sit amet odio tincidunt sollicitudin. Proin volutpat justo
                    pharetra lacus accumsan varius. Phasellus vitae tincidunt velit,
                    sed vestibulum mauris. Donec bibendum tempor lacus, eu ornare
                    augue vestibulum nec. 
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Director: {moviedetails.director}
                  </Typography>
                 
                  <Typography variant="body1" gutterBottom>
                    Genre:  {moviedetails.genre}
                  </Typography>
                
                  <Typography variant="body1" gutterBottom>
                    Rating: {moviedetails.rating}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>




      
    </Container>

  )
}
