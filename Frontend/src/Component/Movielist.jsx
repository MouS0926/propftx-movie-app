import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../Redux/Api/movieAPI'
import { selectMovies } from '../Redux/Slice/movieSlice'
import { Card, CardContent, Typography } from '@mui/material'

export default function Movielist() {

    const dispatch=useDispatch()
const movies=useSelector(selectMovies)
const loading =useSelector(selectMovies)

    useEffect(()=>{
        dispatch(fetchMovies())
    },[])

    console.log(movies);
if(loading==true)
{
return <>Loading..</>
}


  return (
    <div>
    {movies.map((movie) => (
        <Card key={movie.id} sx={{ minWidth: 275, margin: '10px' }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {movie.genre}
                </Typography>
                <Typography variant="body2">
                    {movie.description}
                </Typography>
            </CardContent>
        </Card>
    ))}
</div>
  )
}
