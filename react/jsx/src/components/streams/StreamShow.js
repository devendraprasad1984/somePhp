import React from "react";
import browserHistory from "../../browserHistory";

class StreamShow extends React.Component{
    componentDidMount() {
        console.log(this.props)
    }

    render(){
        return(
            <div>
                <span>stream show</span>
                <div>
                    <button className="ui button" onClick={()=>{browserHistory.push('/')}}>Back</button>
                </div>
            </div>
        )
    }
}

export default StreamShow

//277