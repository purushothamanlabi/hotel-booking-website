import React from 'react' 
import {Routes, Route, Navigate} from 'react-router-dom'


import Home from './../Pages/Home';
import Tour from './../Pages/Tour';
import TourInfo from './../Pages/TourInfo';
import Login from './../Pages/mylogin/Login';
import Register from './../Pages/mylogin/Register';
import SearchResult from './../Pages/SearchResult';
import ThankYou from '../Pages/ThankYou';
import About from '../component/about/About';

import Profile from './../Pages/Profile';
import Payment from '../Pages/Payment';



const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/tour' element={<Tour />} />
        <Route path='/tour/:id' element={<TourInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tour/search' element={<SearchResult />} /> 
        <Route path='/about' element={ <About/>} />


        <Route path='/home/profile/:profileId' element={<Profile/>} />
        <Route path='/payment/:data' element={<Payment/>} />

    </Routes>
  )
};

export default Routers;