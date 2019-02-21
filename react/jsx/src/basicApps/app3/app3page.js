import React, {Component} from 'react';
import './app3Page.css'
import CalcPanel from "./CalcPanel";


export default class App3Page extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="card">
                <CalcPanel/>
            </div>
        );
    }
}
