import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const user=localStorage.getItem('username');
console.log(user)
// const userToken=parseInt(localStorage.getItem('userToken'));
const Booking = () => {
  const navigate=useNavigate();
  const params=useParams()
  const userid=localStorage.getItem('userid');
  const [formData, setFormData] = useState({
    'tour':params.id,
    full_name: '',
    age: '',
    mobile_number: '',
    num_of_people: '',
    booking_date : '',
    gender: 'Male', // Default gender value
    user: userid,
  });
  
  const [tourDetails, setTourDetails] = useState(null);

  useEffect(() => {
    // Fetch tour details when the component mounts
    axios.get(`http://127.0.0.1:8000/api/api/tours/${params.id}/`)
      .then((response) => {
        console.log('tourdetails',response.data);
        setTourDetails(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [params.id]);

  const handleChange = (e) => {
    
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("userToken");
   
    const age=parseInt(formData.age);
  if (age <=18  || age>=80 ){
     alert('please enter a valid age');
     return;
  }

  if (formData.mobile_number.length<6 || formData.mobile_number.length>10){
    alert('please enter valid mobile no');
    return;
  }

   // Get the current date
   const currentDate = new Date();
 
   // Convert the selected booking date to a Date object
   const selectedDate = new Date(formData.booking_date);
 
   if (selectedDate <= currentDate) {
     alert('Booking date must be in the future');
     return; // Stop the submission
   }

  if (tourDetails && formData.num_of_people > tourDetails.max_group_size) {
    alert('Number of people cannot exceed max avialable seats');
    return;
  }

    axios.post('http://127.0.0.1:8000/api/api/bookings/',formData,{
      headers:{
        "Authorization":`Token ${token}`, 
        'Content-Type':'application/json'
      }
    }).then(
      (res)=>{
        console.log(res.data)
        navigate('/payment');
      }
      ).catch( (err) => {
        console.log(err)  
      })
    };
        
        return (
          
          <section className=" bg-image bgimg" >
      
      <div className="mask d-flex align-items-center h-100 ">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="m-4 col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card " style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5 text_title">Booking</h2>
                  <form className="container-fluid p-3" onSubmit={handleSubmit}>
                  <div className="form-outline mb-4 text_decpt ">
                    <div className="form-outline mb-4">
                      <label htmlFor="fullName">Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="full_name"
                        name="full_name"
                        placeholder="Full Name"
                        value={formData.full_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                
                    <div className="form-outline mb-4">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="age"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                      />
                    </div>
                
                    <div className="form-outline mb-4">
                      <label htmlFor="mobileNumber">Mobile No.</label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="mobile_number"
                        name="mobile_number"
                        placeholder="Mobile Number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                
                    <div className="form-outline mb-4">
                      <label htmlFor="no_people">No. Of people</label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="num_of_people"
                        name="num_of_people"
                        placeholder="Number Of people"
                        value={formData.num_of_people}
                        onChange={handleChange}
                        required
                      />
                    </div>
                
                    <div className="form-outline mb-4">
                      <label htmlFor="date">Date</label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        id="booking_date"
                        name="booking_date"
                        value={formData.booking_date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                
                    <div className="form-group">
                      <label>Gender</label>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="gender"
                          value="Male"
                          id="male"
                          checked={formData.gender === 'Male'}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="male">
                          Male
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="gender"
                          value="Female"
                          id="female"
                          checked={formData.gender === 'Female'}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="female">
                          Female
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="gender"
                          value="Other"
                          id="Other"
                          checked={formData.gender === 'Other'}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="Other">
                          Other
                        </label>
                      </div>
                    </div>
                <hr/>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="mt-2 btn  btn__thank w-25">
                        Book
                      </button>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
  );
};

export default Booking;
