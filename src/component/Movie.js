import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import '../routes/Home.css';


function Movie ({ title, year, genres, rating, runtime, mpa_rating, summary, poster, trailer }) {
    
    return (
        <div className="movies_movie">
            <a href={"https://www.youtube.com/watch?v="+trailer} >
                <img className="movie_poster" src={poster} alt={title} title={title} />
            </a>
                <div className="movie_data">
                    <h3 className="movie_title" >{title}</h3>
                    <h5 className="movie_year" >{year}</h5>
                    <h5 className="movie_rating" ><img alt="img" className="ratingImg" src='https://yts.mx/assets/images/website/logo-imdb.svg' /> {rating} out of 10</h5>
                    <h5 className="movie_runtime" >Runtime: {runtime}min.</h5>
                    <h5 className="movie_genres" >{genres.join(" / ")}</h5>
                    <h5 className="movie_mpa_rating" >{mpa_rating ? "Rated: "+mpa_rating : "Rated: N/A"}</h5>
                    <p className="movie_summary">{summary.slice(0, 200)}...</p>
        <Link to={{
            pathname: "/movie-detail",
            state: {
                title,
                year,
                genres,
                rating,
                runtime,
                mpa_rating,
                summary,
                poster
            }
        }}>
        </Link>
                </div>
            </div>
    );
};

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
    trailer: PropTypes.string.isRequired

};

export default Movie; 