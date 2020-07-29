import React from 'react';
import axios from 'axios';
import Movie from '../component/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
    value: '',
  };

  handleSelect = async (event) => {
    this.setState({ value: event.target.value, isLoading: true });
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies_json?sort_by=' +
        event.target.value +
        '&limit=50'
    );
    this.setState({ movies, isLoading: false });
  };

  getMoives = async () => {
    if (this.state.value === '') {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        'https://yts-proxy.now.sh/list_movies_json?sort_by=date_added&limit=50'
      );
      this.setState({ movies, isLoading: false });
    } else {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        'https://yts-proxy.now.sh/list_movies_json?sort_by=' +
          this.state.value +
          '&limit=50'
      );
      this.setState({ movies, isLoading: false });
    }
  };

  componentDidMount = () => {
    this.getMoives();
  };

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        <div>
          <form>
            <label>
              Sort by:
              <select onChange={this.handleSelect}>
                <option defaultValue='sortBy'></option>
                <option value='rating'>rating</option>
                <option value='year'>year</option>
                <option value='date_added'>date added</option>
              </select>
            </label>
          </form>
        </div>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.year}
                genres={movie.genres}
                rating={movie.rating}
                runtime={movie.runtime}
                mpa_rating={movie.mpa_rating}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                trailer={movie.yt_trailer_code}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
