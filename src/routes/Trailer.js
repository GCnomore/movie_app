import React from "react";


function Trailer (props) {
    console.log(props);
    return(
        <div>
        <h1>
            {props.title}
        </h1>
        <Poster img={props.poster} />
        </div>
    )
}

function Poster (poster) {
    return (
        <img src={poster.img} alt="poster"/>
    )
}


export default Trailer;