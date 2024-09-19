import React, { useEffect, useState } from "react";
import axios from "axios";
import "./traincheckoutpage.css";
import { useParams, useSearchParams } from "react-router-dom";
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
const Traincheckoutpage = () => {
  const [data, setData] = useState(null); // State to hold fetched data
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date")); // To get the 'date' query parameter
  const { id,coachName } = useParams(); // Get the train ID from the URL params

  useEffect(() => {
    // Fetch train data by train ID
    const fetchTrainData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/trains/trains/${id}/`);
        setData(response.data); // Set the fetched data to state
        console.log(response.data)
        console.log(coachName)
      } catch (error) {
        console.error("Error fetching train data:", error);
      }
    };

    fetchTrainData();
  }, [id]);

  return (
    <>
      <div className="travellerInfo">
        <div className="travellerHead">
          <h2>Select Travellers</h2>
        </div>
        <div className="railTravellersWrapper">
          <div className="railTravellersContainer">
            <section className="leftSection appendTop30 appendRight30">
              <div className="trdInfo">
                <div className="trdDetails makeFlex column">
                  <div className="appendBottom30">
                    <div className="makeFlex appendBottom5 spaceBetween">
                      <div className="column appendRight50">
                        <h3 className="font22 latoBlack appendBottom5">
                          {data?.trainName}
                        </h3>
                        <p>
                          <span className="font12 lightGreyText">
                            #{data?.trainNumber}
                          </span>
                        </p>
                      </div>
                      <div className="makeFlex hrtlCenter ">
                        <div className="makeFlex column appendRight20 ml-5">
                          <p className="appendBottom10">
                            <span className="latoBlack">
                              {data?.departureTime}
                            </span>
                            <span className="latoBlack">, </span>
                          </p>
                          <p className="font12 darkGreyText">
                            {data?.source}
                          </p>
                        </div>
                        <span className="bdrTop"></span>
                        <div className="makeFlex column appendRight20">
                          <p className="font12 latoBold appendBottom20">
                            10
                            <span className="lightGreyText"> hrs </span>
                            48
                            <span className="lightGreyText"> mins</span>
                          </p>
                        </div>
                        <span className="bdrTop"></span>
                        <div className="makeFlex column appendBottom10 appendTop15">
                          <p className="appendBottom10">
                            <span className="latoBlack">
                              {data?.arrivalTime}
                            </span>
                            <span className="latoBlack">, </span>
                          </p>
                          <p className="font12 darkGreyText">
                            {data?.destination}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="makeFlex makeRelative">
                    <div className="makeFlex column appendRight40">
                      <div className="makeFlex column">
                        <h3 className="latoBold font14 darkGreyText ">
                          Availability Status
                        </h3>
                        <div className="trStatusBlock">
                          <p className="makeFlex appendBottom5 hrtlCenter">
                            <span className="latoBlack font16 appendRight20">
                              SL
                            </span>
                            <span className="latoBold font16">
                              <span className="orangeText">RLWL40/WL33</span>
                            </span>
                          </p>
                          <p className="font12 lightGreyText appendTop10">
                            Updated 11 hrs ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-[43px]">
                      <div className="selectedQuotaContainer noSelection selectWrap makeRelative">
                        <p className="labelName appendBottom10 darkGreyText font14 greyed latoBold">
                          Your Boarding Station
                        </p>
                        <p className="selectedQuota cursorPointer latoBold font12 makeFlex">
                          <span className="latoRegular font14 darkGreyText">
                            {data?.source} - {data?.departureTime}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className=" appendTop30 rightrailSection">
              <div className="appendBottom20">
                <div id="FARE_SUMMARY">
                  <section className="fareSummary">
                    <div>
                      <p className="fontSize18 blackFont payandbook">
                        FARE SUMMARY
                      </p>
                    </div>
                    <div className="fareBreakWrapper">
                      <div className="fareTypeWrap">
                        <div className="fareRow">
                          <div className="makeFlex pointer flexOne">
                            <span className="fareHeader">Base Fare</span>
                          </div>
                          <span className="fontSize14 darkText">
                            ₹ {calculateFare(data?.fare,coachName)}
                          </span>
                        </div>
                      </div>
                      <div className="fareTypeWrap">
                        <div className="fareRow">
                          <div className="makeFlex pointer flexOne">
                            <span className="fareHeader">Extra Charges</span>
                          </div>
                          <span className="fontSize14 darkText">₹ 0</span>
                        </div>
                      </div>
                    </div>
                    <div className="fareFooter">
                      <p className="payNowWrapper">
                        <span className="fontSize16 blackFont">Total Price</span>
                        <span className="fontSize16 blackFont">
                          ₹ {calculateFare(data?.fare,coachName)}
                        </span>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]">
      </div>
    </>
  );
};

export default Traincheckoutpage;
