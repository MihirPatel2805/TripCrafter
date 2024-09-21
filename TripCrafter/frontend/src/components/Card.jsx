import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardSec from './CardSec'; 

const Card = () => {
   const url = "http://127.0.0.1:8000/api/tours/";
 

 const useFetch=(url)=>{
    const [data, setData] = useState([]);
   
   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(url);
            console.log(response.data);
            setData(response.data);
         } catch (error) {
            console.error(error);
           
         }
      };

      fetchData();
   }, [url]);

   return {data};
 };

 const { data } = useFetch(url);
return (
   <div className="container">
     <div className="row">
       {data.map((tour, index) => (
            tour.featured &&(
         <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 shadow-x">
              <CardSec tour={tour} />
         </div>)
       ))}
     </div>
   </div>
 );
};

export default Card;
