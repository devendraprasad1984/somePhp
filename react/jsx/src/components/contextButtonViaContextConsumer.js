import React from 'react'
import contextsObject from './contextsObject'
import {defaultObject} from "./defaultObject";


class ContextButtonViaContextConsumer extends React.Component {

    render() {
        return (
            <div>
                <span className="ui button primary">
                    <contextsObject.Consumer>
                        {(value)=>defaultObject[value]['name']}
                    </contextsObject.Consumer>
                </span>
            </div>
        )
    }
}

export default ContextButtonViaContextConsumer
