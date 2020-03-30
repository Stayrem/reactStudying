import React from 'react';
import PropTypes from 'prop-types';


const MovieReviews = (props) => {
  const {reviews} = props;
  const firstCol = reviews.slice(0, 2);
  const lastCol = reviews.slice(3, 5);
  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">
          {firstCol.map((review, i) => {
            const {author, date, score, text} = review;
            return (
              <div key={i} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{text}</p>
                  <footer className="review__details">
                    <cite className="review__author">{author}</cite>
                    <time className="review__date" dateTime="2016-12-24">{date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{score}</div>
              </div>
            );
          })}
        </div>
        <div className="movie-card__reviews-col">
          {lastCol.map((review, i) => {
            const {author, date, score, text} = review;
            return (
              <div key={i} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">{text}</p>
                  <footer className="review__details">
                    <cite className="review__author">{author}</cite>
                    <time className="review__date" dateTime="2016-12-24">{date}</time>
                  </footer>
                </blockquote>
                <div className="review__rating">{score}</div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default MovieReviews;

