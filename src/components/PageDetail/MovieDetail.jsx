import React from 'react';
import PropTypes from 'prop-types';


const MovieDetail = (props) => {

  const {directors, starring, runTime, genre, released} = props;

  return (
    <React.Fragment>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{directors.map((director) => director + `,`)}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">{starring.map((actor) => actor + `,`)}</span>
        </p>
      </div>
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{released}</span>
        </p>
      </div>
    </React.Fragment>
  );
};

MovieDetail.propTypes = {
  runTime: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  directors: PropTypes.arrayOf(PropTypes.string).isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  released: PropTypes.string.isRequired,
};

export default MovieDetail;

