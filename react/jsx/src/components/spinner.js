import React from 'react'

const Spinner=(props)=>{
    return (
        <div>
            <div className="ui active dimmer">
                <div className="ui text loader">{props.loadingText}</div>
            </div>
            <p></p>
        </div>
    )
}

Spinner.defaultProps={
    loadingText:'loading...'
}

export default Spinner