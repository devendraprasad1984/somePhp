import React from 'react'

export default class CalcKeypad extends React.Component{
    handleOnDigit=(e)=>{
        console.log("keyboard calc click",e.target.value)
    }
    render(){
        return(
            <div className="card container">
                <div className="card-body">
                    <div className="row">
                        <button className="btn btn-outline-danger" value="clear-all" onClick={this.props.onClearAll}>CE</button>
                        <button className="btn btn-outline-danger" value="clear" onClick={this.props.onClear}>C</button>
                        <button className="btn btn-outline-danger" value="backspace" onClick={this.props.onDelete}><i className="ui icon calculator"></i></button>
                        <button className="btn btn-outline-danger" value="/" onClick={this.props.onDivide}>&divide;</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-outline-primary" value="7" onClick={this.handleOnDigit}>7</button>
                        <button className="btn btn-outline-primary" value="8" onClick={this.handleOnDigit}>8</button>
                        <button className="btn btn-outline-primary" value="9" onClick={this.handleOnDigit}>9</button>
                        <button className="btn btn-outline-danger" value="*" onClick={this.props.onMultiply}>&times;</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-outline-primary" value="4" onClick={this.handleOnDigit}>4</button>
                        <button className="btn btn-outline-primary" value="5" onClick={this.handleOnDigit}>5</button>
                        <button className="btn btn-outline-primary" value="6" onClick={this.handleOnDigit}>6</button>
                        <button className="btn btn-outline-danger" value="-" onClick={this.props.onSubtract}>&minus;</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-outline-primary" value="1" onClick={this.handleOnDigit}>1</button>
                        <button className="btn btn-outline-primary" value="2" onClick={this.handleOnDigit}>2</button>
                        <button className="btn btn-outline-primary" value="3" onClick={this.handleOnDigit}>3</button>
                        <button className="btn btn-outline-danger" value="+" onClick={this.props.onAdd}>&#43;</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-outline-danger" value="+-" onClick={this.props.onToggleSign}>&plusmn;</button>
                        <button className="btn btn-outline-primary" value="0" onClick={this.handleOnDigit}>0</button>
                        <button className="btn btn-outline-danger" value="." onClick={this.props.onDecimalPoint}>.</button>
                        <button className="btn btn-outline-danger" style={{color: '#4CAF50'}} value="=" onClick={this.props.onEquals}>=</button>
                    </div>
                </div>
            </div>
        )
    }

}