import React from 'react';
import PropTypes from 'prop-types';


const MovieOverview = (props) => {

  const {score, scoresCount, directors, starring, overview} = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">Very good</span>
          <span className="movie-rating__count">{scoresCount} ratings</span>
        </p>
      </div>
      <div className="movie-card__text">
        {overview.map((text, i) => <p key={i}>{text}</p>)}
        <p className="movie-card__director"><strong>Director: {directors.map((director) => director + `,`) }</strong></p>
        <p className="movie-card__starring"><strong>Starring: {starring.map((actor) => actor + `,`)}</strong></p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  score: PropTypes.string.isRequired,
  scoresCount: PropTypes.number.isRequired,
  directors: PropTypes.arrayOf(PropTypes.string).isRequired,
  starring: PropTypes.arrayOf(PropTypes.string).isRequired,
  overview: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieOverview;

