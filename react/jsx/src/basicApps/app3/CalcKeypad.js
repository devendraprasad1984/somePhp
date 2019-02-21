import React from 'react'

export default class CalcKeypad extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6">
                    <div className="container-fluid">
                        <div className="card-body">
                            <div className="row">
                                <button className="btn btn-outline-danger" value="clear-all"
                                        onClick={this.props.handleOnClearAll}>CE
                                </button>
                                <button className="btn btn-outline-danger" value="clear"
                                        onClick={this.props.handleOnClear}>C
                                </button>
                                <button className="btn btn-outline-danger" value="backspace"
                                        onClick={this.props.onDelete}><i className="ui icon calculator"></i></button>
                                <button className="btn btn-outline-danger" value="/"
                                        onClick={this.props.divide}>&divide;</button>
                            </div>
                            <div className="row">
                                <button className="btn btn-outline-primary" value="7" onClick={this.props.handleOnDigit}>7
                                </button>
                                <button className="btn btn-outline-primary" value="8" onClick={this.props.handleOnDigit}>8
                                </button>
                                <button className="btn btn-outline-primary" value="9" onClick={this.props.handleOnDigit}>9
                                </button>
                                <button className="btn btn-outline-danger" value="*"
                                        onClick={this.props.multiply}>&times;</button>
                            </div>
                            <div className="row">
                                <button className="btn btn-outline-primary" value="4" onClick={this.props.handleOnDigit}>4
                                </button>
                                <button className="btn btn-outline-primary" value="5" onClick={this.props.handleOnDigit}>5
                                </button>
                                <button className="btn btn-outline-primary" value="6" onClick={this.props.handleOnDigit}>6
                                </button>
                                <button className="btn btn-outline-danger" value="-"
                                        onClick={this.props.subtract}>&minus;</button>
                            </div>
                            <div className="row">
                                <button className="btn btn-outline-primary" value="1" onClick={this.props.handleOnDigit}>1
                                </button>
                                <button className="btn btn-outline-primary" value="2" onClick={this.props.handleOnDigit}>2
                                </button>
                                <button className="btn btn-outline-primary" value="3" onClick={this.props.handleOnDigit}>3
                                </button>
                                <button className="btn btn-outline-danger" value="+"
                                        onClick={this.props.add}>&#43;</button>
                            </div>
                            <div className="row">
                                <button className="btn btn-outline-danger" value="+-"
                                        onClick={this.props.onToggleSign}>&plusmn;</button>
                                <button className="btn btn-outline-primary" value="0" onClick={this.props.handleOnDigit}>0
                                </button>
                                <button className="btn btn-outline-danger" value="."
                                        onClick={this.props.handleOnDecimalPoint}>.
                                </button>
                                <button className="btn btn-outline-danger" style={{color: '#4CAF50'}} value="="
                                        onClick={this.props.equals}>=
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}