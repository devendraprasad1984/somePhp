import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from "./GoogleAuth";
// import GoogleAuthCopy from "./GoogleAuthCopy";

const StreamsHeader = () => {
    return (
            <div className="ui secondary pointing menu">
                <Link to="/" className='item'>Streamer</Link>
                <div className='right menu'>
                    <Link to="/" className='item'>All Streams</Link><br/>
                    <GoogleAuth/><br/>
                    {/*<GoogleAuthCopy/><br/>*/}
                </div>
            </div>
            )
}

export default StreamsHeader;
    
   