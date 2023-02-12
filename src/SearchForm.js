import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(query);
  };
  const handelChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>search movies</h2>
      <input
        type="input"
        className="form-input"
        value={query}
        onChange={handelChange}
      ></input>
      {error === 'Incorrect IMDb ID.' ? (
        <div className="error">Empty Search</div>
      ) : (
        <div className="error">{error}</div>
      )}
    </form>
  );
};

export default SearchForm;
