import { useEffect, useState} from 'react';
import axios from 'axios';

// this is the base url to a cat api
const BASE_URL = 'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=5'

// Here we create a custome hook to use axios.get to fetch data from a restful api
// standards of rest are CRUD
// Create - POST
// Read - GET
// Update - PUT, PATCH
// Delete - DELETE
const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const { data: response } = await axios.get(BASE_URL);
        setData(response);
      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};

export default useFetchData;