import React from 'react'
import ContextButton from "./contextButton";
import ContextField from "./contextField";
import contextsObject from "./contextsObject";
import ContextButtonViaContextConsumer from './contextButtonViaContextConsumer'

class ContextUserCreate extends React.Component{
    static contextType = contextsObject
    render(){
        console.log(this.context)
        return(
            <div className="ui form">
                <ContextField/>
                <div>
                    <span>via context props system</span>
                    <ContextButton/>
                </div>
                <div>
                    <span>via context consumer system</span>
                    <ContextButtonViaContextConsumer />
                </div>
            </div>
        )
    }
}

export default ContextUserCreate
