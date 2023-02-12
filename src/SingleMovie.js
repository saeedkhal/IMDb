import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT } from './context';
import useFetch from './useFetch';

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, data, error } = useFetch(`${API_ENDPOINT}&i=${id}`);
  if (loading) {
    return <div className="loading"></div>;
  } else if (error) {
    return (
      <div className="page-error">
        <h1>404</h1>
        <p>Movie not found</p>
        <Link to="/" className="btn">
          Go back to home
        </Link>
      </div>
    );
  } else {
    return (
      <section className="single-movie">
        <img src={data.Poster} alt={data.Title} />
        <div className="single-data-info">
          <h2>{data.Title}</h2>
          <p>{data.Plot}</p>
          <h4>{data.Year}</h4>
          <Link className="btn" to="/">
            Back To Home
          </Link>
        </div>
      </section>
    );
  }
};

export default SingleMovie;
