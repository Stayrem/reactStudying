import React from 'react';
import PropTypes from 'prop-types';
import MovieOverview from './MovieOverview.jsx';
import MovieDetail from './MovieDetail.jsx';
import MovieReviews from './MovieReviews.jsx';

class DetailMovie extends React.PureComponent {
  constructor(props) {
    super(props);
    this.movie = this.props.movie;
    this.state = {
      tabIndex: 0
    };
  }

  renderTab() {
    switch (this.state.tabIndex) {
      case 1:
        return <MovieDetail directors={this.movie.directors} starring={this.movie.starring} runTime={this.movie.runTime} genre={this.movie.genre} released={this.movie.released} />;
      case 2:
        return <MovieReviews reviews={this.movie.reviews} />;
      default:
        return <MovieOverview overview={this.movie.overview} score={this.movie.score} scoresCount={this.movie.scoresCount} directors={this.movie.directors} starring={this.movie.starring} />;
    }
  }

  renderTabButtons() {
    const titles = [`Overview`, `Details`, `Reviews`];
    return (
      titles.map((title, i) => {
        return (
          <li key={i + title} onClick={() => this.setState({tabIndex: i})} className={ this.state.tabIndex === i ? `movie-nav__item movie-nav__item--active` : `movie-nav__item`}>
            <a href="#" className="movie-nav__link">{title}</a>
          </li>
        );
      })
    );
  }

  render() {
    return (
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                {this.renderTabButtons()}
              </ul>
            </nav>
            {this.renderTab()}
          </div>
        </div>
      </div>
    );
  }
}

DetailMovie.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DetailMovie;
