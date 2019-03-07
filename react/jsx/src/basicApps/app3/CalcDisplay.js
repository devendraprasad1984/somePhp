import React from 'react'
import CalcKeypad from "./CalcKeypad";
import {CalcHeader} from "./calcHeader";
import {DisplayHistory} from "./DisplayHistory";
import CalcEngine from './CalcEngine'
import CalcDisplayTop from "./CalcDisplayTop";

const calcEngine = new CalcEngine()

export default class CalcDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            curClickVal: ''
            , history: []
            , expression: ''
        }
    }

    handleOnDigit = (e) => {
        // console.log("keyboard calc click",e.target.value)
        calcEngine.input(e.target.value)
        this.updateState()
    }

    add = () => {
        calcEngine.add()
        this.updateState()
    }
    subtract = () => {
        calcEngine.subtract()
        this.updateState()
    }
    multiply = () => {
        calcEngine.multiply()
        this.updateState()
    }
    divide = () => {
        calcEngine.divide()
        this.updateState()
    }
    equals = () => {
        calcEngine.equals()
        this.updateState()
    }

    updateState = () => {
        this.setState({
            curClickVal: calcEngine.getValue()
            , history: calcEngine.getHistory()
            , expression: calcEngine.getExpression()
        })
        console.log(this.state)
    }

    handleOnDecimalPoint = () => {
        calcEngine.inputDecimal();
        this.updateState()
    }

    showHistory = () => {
        console.log(this.state)
    }

    handleOnClear = () => {
        calcEngine.clear();
        this.updateState()
    }


    handleOnClearAll = () => {
        calcEngine.clearAll();
        this.updateState()
    }


    handleOnClearHistory = () => {
        calcEngine.clearHistory();
        this.updateState()
    }


    render() {
        return (
            <div>
                <CalcHeader title="Calci"/>
                <div className="row">
                    <div className="col-lg-6">
                        <CalcDisplayTop curVal={this.state.curClickVal}/>
                        <CalcKeypad
                            handleOnDigit={this.handleOnDigit}
                            add={this.add}
                            subtract={this.subtract}
                            divide={this.divide}
                            multiply={this.multiply}
                            handleOnDecimalPoint={this.handleOnDecimalPoint}
                            equals={this.equals}
                            handleOnClear={this.handleOnClear}
                            handleOnClearAll={this.handleOnClearAll}
                        />
                    </div>

                    <div className="col-lg-6">
                        <span>history operations</span>
                        <div>
                            <DisplayHistory history={this.state.history}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}