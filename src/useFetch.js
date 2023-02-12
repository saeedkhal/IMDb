import { useState, useEffect, useCallback } from 'react';
function useFetch(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  console.log(url);
  const getMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setData(data.Search || data);
        setError('');
      } else {
        setError(data.Error);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return { loading, data, error, setLoading };
}

export default useFetch;
