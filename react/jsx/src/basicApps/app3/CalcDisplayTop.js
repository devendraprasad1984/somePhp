import React from 'react'

export default class CalcDisplayTop extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="row col-lg-12">
                <input className="form-control" style={{
                    height:'50px'
                    ,margin:'5px'
                    ,fontSize:'22pt'
                }} type="text" onChange={()=>{}} value={this.props.curVal}/>
            </div>
        )
    }
}