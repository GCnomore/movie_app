import React from 'react';
import './Detail.css';

function Detail(props) {
  const movie = props.location.state;
  return (
    <div id='detail_container'>
      <div id='detail_moviePoster'>
        <img src={movie.poster} />
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
}

export default Detail;
