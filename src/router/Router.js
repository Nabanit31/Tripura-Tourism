import React from 'react'
import{Routes,Route, Navigate} from 'react-router-dom'
import Home from '../Pages/Home';
import Tour from '../Pages/Tour';
import TourDetails from '../Pages/TourDetails';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import SearchResultList from '../Pages/SearchResultList';





const Router = () => {
  return (
 <Routes>
    <Route path='/'  element={<Navigate to='/home'/>} />
 <Route path='/home' element={<Home/>}/>
 <Route path='/tour' element={<Tour/>}/>
 <Route path='/tour/:id' element={<TourDetails/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/Register' element={<Register/>}/>
 <Route path='/tour/search' element={<SearchResultList/>}/>
 </Routes>
  )
}

export default Router