import React from 'react';
import T0 from '../images/tour04.jpg';
import T1 from '../images/tour05.jpg';
import T2 from '../images/tour06.jpg';

import './pagescss/home.css';
import Gallary from '../components/Gallary';
import Card from '../components/Card';
import ReviewCard from '../components/ReviewCard'

const reviews = [
  {
    name: 'Krish Patel',
    profileImg: 'https://images.pexels.com/photos/938639/pexels-photo-938639.jpeg?cs=srgb&dl=pexels-ravi-k-301762-938639.jpg&fm=jpg',
    rating: 5,
    reviewText: 'Booking through this website was super easy! Got great deals and had an amazing experience.',
  },
  {
    name: 'Viral Joshi',
    profileImg: 'https://as1.ftcdn.net/v2/jpg/02/79/90/20/1000_F_279902034_kBjKUJvC8y19AdkEJ3L3emqxVqY5K7Cv.jpg',
    rating: 4,
    reviewText: 'Overall a good experience, though the filtering options could be improved. The service was excellent!',
  },
  {
    name: 'Pratham Makvana',
    profileImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7mfz0ZWyJ1mc5_ObMbLHliYBsUDmEYRmXA&s',
    rating: 3,
    reviewText: 'The booking process was fine, but I had issues with my confirmation email. Customer support helped resolve it.',
  },
  {
    name: 'Subham Kotadiya',
    profileImg: 'https://plus.unsplash.com/premium_photo-1682092603230-1ce7cf8ca451?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwbWFufGVufDB8fDB8fHww',
    rating: 5,
    reviewText: 'Loved the platform! Quick and easy. I will definitely use this site again for my next trip!',
  },
  {
    name: 'Meet Panchal',
    profileImg: 'https://st4.depositphotos.com/10313122/22093/i/450/depositphotos_220936114-stock-photo-young-handsome-indian-man-against.jpg',
    rating: 4,
    reviewText: 'The prices were competitive, and I appreciated the fast booking confirmation. Smooth process overall.',
  }
];

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero__content fade-in-up">
                <h1>
                  Traveling opens the door to creating{' '}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Explore a diverse range of travel options and easily book your dream destinations right here. Our user-friendly platform ensures seamless booking experiences, allowing you to focus on creating cherished memories. Start your adventure today!
                </p>
                <button className="btn btn-primary explore-btn">Explore Now</button>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero__img-box scale-in-center">
                <img src={T0} alt="Tour 1" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero__img-box hero__video-box mt-4 scale-in-center">
                <img src={T1} alt="Tour 2" />
              </div>
            </div>
            <div className="col-lg-2">
              <div className="hero__img-box mt-5 scale-in-center">
                <img src={T2} alt="Tour 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid mt-4 border border-white">
        <Gallary />
      </section>

      <section className="feature_section bgcolor_feature">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-x features-box hover-scale">
                <div className="text-left p-3">
                  <div className="features-icon-border">
                    <span className="services-icon">
                      <i className="icon_fi fas fa-hotel fs-1"></i>
                    </span>
                  </div>
                  <div className="features-text">
                    <h3 className="text_style">Luxurious Hotel</h3>
                    <p className="text">
                      Make your hotel search easier by browsing through our selection of hotels. From budget properties to mid-range, and luxurious hotels, we offer all.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-x features-box hover-scale">
                <div className="text-left p-3">
                  <div className="features-icon-border">
                    <span className="services-icon">
                      <i className="icon_fi fas fa-map-marked-alt fs-1"></i>
                    </span>
                  </div>
                  <div className="features-text">
                    <h3 className="text_style">Travel Guide</h3>
                    <p className="text">
                      With free TripBoss guides, you will get the inside scoop on the state people, places and happenings. Sign up to have TripBoss publications delivered right to your mailbox or download them online.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-x features-box hover-scale">
                <div className="text-left p-3">
                  <div className="features-icon-border">
                    <span className="services-icon">
                      <i className="icon_fi fas fa-money-bill fs-1"></i>
                    </span>
                  </div>
                  <div className="features-text">
                    <h3 className="text_style">Visa</h3>
                    <p className="text">
                      We also offer visa services for all your traveling needs. We are among the few visa agencies in India that provide consultation for over 200 countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid mt-5">
        <div className="container">
          <div className="row">
            <div lg="12" className="mb-5">
              <h2 className="fs-1 featured__tour-title text-center text_style">Our Featured Tours</h2>
            </div>
            <Card />
          </div>
        </div>
      </section>

      <div className="container my-5">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              profileImg={review.profileImg}
              rating={review.rating}
              reviewText={review.reviewText}
            />
          ))}
        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
