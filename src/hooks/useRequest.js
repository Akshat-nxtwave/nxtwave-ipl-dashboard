import { useState, useEffect } from "react";

const useRequest = ({ url, method, options }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const fetchedData = await fetch(url, {
      method,
      ...options,
    }).then((res) => res.json());

    setData(fetchedData);
    setLoading(false);
  };

  useEffect(() => {fetchData()}, []);
  return { refetch: fetchData, data, setData, loading };
};

export default useRequest;
