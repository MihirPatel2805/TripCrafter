import {useState, useEffect} from 'react'
import axios from 'axios';

const useFetch = (url) => {
   const [data, setData] = useState([])
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      const fetchData = async() => {
         setLoading(true)

            axios.get('http://127.0.0.1:8000/api/tours/')
           
            .then((response) => {
                setData(response.data);
                console.log(response.data);
                setLoading(false);

            })
            .catch((error) => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
}

      fetchData()
   },[url])

   return {
      data,
      error,
      loading
   }
}

export default useFetch