import { useEffect, useState } from "react";

const useFetch = ({ api, parameter }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetchData, setRefetchData] = useState(false);

  let uri;
  if (parameter) {
    uri = `${process.env.REACT_APP_API_URL}/${api}/${parameter}`;
  } else {
    uri = `${process.env.REACT_APP_API_URL}/${api}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(uri);
        const responseData = await response.json();
        setData(responseData.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [uri, refetchData]);

  const refetch = () => setRefetchData((prevState) => !prevState);

  return [data, loading, refetch];
};

export default useFetch;
