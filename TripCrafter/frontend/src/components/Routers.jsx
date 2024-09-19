import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from '../pages/Home'
import Tour from '../pages/Tour'
import About from '../pages/About'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Bookinglayout from '../layout/Bookinglayout';
import Booking from './Booking';
import ThankYou from './Thankyou';
import Mybookings from './Mybookings'
import TrainListingPage from '../pages/TrainListingPage';
import Traincheckoutpage from '../pages/Traincheckoutpage'
const Routers = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Navigate to ='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/tour' element={<Tour/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/Booking/:id' element={<Booking/>} />
        <Route path='/bookinglayout/:id'   element={<Bookinglayout/>} />
        <Route path='/thankyou' element={<ThankYou/>} />
        <Route path='/mybookings' element={<Mybookings/>} />
        <Route path='/train' element={<TrainListingPage/>} />
        <Route
            path="/traincheckoutpage/:id/:coachName"
            element={<Traincheckoutpage />}
          />
    </Routes>
    
    
  )
}
export default Routers
