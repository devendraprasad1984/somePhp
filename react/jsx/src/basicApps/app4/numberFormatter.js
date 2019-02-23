import React, { Component } from 'react';

export default class NumberFormatter extends Component {
    render() {
        const value = Number(this.props.value);
        const text = value.toLocaleString(undefined, {style: 'currency', currency: 'EUR'});

        return (
            <p className="badge badge-info active">{text}</p>
        )
    }
}