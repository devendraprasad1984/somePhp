import React from "react";
import StreamList from './StreamList'

class StreamCurrentUserOnly extends React.Component{
     render(){
        return(
            <div>
                <span>stream from current user</span>
                <StreamList showCurrent="true"></StreamList>
            </div>
        )
    }
}

export default StreamCurrentUserOnly
