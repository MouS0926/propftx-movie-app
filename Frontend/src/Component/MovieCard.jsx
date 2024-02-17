import { Card, CardContent, Typography } from '@mui/material'


export default function MovieCard(movie) {


  return (
    <Card sx={{ 
        display: 'flex', 
    flexDirection: 'column', 
    height: '100%',
    backgroundColor:"#160a20" 
    }}>
    <img src={movie.image} alt={movie.title} style={{ height: 300, objectFit: 'cover' }} />
    <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div" color="#f0f0f0">
            {movie.title}
        </Typography>
        <Typography variant="body2" color="#fdfdfd">
            Released Year: {movie.year}
        </Typography>
    </CardContent>
</Card>
  )
}
