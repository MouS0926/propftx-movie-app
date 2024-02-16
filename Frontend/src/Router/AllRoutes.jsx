
import { Route, Routes } from 'react-router-dom'
import Movielist from '../Component/Movielist'
import MovieDetails from '../Component/MovieDetails'
import Register from '../Component/Register'
import Login from '../Component/Login'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Movielist/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="user/register" element={<Register/> }/>
        <Route path="login" element={<Login/> }/>
    </Routes>
  )
}
