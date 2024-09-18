import React, { useState } from "react";
import axios from "axios";
import "./pagescss/login.css";
import {  useNavigate } from 'react-router-dom';
// import bgimg from '../images/landscape1.jpg'

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [username, setUsername] = useState('');

  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/api/login/", formData);
      console.log("User logged in:", response);
      // After successful login, store the token in local storage
      localStorage.setItem('userToken', response.data.token);
      console.log(response.data.token)
      localStorage.setItem('username', response.data.username);
      console.log("User logged in:", response);

      setUsername(response.data.username);
      console.log("User logged in:", username);

      alert('you are logged in successfully');
      navigate('/')
      window.location.reload();
      // Redirect to dashboard or handle successful login
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert('check ur creditainls . ERROR !!!')
      // Handle login error
    }
  };

  return (
    <div>
      
      
      <div>
      <section className="vh-100 bg-image bgimg" >
      
          <div className="mask d-flex align-items-center h-100 ">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: '15px' }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5 text_title">Login</h2>

                      <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4 text_decpt  ">
                          <label className="form-label" htmlFor="username">Username</label>
                          <input type="text" id="username" name="username" className="form-control form-control-lg" value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required />

                        </div>

                       

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form3Example4cg">Password</label>
                          <input type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required className="form-control form-control-lg" />

                        </div>

                        <div className="d-flex justify-content-center">
                          <button type="submit" className="mt-2 btn  btn-outline-success btn-block btn-lg ">Login</button>
                        </div>

                        <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/register" className="fw-bold text-primary"><u>Register here</u></a></p>
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

export default Login;
