
import React, { Component } from 'react';
// import logo from '../../logo.svg';
import logo from './img1.png';

import './app0starter.css';

export default class App0Starter extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='ui segment'>
                <h1 className='title'>Basic Start page</h1>
                <img className='logo' src={logo} />
            </div>
        );
    }
}