import React from 'react'

export default class CalcDisplayTop extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <input type="text" onChange={()=>{}} value={this.props.curVal}/>
            </div>
        )
    }
}