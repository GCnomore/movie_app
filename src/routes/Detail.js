import React from 'react';
import Navigation from '../component/Navigation';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    console.log(this.props);
    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const movie = this.props.location.state;
    if (movie) {
      return (
        <div id='detail_container'>
          <Navigation />
          <div id='detail_moviePoster'>
            <img alt={movie.title} src={movie.poster} />
          </div>
          <div>
            <ul id='detail_movieInfo'>
              <li id='detail_movieTitle'>{movie.title}</li>
              <li id='detail_movieYear'>{movie.year}</li>
              <li id='detail_movieMPA'>Rated: {movie.mpa_rating}</li>
              <li id='detail_movieRuntime'>Runtime: {movie.runtime}</li>
              <li id='detail_movieGenres'>{movie.genres}</li>
              <li id='detail_movieRating'>
                {' '}
                <img
                  alt='img'
                  id='detail_ratingImg'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png'
                />{' '}
                {movie.rating} out of 10
              </li>
            </ul>
          </div>
          <div id='detail_movieSummary'>
            <h2>Summary:</h2> <br />
            {movie.summary}
          </div>

          {/* {movie.trailer} */}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
