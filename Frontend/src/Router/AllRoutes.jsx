
import { Route, Routes } from 'react-router-dom'
import Movielist from '../Component/Movielist'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Movielist/>}/>
    </Routes>
  )
}
