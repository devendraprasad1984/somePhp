import React from "react";
import {Link} from "react-router-dom";

class StreamsNav extends React.Component{
    render(){
        return(
            <div>
                <Link to="/">New</Link>
                <Link to="/streams/new">Create</Link>
                <Link to="/streams/edit">Edit</Link>
                <Link to="/streams/delete">Delete</Link>
                <Link to="/streams/show">Show</Link>
            </div>
        )
    }
}

export default StreamsNav
