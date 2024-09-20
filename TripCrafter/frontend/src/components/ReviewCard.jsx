import React from 'react';

const ReviewCard = ({ name, profileImg, rating, reviewText }) => {
  const renderStars = () => {
    return Array(rating).fill().map((_, index) => (
      <span key={index}>&#9733;</span>  // Unicode star symbol
    ));
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-start">
          <img
            src={profileImg}
            alt={`${name}'s profile`}
            className="rounded-circle me-3"
            style={{ width: '60px', height: '60px' }}
          />
          <div>
            <h5 className="card-title mb-1">{name}</h5>
            <div className="text-warning mb-2">{renderStars()}</div>
            <p className="card-text">{reviewText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
