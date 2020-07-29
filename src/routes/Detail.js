import React from 'react';
import '../component/Navigation.css';

function Detail({
  title,
  year,
  genres,
  rating,
  runtime,
  mpa_rating,
  summary,
  poster,
}) {
  console.log(
    title,
    year,
    genres,
    rating,
    runtime,
    mpa_rating,
    summary,
    poster
  );
  return <span>Hello</span>;
}

export default Detail;
