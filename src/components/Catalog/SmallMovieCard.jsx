import React from 'react';
import PropTypes from 'prop-types';

class SmallMovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.videoPlayerMouseEnterHandler = this.videoPlayerMouseEnterHandler.bind(this);
    this.videoPlayerMouseLeaveHandler = this.videoPlayerMouseLeaveHandler.bind(this);
    this.state = {
      videoStart: false,
    };
  }

  render() {
    return <article className="small-movie-card catalog__movies-card" onMouseLeave={this.videoPlayerMouseLeaveHandler} onMouseEnter={this.videoPlayerMouseEnterHandler}>
      <div className="small-movie-card__image">
        <video ref={this.videoRef} poster={this.props.poster} src={this.props.preview} muted alt="Midnight Special" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{this.props.title}</a>
      </h3>
    </article>;
  }

  videoPlayerMouseEnterHandler() {
    if (!this.state.videoStart) {
      this.videoRef.current.play();
      this.setState({videoStart: true});
    }
  }

  videoPlayerMouseLeaveHandler() {
    if (this.state.videoStart) {
      this.videoRef.current.load();
      this.setState({videoStart: false});
    }
  }
}

SmallMovieCard.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  preview: PropTypes.string,
};

export default SmallMovieCard;
