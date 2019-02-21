import React from "react";
import {Link} from "react-router-dom";

class StreamsNav extends React.Component{
    render(){
        return(
            <div>
                <Link to="/practice/streams/">New</Link>
                <Link to="/practice/streams/new">Create</Link>
                <Link to="/practice/streams/edit">Edit</Link>
                <Link to="/practice/streams/delete">Delete</Link>
                <Link to="/practice/streams/show">Show</Link>
                <Link to="/practice/streams/currentUserOnly">Current User Streams</Link>
            </div>
        )
    }
}

export default StreamsNav
