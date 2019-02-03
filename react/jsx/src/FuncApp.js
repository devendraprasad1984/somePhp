import React from "react";

//function based component -  commonjs types
// const FuncApp=function () {
//     return <div>this is from function based component</div>
// }


function getButtonText() {
    return "click Me new Button"
}

//function based component ES2015 types
const FuncApp = () => {
    const buttonText = 'clickMe!'
    const buttonText_new = {text: 'why click Me!'}
    const myButtonStyle = {
        backgroundColor: 'black',
        color: 'white'
    }
    // return <div>this is from function based component</div>
    return (
        <div>
            <span>this is from function based component</span><br/>
            <label htmlFor="name">enter name:</label>
            <input type="text" id="name"/><br/>
            <button style={myButtonStyle}>{buttonText_new.text} - {buttonText} - {getButtonText()}</button>
        </div>

    )
}


export default FuncApp
