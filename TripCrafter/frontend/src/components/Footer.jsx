
import React from 'react';
import logo from '../images/ss1.png'
import './Compcss/Footers.css';

const Footer = () => {
  const imageStyle = {
    width:"90%",

  };

  const mapFrameStyle = {
    border: '0',
  };


  return (
    <>
    <div className='border bg-dark border-dark '>
   <div className="container-fluid bg-dark mt-4 mb-4">
  <div className="row">
    <div className="col-lg-3 col-sm-6">
      <div className="p-2  d-flex flex-column gap-3">
        
        <div className=''><img  src={logo} style={imageStyle} alt="Logo" /></div>

        <div className='text-white' style={{  maxWidth:'330px'}}>
        <span className="text-center text_decpt" style={{color: 'whitesmoke'}}>Explore is a Non Government Organization, being run by young students for social reformation and building the nation with moral values and ethics.
        </span>
        </div> 

        <div className=' d-flex gap-4'>
          <i className="fa-brands fa-instagram fa-2x text-white" ></i>
        <i className="fa-brands fa-facebook fa-2x text-white" ></i>
        <i className="fa-brands fa-twitter fa-2x text-white" ></i>
        </div>

 </div>
    </div>
    <div className="col-lg-3 col-sm-6">
      <div className="p-2  text-white">
        
        <h2 className='text_title'>Quick Links</h2>   
        <div className='mt-1 text_decpt'>
        <a href="/home" className="text-white text-decoration-none ">
              <h6>Home</h6>
            </a>
            <hr/>
            <a href="/about" className="text-white text-decoration-none">
              <h6>About Us</h6>
            </a>
            <hr/>
            <a href="/contact" className="text-white text-decoration-none">
              <h6>Contact Us</h6>
            </a>
            <hr/>
            <a href="/tour" className="text-white text-decoration-none">
              <h6>Tours</h6>
            </a>
            <hr/>
            <a href="/login" className="text-white text-decoration-none">
              <h6>Login</h6>
            </a></div> 
            
            </div>
    </div>
    <div className="col-lg-3 col-sm-6">
      <div className="p-2  text-white d-flex flex-column  border_top">
        <h2 className='text_title'>Contact Us</h2>
            <div className='text_decpt' style={{color: 'whitesmoke'}}>
              <span>LJ Campus, LJ College Rd, near Sanand - Sarkhej Road, Makarba, Sarkhej-Okaf, Gujarat 382210</span>
            </div>
            <br />
            <span className='text_decpt' style={{color: 'whitesmoke'}}>Office Timings: 11AM to 8PM</span>
            <br />
            <p className='text_decpt' style={{color: 'whitesmoke'}}>
              <i className="fa fa-fw fa-phone"></i>  091-9123456789
            </p></div>
    </div>
    <div className="col-lg-3 col-sm-6">
      <div className="p-2 ">
         <iframe className='rounded  mt-2 border-success' title='frame'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12354.034267954237!2d72.4826514887437!3d22.991573515580047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aee6c89a621%3A0x872df2d55fbb0008!2sLJ%20University!5e0!3m2!1sen!2sin!4v1726809060544!5m2!1sen!2sin"
              width="250" height="250" style={mapFrameStyle}  loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe></div>
    </div>
  </div>
</div>
{/* ------------------------------------------------------------------------------------------------------------- */}
</div>
    </>
  );
};

export default Footer;
