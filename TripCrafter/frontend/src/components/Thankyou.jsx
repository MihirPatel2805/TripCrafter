import React from 'react'
// import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import './Compcss/thank-you.css'
// import ThankyouText from './ThankyouText'
const ThankYou = () => {
   return (
      <section className='container-fluid d-flex  border p-5'>
         
                  <div className=" border  d-flex flex-column align-items-center p-4 rounded-pill" style={{width:'100%',border:'1px solid #05668d'}}>
                     {/* <span><i class='ri-checkbox-circle-line'></i></span> */}
                     <div className='text__primary m-3'>Thank You !</div>
                     <div className='m-3 text-center'>
                     <h4 className='  text__style'>Your Tour Is Booked With us.</h4>
                     <h4 className='  text__style'>Have a nice Trip!!</h4>
                     </div>
                     <Link to='/home' className='btn btn__thank w-25'>Back To Home</Link>
                  </div>
      
      </section>
   )
}

export default ThankYou