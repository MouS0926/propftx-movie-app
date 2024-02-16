
import { Route, Routes } from 'react-router-dom'
import Movielist from '../Component/Movielist'
import MovieDetails from '../Component/MovieDetails'
import Register from '../Component/Register'
import Login from '../Component/Login'
import Account from '../Component/Account'
import AddMovie from '../Component/AddMovie'
import EditMovie from '../Component/EditMovie'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Movielist/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
        <Route path="user/register" element={<Register/> }/>
        <Route path="login" element={<Login/> }/>
        <Route path="/account" element={<Account/> }/>
        <Route path="movie/add" element={<AddMovie/> }/>
        <Route path="movie/edit/:id" element={<EditMovie/> }/>
       
    </Routes>
  )
}
