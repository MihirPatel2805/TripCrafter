import React from 'react';
import T0 from '../images/tour04.jpg';
import T1 from '../images/tour05.jpg';
import T2 from '../images/tour06.jpg';
import './pagescss/home.css'
import Gallary from '../components/Gallary';
import Card from '../components/Card';
const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__content">
                <h1>Traveling opens the door to creating <span className='highlight'>memories</span></h1>
                <p>
                Explore a diverse range of travel options and easily book your dream destinations right here. Our user-friendly platform ensures seamless booking experiences, allowing you to focus on creating cherished memories. Start your adventure today!" 
                </p>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero__img-box">
                <img src={T0} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero__img-box hero__video-box mt-4">
                {/* <video src={T1} alt="" controls /> */}
                <img src={T1} alt="" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero__img-box mt-5">
                <img src={T2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

          {/* <div className='mt-4 border border-white'>
          <Search/>
          </div> */}
      

      <section className="feature_section bgcolor_feature">
        <div></div>
        <div className="container">
          <div className="row">
            <div className="col-md-4  ">
              <div className="card shadow-x features-box">
                <div className="text-left p-3">
                  <div className="features-icon-border">
                    <span className="services-icon">
                      <i className="icon_fi fas fa-hotel fs-1"></i>
                    </span>
                  </div>
                  <div className="features-text">
                    <h3 className='text_style'>Luxurious Hotel</h3>
                    <p className="text">Make your hotel search easier by browsing through our selection of hotels. From budget properties to mid-range, and luxurious hotels, we offer all.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="card  shadow-x features-box ">
                <div className="  text-left p-3">
                  <div className="features-icon-border">
                    <span className="services-icon">
                      <i className="icon_fi fas fa-map-marked-alt fs-1"></i>
                    </span>
                  </div>
                  <div className="features-text">
                    <h3 className='text_style'>Travel Guide</h3>
                    <p className="text">With free TripBoss guides, you will get the inside scoop on the state people, places and happenings. Sign up to have TripBoss publications delivered right to your mailbox or download them online.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="card shadow-x features-box">
                <div className="text-left p-3 ">
                  <div className="features-icon-border">
                    <span className="services-icon">
                      <i className="icon_fi fas fa-money-bill fs-1"></i>
                    </span>
                  </div>
                  <div className="features-text">
                    <h3 className='text_style'>Visa</h3>
                    <p className="text">We also offer visa services for all your traveling needs. We are among the few visa agencies in India that provide consultation for over 200 countries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      <section className='container-fluid mt-5'>
         <div className='container'>
            <div className='row'>
               <div lg='12' className='mb-5'>
                <h2 className='fs-1 featured__tour-title text-center text_style'>Our Featured Tours</h2>
               </div>
               <Card/>
            </div>
         </div>
      </section>

      <div className='container-fluid mt-4 border border-white'>
        <Gallary/>
        </div>
    </>
  );
}

export default Home;
