import React from "react";

class StreamDelete extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount() {
        console.log("Stream Delete Props and Route Props", this.props)
    }

    render(){
        return(
            <div>
                <span>stream delete</span>
            </div>
        )
    }
}

export default StreamDelete
