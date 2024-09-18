import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom'
import './pagescss/register.css'
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password1: '', // Confirm Password field
  });

  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.password1) {
      setPasswordError('Passwords do not match');
      return;
    }

    if (formData.password.length <= 8) {
      alert('Passwords length less than 8');
      return;
    }

    // Rule 2: Password must contain at least one alphabet character
    if (!/[a-zA-Z]/.test(formData.password)) {
      alert('password must contain atleast one alphabet');
      return;
    }

    // Rule 3: Password must contain at least one numeric character
    if (!/\d/.test(formData.password)) {
      alert('password must contain atleast one numeric character');
      return;
    }

    // Rule 4: Password must contain at least one special character
    if (!/[!@#$%^&*()_+[\]{};':"\\|,.<>/?~]/.test(formData.password)) {
      alert('password must contain atleast one special character');
      return;
    }


    try {
      // Clear the password error message
      setPasswordError('');

      const response = await axios.post('http://127.0.0.1:8000/api/api/register/', formData);
      console.log('User registered:', response.data);
      alert("you are registered");
      // Redirect to login or handle success
      navigate('/login')

    } catch (error) {
      console.error('Registration failed:', error.response.data);
      // alert("kindly change your creditainls");
      if (error.response.data.username){
        alert(error.response.data.username)
      }
      if(error.response.data.email){
        alert(error.response.data.email);
      }
      // Handle registration error
    }
  };

  return (
    <div>

      {/* ------------------------------------------------------------------------------------- */}
      <div>
        <section className="vh-100 bg-image bgimg">
          <div className="mask d-flex align-items-center h-100 ">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5 text_title">Create an account</h2>

                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4 text_decpt">
                          <label className="form-label" htmlFor="username">Username</label>
                          <input type="text" id="username" name="username" className="form-control form-control-lg" value={formData.username}
                            onChange={handleChange}
                            placeholder='Username'
                            required />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                          <input type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email'
                            required className="form-control form-control-lg" />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                          <input type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Password'
                            required className="form-control form-control-lg" />

                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cdg">Repeat your password</label>
                          <input type="password"
                            id="password1"
                            name="password1"
                            value={formData.password1}
                            onChange={handleChange}
                            placeholder='Comfirm Password'
                            required className="form-control form-control-lg" />

                        </div>

                        {passwordError && <p className="error">{passwordError}</p>}

                        <div className="d-flex justify-content-center">
                          <button type="submit" className="mt-2 btn  btn-outline-success btn-block btn-lg  ">Register</button>
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login" className="fw-bold text-body"><u>Login here</u></a></p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
