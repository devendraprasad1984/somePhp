import React, {Component} from 'react';
import './app2.css'


export default class App2Page extends Component {
    constructor() {
        super();
        this.state = {
            toggle: 0
            , date: 'date will go here'
            ,checked:true
        };
    }

    componentWillMount() {
        this.timer()
    }

    displayDate = () => {
        const date = new Date()
        const dateStr = date.toLocaleDateString() + " - " + date.toLocaleTimeString()
        this.setState({date: dateStr})
    }

    componentWillUnmount() {
        clearInterval(this.timerObj)
    }

    timer = () => {
        this.timerObj = setInterval(this.displayDate, 1000)
    }

    checkStateChange=()=>{
        const sCheckVal=!this.state.checked
        this.setState({checked: sCheckVal})
        console.log("state change for toggle",this.state.checked)
        if(sCheckVal)
            this.componentWillMount()
        else
            this.componentWillUnmount()

    }

    render() {
        return (
            <div className="card">
                <div className="container-fluid card-body">
                    <div>
                        <i className="icon calendar"></i>
                        <span>Start/Stop</span>
                        <label className="switch">
                            <input type="checkbox" onChange={this.checkStateChange} checked={this.state.checked}/>
                            <span className="slider round"></span>
                        </label>
                    </div>

                    <div className='ui header'>
                        <div className="ui label red"><span className="ui tag label blue">{this.state.date}</span></div>
                        <div className="ui label yellow"><span className="ui tag label red">{this.state.date}</span>
                        </div>
                        <div className="ui label olive"><span className="ui tag label yellow">{this.state.date}</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
