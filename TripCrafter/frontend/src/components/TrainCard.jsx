import React from "react";
import "../pages/trainsearchpage.css";
import { Link } from "react-router-dom";

const calculateFare = (baseFare, coachType) => {
  let multiplier = 1;

  // Assign multipliers based on coach types (capped at 2.5)
  switch (coachType) {
    case "1A": // First AC
      multiplier = 2.2;
      break;
    case "2A": // Second AC
      multiplier = 2;
      break;
    case "3A": // Third AC
      multiplier = 1.7;
      break;
    case "CC": // Chair Car
      multiplier = 1.5;
      break;
    case "SL": // Sleeper Class
      multiplier = 1.2;
      break;
    default:
      multiplier = 1; // General or any other coach type
      break;
  }

  // Calculate final fare based on base fare and multiplier
  return baseFare * multiplier;
};
const TrainCard = ({ data }) => {
  return (
    <>
      <div className="searchresults-div">
        {data?.trains.length > 0 ? (
          data?.trains.map((train, index) => (
            <div key={index} className="showtrains">
              <div className="showtrains-topdiv">
                <div className="trainname-and-details">
                  <p className="trainname">{train?.trainName}</p>
                  <div className="traindetails-div">
                    <p className="train-number">#{train?.trainNumber}</p>
                    <p>
                      <span className="departure-dates">Departs on :</span>
                      <span>S</span>
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                    </p>
                  </div>
                </div>
                <div className="departuredetails-div">
                  <p>{train?.departureTime}</p>
                  <p>{train?.source}</p>
                </div>
                <div className="traveltime-div">
                  <div>
                    <p>{train?.travelDuration}</p>
                  </div>
                </div>
                <div className="arrivaldetails-div">
                  <p>{train?.arrivalTime}</p>
                  <p>{train?.destination}</p>
                </div>
              </div>

                  <div className="showtrains-btmdiv">
                    {train?.coaches.map((coach, coachIndex) => (
              <Link to={`/traincheckoutpage/${train.id}/${coach.coachType}`}>
                      <div key={coachIndex} className="sl-card">
                        <div>
                          <p>{coach.coachType}</p>
                          <p>₹ {calculateFare(train.fare, coach.coachType)}</p>
                          {/* You can replace this calculation with your actual logic */}
                        </div>
                        <p className="rac-nmbr">RAC {coachIndex + 1}</p>
                        <p className="cancellation">Free Cancellation</p>
                      </div>
                    </Link>
                    ))}
                  </div>
            </div>
          ))
        ) : (
          <p className="flex justify-center items-center my-16 text-2xl font-bold">
            No trains found for the given day.
          </p>
        )}
      </div>
    </>
  );
};

export default TrainCard;
