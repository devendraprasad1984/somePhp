import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class App1Page extends Component {
    constructor() {
        super();
        this.state = {
            title: 'React Counter'
        };
    }

    render() {
        return (
            <div className='ui segment'>
                <h1 className='title'>React Counter App</h1>
                <Clicker/>
            </div>
        );
    }
}

class Clicker extends Component {
    constructor(props) {
        super();

        this.state = {
            count: props.count
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    incrementCount() {
        this.setState((prevState) => ({count: prevState.count + 1}));
    }

    decrementCount() {
        this.setState((prevState) => ({count: prevState.count - 1}));
    }

    resetCount() {
        this.setState(() => ({count: 0}));
    }

    render() {
        return (
            <div className="container">
                <span className="ui label basic red"><h1>{this.state.count}</h1></span>
                <div>
                    <button className="ui button basic green icon plus" onClick={this.incrementCount}><i
                        className="ui icon plus"></i></button>
                    <button className="ui button basic blue" onClick={this.resetCount}><i
                        className="ui icon paint brush"></i></button>
                    <button className="ui button basic red" onClick={this.decrementCount}><i
                        className="ui icon minus"></i></button>
                </div>
            </div>
        );
    }
}

Clicker.defaultProps = {
    count: 0
};

Clicker.propTypes = {
    count: PropTypes.number
};
