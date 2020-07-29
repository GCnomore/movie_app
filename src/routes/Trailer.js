import React from 'react';

function Trailer(props) {
  console.log(props.location.state.props);
  return (
    <div>
      <h1>Redirecting</h1>;
    </div>
  );
}

export default Trailer;
