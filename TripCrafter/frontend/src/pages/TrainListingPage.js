import React, { useEffect, useState } from "react";
import "./trainsearchpage.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import trainData from "../components/trainData";
import TrainCard from "../components/TrainCard";
import Traintopsection from "../components/Traintopsection";
 // Import the train data

const TrainListingPage = () => {
  const [params, setParams] = useSearchParams();
  const source = params.get("source");
  const destination = params.get("destination");
  const day = params.get("day");
  const trainType = params.get("trainType");
  const departureTime = params.get("departureTime");
  const arrivalTime = params.get("arrivalTime");
  const coachType = params.get("coachType");

  // Static train data


  const [data, setData] = useState({ trains: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCheckboxChange = (key, value) => {
    if (value === "") {
      params.delete(key);
      setParams(params);
      return;
    }

    const newSearchParams = { ...Object.fromEntries(params), [key]: value };
    setParams(newSearchParams);
  };

  const handleTrainSearchButtonClick = (searchData) => {
    setParams({
      source: searchData.source,
      destination: searchData.destination,
      day: searchData.day,
      date: searchData.date, // Assuming date is part of searchData
    });
  };

  useEffect(() => {
    const fetchTrainData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/trains/");
        let filteredTrains = response.data;
        if (source) {
          filteredTrains = filteredTrains.filter(train => train.source === source);

        }

        if (destination) {
          filteredTrains = filteredTrains.filter(train => train.destination === destination);
        }

        if (day) {
          filteredTrains = filteredTrains.filter(train => JSON.parse(train.daysOfOperation).includes(day.toLowerCase()));
        }

        if (departureTime) {
          filteredTrains = filteredTrains.filter(train => train.departureTime >= departureTime);
        }

        if (arrivalTime) {
          filteredTrains = filteredTrains.filter(train => train.arrivalTime <= arrivalTime);
        }

        if (coachType) {
          filteredTrains = filteredTrains.filter(train =>
              train.coaches.some(coach => coach.coachType === coachType)
          );
        }

        if (trainType) {
          filteredTrains = filteredTrains.filter(train => train.trainType === trainType);
        }
        setData({ trains: filteredTrains });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchTrainData();
  }, [params]); // Depend on params only

  return (
      <>
        <div className="trainspagemaindiv">
          <Traintopsection updateSearchParams={handleTrainSearchButtonClick} />
          <div className="trainspage-bottomdiv">
            <div className="filters-div">
              <div className="flitercategory">
                <p>Quick Filters</p>
                <ul>
                  <li>
                    <input
                        type="checkbox"
                        checked={departureTime === "18" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "departureTime",
                                e.target.checked ? 18 : ""
                            )
                        }
                    />
                    <p>Departure after 6 PM</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={arrivalTime === "12" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "arrivalTime",
                                e.target.checked ? 12 : ""
                            )
                        }
                    />
                    <p>Arrival before 12 PM</p>
                  </li>
                </ul>
              </div>

              <div className="flitercategory">
                <p>Journey Class Filters</p>
                <ul>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "1A" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "1A" : ""
                            )
                        }
                    />
                    <p>1st Class AC - 1A</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "2A" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "2A" : ""
                            )
                        }
                    />
                    <p>2 Tier AC - 2A</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "3A" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "3A" : ""
                            )
                        }
                    />
                    <p>3 Tier AC - 3A</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "3E" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "3E" : ""
                            )
                        }
                    />
                    <p>AC three tier(economy)-3E</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "SL" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "SL" : ""
                            )
                        }
                    />
                    <p>Sleeper - SL</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "CC" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "CC" : ""
                            )
                        }
                    />
                    <p>AC Chair Car - CC</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "2S" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "2S" : ""
                            )
                        }
                    />
                    <p>Second Sitting - 2S</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={coachType === "EA" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "coachType",
                                e.target.checked ? "EA" : ""
                            )
                        }
                    />
                    <p>Executive Anubhuti - EA</p>
                  </li>
                </ul>
              </div>

              <div className="flitercategory">
                <p>Train Types</p>
                <ul>
                  <li>
                    <input
                        type="checkbox"
                        checked={trainType === "Superfast" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "trainType",
                                e.target.checked ? "Superfast" : ""
                            )
                        }
                    />
                    <p>Superfast</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={trainType === "Rajdhani" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "trainType",
                                e.target.checked ? "Rajdhani" : ""
                            )
                        }
                    />
                    <p>Rajdhani</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={trainType === "Express" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "trainType",
                                e.target.checked ? "Express" : ""
                            )
                        }
                    />
                    <p>Express</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={trainType === "Shatabdi" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "trainType",
                                e.target.checked ? "Shatabdi" : ""
                            )
                        }
                    />
                    <p>Shatabdi</p>
                  </li>
                  <li>
                    <input
                        type="checkbox"
                        checked={trainType === "Duronto" ? true : false}
                        onChange={(e) =>
                            handleCheckboxChange(
                                "trainType",
                                e.target.checked ? "Duronto" : ""
                            )
                        }
                    />
                    <p>Duronto </p>
                  </li>
                </ul>
              </div>
            </div>

            <TrainCard data={data} />
          </div>
        </div>
      </>
  );
};

export default TrainListingPage;
