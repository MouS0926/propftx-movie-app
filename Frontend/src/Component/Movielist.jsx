import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../Redux/Api/movieAPI'
import { selectMovies } from '../Redux/Slice/movieSlice'

export default function Movielist() {

    const dispatch=useDispatch()
const movies=useSelector(selectMovies)
console.log(movies);
    useEffect(()=>{
        dispatch(fetchMovies())
    },[])

  return (
    <div>Movielist</div>
  )
}
