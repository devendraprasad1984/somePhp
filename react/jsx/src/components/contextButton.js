import React from 'react'
import contextsObject from './contextsObject'
import {defaultObject} from './defaultObject'

class ContextButton extends React.Component {
    static contextType = contextsObject

    render() {
        // this.textValue = this.context === 'English' ? 'Submit' : 'other values'
        this.textValue=defaultObject[this.context]['name']
        console.log("context object", this.context)
        return (
            <div>
                <span className="ui button primary">{this.textValue}</span>
            </div>
        )
    }
}

// ContextButton.contextType=contextsObject
export default ContextButton
