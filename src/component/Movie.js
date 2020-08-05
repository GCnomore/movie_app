import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../routes/Home.css';

function Movie({
  title,
  year,
  genres,
  rating,
  runtime,
  mpa_rating,
  summary,
  poster,
  trailer,
}) {
  var runTime = {
    time: null,
    min: null,
  };
  function calcTime() {
    var toTime = runtime;
    if (toTime >= 60) {
      for (var i = 60; toTime >= i; ) {
        runTime.time++;
        toTime = toTime - i;
      }
      runTime.min = toTime;
    } else {
      runTime.min = runtime;
    }
  }
  calcTime();
  var timeMin = '';
  if (runTime.time == null) {
    timeMin = `${runTime.min}min`;
  } else if (runTime.time > 1) {
    timeMin = `${runTime.time}hrs ${runTime.min}min`;
  } else {
    timeMin = `${runTime.time}hr ${runTime.min}min`;
  }

  return (
    <div className='movies_movie'>
      <img
        id='movie_poster'
        className={trailer}
        src={poster}
        alt={title}
        title={title}
      />

      <div className='movie_data'>
        <h3 className='movie_title'>{title}</h3>
        <h5 className='movie_year'>{year}</h5>
        <h5 className='movie_rating'>
          <img
            alt='img'
            className='ratingImg'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png'
          />{' '}
          {rating} out of 10
        </h5>
        <h5 className='movie_runtime'>
          Runtime: {runTime.time && runTime.min ? timeMin : 'N/A'}
        </h5>
        <h5 className='movie_genres'>{genres ? genres.join(' / ') : null}</h5>
        <h5 className='movie_mpa_rating'>
          {mpa_rating ? 'Rated: ' + mpa_rating : 'Rated: N/A'}
        </h5>
        <p className='movie_summary'>
          <Link
            to={{
              pathname: '/movie-detail',
              state: {
                title,
                year,
                genres,
                rating,
                runtime,
                mpa_rating,
                summary,
                poster,
                trailer,
              },
            }}>
            {summary.slice(0, 200)}...
          </Link>
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  mpa_rating: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
};

export default Movie;
