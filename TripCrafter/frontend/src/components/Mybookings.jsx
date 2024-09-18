import React, { useEffect, useState } from 'react';
import './Compcss/mybooking.css'
import axios from 'axios';

const Mybookings = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem('userToken'); // Replace with your token storage method

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/api/mybookings/', {
      method: 'GET',
      headers: {
        // 'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
         return response.json(); // Read the JSON response once
      })
      .then((data) => {
        console.log(data);
        setBookings(data);
      })
      .catch((error) => {
        console.error('Errorrr:', error);
      });
  }, [token]);
  const handeldelete =(e)=>{
    console.log(token)
    axios.delete(`http://127.0.0.1:8000/api/api/deletebooking/${e.target.id}`,
    {
      headers:{"Authorization":`Token ${token}`, 
      'Content-Type': 'application/json'}
    }).then((res)=>{
      console.log(res.data)
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })

  }

  return (
    <section className='d-flex flex-column'>
      <div className=' border-primary container  text_style ' >
        <h2 className="p-3" style={{fontSize:'50px'}}>My Bookings</h2>
      </div>
      <div className=' border-danger'>
      <div className="  border-success container d-flex flex-column booking-list">
      {bookings?.map((booking) => (
        <div className="card booked_card mb-3" key={booking.id}>
          <div className="card-header bg__color" style={{borderBottom:'1px solid #05668d'}}>
            <h3 className="card-title text_style fs-2 title_style">Title:{booking.title}</h3>
          </div>
          <div className="card-body">
            <tr className="card-text "> <td className='p-1 fw-bold text_style'>Name:</td>  {booking.full_name}</tr>
            <tr className="card-text "> <td className='p-1 fw-bold text_style'>Age:</td>  {booking.age}</tr>
            <tr className="card-text "> <td className='p-1 fw-bold text_style'>Mobile Number:</td> {booking.mobile_number}</tr>
            <tr className="card-text "> <td className='p-1 fw-bold text_style'>Number of People:</td> {booking.num_of_people}</tr>
            <tr className="card-text "> <td className='p-1 fw-bold text_style'>Booking Date:</td> {booking.booking_date}</tr>
            <tr className="card-text "> <td className='p-1 fw-bold text_style'>Gender:</td> {booking.gender}</tr>
            <tr className="card-text "> <td className='p-1 fw-bold text_style'>Total Price:</td> {booking.price*booking.num_of_people}</tr>
            <tr className="card-text">
                    <td className='p-1 fw-bold text_style'>Booking Status:</td>
                    <td className={`p-1 text_style ${booking.status === 'Completed' ? 'text-success' : 'text-danger'}`}> {booking.status} </td>
            </tr>
          </div>
          <div className='m-2'>
          <button className='btn btn__thank' id={booking.booking_id} onClick={handeldelete}>Delete</button>
          </div>
          
        </div>
      ))}
    </div>
      </div>
    </section>
    
  );
      }
  
export default Mybookings;
