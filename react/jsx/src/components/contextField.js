import React from 'react'
import contextsObject from './contextsObject'
import {defaultObject} from "./defaultObject";

class ContextField extends React.Component{
    static contextType = contextsObject //this steps form the link of context object and our class
    render(){
        // this.textValue = this.context === 'English' ? 'Name' : 'Name Other'
        this.textValue=defaultObject[this.context]['value']
        return(
            <div className="ui field">
                <label>{this.textValue}</label>
                <input type="text"/>
            </div>
        )
    }
}

export default ContextField
