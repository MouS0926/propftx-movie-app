import { Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MymovieCard({movie,handleDelete}) {

  
    const handleDeleteClick = () => {
     
        handleDelete(movie._id);
    }; 


 
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
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/movie/edit/${movie._id}`}>
            <Button variant='outlined'>  Edit</Button>
          

            </Link>
          <IconButton aria-label="delete"  color="primary" onClick={handleDeleteClick}>
  <DeleteIcon />
</IconButton>
        </div>
    </CardContent>
</Card>
  )
}

MymovieCard.propTypes = {
    movie: PropTypes.object,
    handleDelete: PropTypes.func
};