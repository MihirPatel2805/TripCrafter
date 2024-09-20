import React,{useEffect,useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import './layoutcss/bookinglayout.css'
import axios from 'axios';
const Bookinglayout = () => {

     const navigate=useNavigate();

    const { id } = useParams(); // Get the `id` parameter from the URL
    const [tourData, setTourData] = useState(null);
   

   const  userToken=localStorage.getItem('userToken');
  
    useEffect(() => {
      const fetchTourData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/api/tours/${id}/`);
      
          
          setTourData(response.data);
          
        } catch (error) {
          console.error('Error fetching tour data:', error);
        }
      };
  
      fetchTourData();
    }, [id]);
  

    
   
    if (!tourData) {
      return <div>Loading...</div>;
    }


    const handleBookNowClick = () => {
      if (tourData.max_group_size === 0) {
        // Max group size is 0, display an alert
        alert('No seats available!! come back soon');
      } else {
        // Max group size is not 0, navigate to the booking page
        navigate(`/Booking/${tourData.id}`);
      }
    };
    // console.log(tourData.photo)


  return (
    <>
        <div className="container-fluid  border-primary p-0">
            <div className='container-fluid  d-flex justify-content-center align-items-center img_container border-primary p-0'><img className="w-100 tour_img" src={`http://127.0.0.1:8000${tourData.photo}`} alt="tour-img"  /></div>
            <div className="container p-0 mt-4 border-info ">
                <div className="text-dark text_title fs-1 p-2">{tourData.title}</div>
                <div className="parameters row m-0 text_decpt">
                  <div className="col-lg-3 col-sm-6 d-flex gap-2 align-items-center border-info">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <div>
                            <div className='m-1 fs-5 '>Duration</div>
                              <div className='m-1 text-muted'>6Days/5night</div>
                        </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 d-flex gap-2 align-items-center border-info">
                     <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                    <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                  </svg>
                        <div className=''>
                            <div className='m-1 fs-5 '>Age group</div>
                              <div className='m-1 text-muted'>15-35 years</div>
                        </div>
                    
                  </div>
                  <div className="col-lg-3 col-sm-6 d-flex gap-2 align-items-center border-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-image-alt" viewBox="0 0 16 16">
                    <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z"/>
                  </svg>
                  <div>
                            <div className='m-1 fs-5 '>Altitude</div>
                              <div className='m-1 text-muted'>13850 ft</div>
                        </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 d-flex gap-2 align-items-center border-info">
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"/>
                    </svg>
                    <div>
                            <div className='m-1 fs-5 '>Difficulty</div>
                              <div className='m-1 text-muted'>Moderate</div>
                        </div>
                        
                  </div>
                  
                </div>

                {/* -----------------------includes ----------------------------------------- */}

                <div className="container-fluid mt-5">
                  <div className='fs-3 pt-3  fw-bold text_title '>Includes</div>
                  <div className="row text_decpt bg_sub p-3">
                  <div className="col-lg-4 col-sm-6 d-flex p-2 gap-3 align-items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dice-5" viewBox="0 0 16 16">
                  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3z"/>
                  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
                    <div className="">
                            <div className='m-1 fs-5 '>Activities</div>
                              
                        </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 d-flex p-2 gap-3 align-items-center border-info">
                  <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 -960 960 960" width="38"><path d="m175-120-56-56 410-410q-18-42-5-95t57-95q53-53 118-62t106 32q41 41 32 106t-62 118q-42 44-95 57t-95-5l-50 50 304 304-56 56-304-302-304 302Zm118-342L173-582q-54-54-54-129t54-129l248 250-128 128Z"/></svg>
                    <div className="">
                            <div className='m-1 fs-5 '>Food</div>
                              
                        </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 d-flex p-2 gap-3 align-items-center border-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bus-front" viewBox="0 0 16 16">
                  <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4Zm0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3Z"/>
                  <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2V8ZM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1Z"/>
                </svg>

                    <div className="">  
                            <div className='m-1 fs-5 '>Travel</div>
                              
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 d-flex p-2 gap-3 align-items-center border-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-pulse" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053.918 3.995.78 5.323 1.508 7H.43c-2.128-5.697 4.165-8.83 7.394-5.857.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17c3.23-2.974 9.522.159 7.394 5.856h-1.078c.728-1.677.59-3.005.108-3.947C13.486.878 10.4.28 8.717 2.01L8 2.748ZM2.212 10h1.315C4.593 11.183 6.05 12.458 8 13.795c1.949-1.337 3.407-2.612 4.473-3.795h1.315c-1.265 1.566-3.14 3.25-5.788 5-2.648-1.75-4.523-3.434-5.788-5Z"/>
                  <path d="M10.464 3.314a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8H.5a.5.5 0 0 0 0 1H4a.5.5 0 0 0 .416-.223l1.473-2.209 1.647 4.118a.5.5 0 0 0 .945-.049l1.598-5.593 1.457 3.642A.5.5 0 0 0 12 9h3.5a.5.5 0 0 0 0-1h-3.162l-1.874-4.686Z"/>
                  </svg>
                    <div className="">
                            <div className='m-1 fs-5 '>FIRST-AID</div>
                              
                        </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 d-flex p-2 gap-3 align-items-center border-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
                      <path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z"/>
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z"/>
                    </svg>
                      <div className="">
                            <div className='m-1 fs-5 '>Instructor</div>
                              
                        </div>
                  </div>
                  <div className="col-lg-4 col-sm-6 d-flex p-2 gap-3 align-items-center border-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                </svg>
                    <div className="">
                            <div className='m-1 fs-5 '>Accomodation</div>
                              
                        </div>
                  </div>
                 
                  </div>
                </div>

                <div className="d-flex align-items-start justify-content-between mt-3 text_decpt">
                  <div className="fs-5 fw-bold text_decpt fs-4">
                    &#8377;{tourData.price}
                    <span className="fw-normal text_decpt text-muted">/person</span>
                  </div>
                  <div className="fs-5 fw-bold text_decpt fs-4">
                    Seats available:
                    {tourData.seat.map((id, index) => (
                      <div key={index}> {/* Make sure the key is in the outer element */}
                        <span className="ms-2">
                          {id.Date}
                        </span> : 
                        <span className="ms-2">
                          {id.available_seats}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className=''>
                  {userToken ? (
                        <button className='btn btn-success btn-lg btn_color' onClick={handleBookNowClick}>Book Now</button>
                    ) : (
                      <button
                        className='btn btn-success btn-lg btn_color'
                        onClick={() => {alert('Please log in to book.'); 
                        navigate('/login')}}
                        
                      >
                        Book Now
                      </button>
                      )}
                  </div>
                  </div>
                <div className="p-2 mt-5 mb-5">
                <div className='fs-5 text_title fw-bold'>Description</div>
                <div className='mt-2 text_decpt'>{tourData.desc}</div></div>
                
            </div>
        </>
  )
}

export default Bookinglayout    