import { useState, useEffect, Alert } from "react";

const useAppwrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(flase);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => fetchData();

  return { data, refetch, isLoading };
};

export default useAppwrite;
