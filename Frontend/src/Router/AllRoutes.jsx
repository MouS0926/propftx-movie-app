
import { Route, Routes } from 'react-router-dom'
import Movielist from '../Component/Movielist'
import MovieDetails from '../Component/MovieDetails'
import Register from '../Component/Register'
import Login from '../Component/Login'
import Account from '../Component/Account'
import AddMovie from '../Component/AddMovie'
import EditMovie from '../Component/EditMovie'
import PrivateRoute from './PrivateRoute'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Movielist/>}/>
        <Route path="movie/:id" element={
          <PrivateRoute>
             <MovieDetails/>
          </PrivateRoute>
       
        
        }/>
        <Route path="/user/register" element={<Register/> }/>
        <Route path="login" element={<Login/> }/>
        <Route path="/account" element={
           <PrivateRoute>
               <Account/>
           </PrivateRoute>
        }/>
        <Route path="movie/add" element={
        <PrivateRoute>
          <AddMovie/> 
        </PrivateRoute>
       
        
        }/>
        <Route path="movie/edit/:id" element={
        <PrivateRoute>
          <EditMovie/> 
        </PrivateRoute>
       
        
        }/>
       
    </Routes>
  )
}
