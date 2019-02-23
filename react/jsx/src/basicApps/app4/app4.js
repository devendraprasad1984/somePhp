import React, {Component} from 'react';
import './app3Page.css'
import CalcDisplay from "./CalcDisplay";


export default class App3Page extends Component {
    render() {
        return (
            <div className="ui segment">
                <div className="">
                    <CalcDisplay/>
                </div>
            </div>
        );
    }
}
