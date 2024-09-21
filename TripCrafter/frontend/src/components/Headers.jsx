import React, { useState, useEffect } from "react";
import "./Compcss/Headers.css";
import logo from "../images/ss1.png";

const Headers = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Function to fetch user information from your Django backend
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/api/get-user-info/",
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUsername(data.username);
          localStorage.setItem("userid", data.id);
        }
        setUsername(localStorage.getItem("username"));
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    // Call the function to fetch user information when the component mounts
    fetchUserInfo();
  }, []); // Empty dependency array to run the effect once

  // Function to handle logout
  const handleLogout = () => {
    // Clear the user token from local storage
    localStorage.clear();
    // Redirect or perform any other necessary actions after logout
    // For example, you can navigate to the login page
    window.location.href = "/login";
  };

  const nav_links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tour",
      display: "Tours",
    },

  ];
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark nav_css sticky">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/home">
            <img src={logo} width="70px" height="70px" alt="" />
          </a>
          
          <div
            className=" justify-content-between collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {nav_links.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a
                    className="text-decoration-none text-white m-3 fs-5 "
                    
                    href={item.path}
                  >
                    {item.display}
                  </a>
                </li>
              ))}

            <li className="d-flex ">
              {username && (
                <>
                  {/* "My Bookings" button */}
                  <a href="/mybookings"  className="text-decoration-none text-white text_title  fs-5">
                    MyBookings
                  </a>
                </>
              )}
              </li>
</ul>
            <div className="d-flex gap-3 align-items-center ">
              {username ? (
                <>
                  <span className="text-white fs-5 text_title">Welcome, {username}</span>
                  <button
                    onClick={handleLogout}
                    className="btn btn-outline-light"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="btn btn-outline-light">
                    Login
                  </a>
                  <a href="/register" className="btn btn-outline-light">
                    Register
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headers;
