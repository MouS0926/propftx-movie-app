import { Avatar, Button, Card, CardContent, CardMedia, CircularProgress, Container, Grid,  TextField,  Typography } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { apiUrl, submitReview } from '../Redux/Api/movieAPI'
import { useParams } from 'react-router-dom'
import styled from '@emotion/styled'
import { PersonOutline } from '@mui/icons-material'

const CustomTextField = styled(TextField)`
  && {
    label {
      color: #ffffff; 
    }
    input {
      color: #ffffff; /* Set input text color to white */
    }
    .MuiOutlinedInput-root {
      color: #ffffff !important; /* Override the text color with !important */
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
export default function MovieDetails() {
const {id}=useParams()
const [moviedetails,setMoviedetails]=useState({})
const [loading,setLoading]=useState(false)
const [review, setReview] = useState({
    comment:""
});
// const [reviewsList, setReviewsList] = useState([]);

let reviewsList=moviedetails.reviews



useEffect(()=>{
   fetchMoviedetails() 

},[])

function fetchMoviedetails(){
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
}

const handleReviewChange = (event) => {
    setReview({ ...review, comment: event.target.value });
    
  };


  const handleSubmitReview = async () => {
   try {
    await submitReview(id, { comment: review.comment })
    fetchMoviedetails()
   } catch (error) {
    console.log(error);
   }
  };

  console.log(reviewsList);
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
          <Card sx={{backgroundColor:"#160a20",color:"#f7f7f7"}}>
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
                
                  {/* <Typography variant="body1" gutterBottom>
                    Rating: {moviedetails.rating}
                  </Typography> */}
                </Grid>
              </Grid>

              <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#1d0e29", color: "#f7f7f7" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Add a Review
                </Typography>
                <CustomTextField
                  id="review"
                  label="Write your review"
                  multiline
                  rows={4}
                  fullWidth
                 
                 value={review.comment}
                  onChange={handleReviewChange}
                />
                <Button variant="contained" onClick={handleSubmitReview}   sx={{ backgroundColor: "#bc6106" ,marginTop:"10px"}}>
                  Submit Review
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ backgroundColor: "#1d0e29", color: "#f7f7f7" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom >
                  All Reviews
                </Typography>
                {reviewsList?.map((el, index) => (
                   <Card key={index} sx={{ backgroundColor: '#221031', color: '#f7f7f7', marginBottom: 2 }}>
                   <CardContent>
                     <Grid container spacing={1} alignItems='center'>
                       <Grid item>
                       
                         <Avatar>
                           <PersonOutline />
                         </Avatar>
                       </Grid>
                       <Grid item>
                        
                         <Typography variant='body2' color='#fff'>
                           {el.reviewername} - {new Date(el.createdAt).toLocaleDateString()}
                         </Typography>
                       </Grid>
                     </Grid>
                    
                     <Typography variant='body1' gutterBottom>
                       {el.comment}
                     </Typography>
                   </CardContent>
                 </Card>
                ))}
                {reviewsList?.length === 0 && (
                  <Typography variant="body1" gutterBottom>
                    No reviews yet.
                  </Typography>
                )}
              </CardContent>
            </Card>
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
