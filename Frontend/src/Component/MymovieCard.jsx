import { Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const EditButton = styled(Button)`
  && {
    
    color: #d97f25;
    border:1px solid #d97f25;
    /* background-color:#d97f25 ; */
    text-transform: none;
  
    &:hover {
      background-color: #e0a85c;
      border-color: #e0a85c;
    }
  }
`;


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
        <Typography gutterBottom variant="h6" component="div" color="#eba73b" sx={{ fontFamily:'Montserrat, sans-serif' }}>
            {movie.title}
        </Typography>
        <Typography variant="body2" color="#fdfdfd" sx={{ fontFamily:'Montserrat, sans-serif' }}>
        Released Year: {movie.year}
        </Typography>
        <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <Link to={`/movie/edit/${movie._id}`}>
            <EditButton variant='outlined'>  Edit</EditButton>
          

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