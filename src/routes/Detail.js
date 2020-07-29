import React from "react";
import "../component/Navigation.css";

class Detail extends React.Component{
    componentDidMount () {
        const { location, history } = this.props;
        if (location.state === undefined){
            history.push("/");
        }
    }

    render () {
        return (
            <span>Hello</span>
            );
    }

}

export default Detail;