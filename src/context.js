import React, { useState, useContext, useEffect, useCallback } from 'react';
// make sure to use https
import useFetch from './useFetch';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('pursuit');
  const { loading, data, error } = useFetch(`${API_ENDPOINT}&s=${query}`);
  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        error,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
