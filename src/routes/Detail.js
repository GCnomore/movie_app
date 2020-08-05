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

    function selTrailer(e) {
      const trailerURL = e.target.className;
      const trailerModal = document.querySelector('#detail_trailerModal');
      document
        .querySelector('#detail_container')
        .classList.toggle('modal_background');

      if (trailerURL) {
        trailerModal.classList.remove('noTrailer');
        trailerModal.innerHTML = `<iframe width="100%" height="100%" src=${
          'https://www.youtube.com/embed/' + trailerURL
        } frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        trailerModal.classList.toggle('hide');
        trailerModal.classList.add('trailerModal');
      } else {
        trailerModal.innerHTML = 'Preview not available';
        trailerModal.classList.add('noTrailer');
        trailerModal.classList.toggle('hide');
      }
    }
    if (movie) {
      return (
        <div>
          <div id='detail_container'>
            <Navigation />
            <div id='detail_moviePoster' onClick={selTrailer}>
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
          </div>
          <div className='hide' id='detail_trailerModal' />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
