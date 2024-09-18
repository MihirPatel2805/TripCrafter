
import React, { useState, useEffect } from 'react';
import CardSec from '../components/CardSec';
import UseFetch from '../components/UseFetch';
import './tour.css';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = UseFetch('http://127.0.0.1:8000/api/tours');

  useEffect(() => {
    if (tours.length > 0) {
      const pages = Math.ceil(tours.length / 8);
      setPageCount(pages);
    }
  }, [tours]);

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page when changing the page
  };

  return (
    <>
      <section className="your-section">
         {/* Background image */}
         <div className="background-image"></div>

         {/* Dark transparent filter */}
         <div className="dark-filter"></div>

         {/* Title and subtitle */}
         <div className="content">
            <h1 className="title">Tour Pakages</h1>
            <h3 className="subtitle">Wish you ! Happy Journey</h3>
         </div>
      </section>

      <section className="pt-0 mt-5 border border-white">
        <div className="container">
          {loading && <h4 className="text-center pt-5">LOADING..........</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          {!loading && !error && (
            <div className="row">
              {tours.slice(page * 8, (page + 1) * 8).map((tour) => (
                <div className="col-lg-4 col-md-6 col-sm-6 mb-4" key={tour._id}>
                  <CardSec tour={tour} />
                </div>
              ))}

              <div className="col-lg-12 page_box">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3 m-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => handlePageClick(number)}
                      className={page === number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Tours;
