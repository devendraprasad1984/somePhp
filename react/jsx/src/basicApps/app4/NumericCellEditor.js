import React, { Component } from 'react';

export default class NumericCellEditor extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    //attach event for each current text box in aggrid cell
    componentDidMount() {
        this.textInput.current.addEventListener('keydown', this.onKeyDown);
    }


    //aggrid special method once after GUI is attached to DOM and we can use the reference to the input element to focus it:
    afterGuiAttached() {
        if (this.textInput) this.textInput.current.focus();
    }

    render() {
        return (
            <input onKeyPress={this.onKeyPress} ref={this.textInput} defaultValue={this.props.value}/>
        );
    }

    getValue() {
        return this.textInput.current.value;
    };

    onKeyDown(e) {
        if (e.keyCode === 39 || e.keyCode === 37) {
            e.stopPropagation();
        }
    }


    onKeyPress(e) {
        if (!isNumeric(e.nativeEvent)) {
            e.preventDefault();
        }

        function isNumeric(e) {
            return /\d/.test(e.key);
        }
    }

}