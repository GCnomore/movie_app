import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation (){
    return (
        <div className="Navigation">
            <p>
            <Link className="Home" to='/'>Home</Link>
            <Link className="About" to='/about'>About</Link>
            </p>
        </div>
    )
}

export default Navigation;