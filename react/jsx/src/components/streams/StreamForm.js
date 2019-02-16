import React from "react";
import {Field, reduxForm} from 'redux-form'
import {Link} from "react-router-dom";

class StreamForm extends React.Component {
    renderInput(formProps) {
        return (
            <div><input type="text" {...formProps.input} /></div>
        )
        //this syntax about will take every key:value pair from object above and assign back to input element
    }

    renderInput_short = ({input, label, meta}) => {
        const errClassName = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={errClassName}>
                <label className="strong" htmlFor={input.name}>{label}</label>
                <input type="text" {...input} autoComplete="off" placeholder={meta.error}/>
                {this.renderError(meta)}
                {/*<div className="red">{meta.error}</div>*/}
                {/*desctructure syntax of es2015*/}
            </div>
        )
    }

    renderError(meta) {
        if (meta.error && meta.touched) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }

    onSubmit = (formValues) => {
        console.log("StreamForm submit callback with props from parent compoents create and edit", formValues)
        this.props.onSubmit(formValues)
    }

    render() {
        // console.log("form props from streams create", this.props)
        return (
            <div>
                {/*<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> error is important in order for semantic ui to render any tag that has error tag/class */}
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput_short} label="enter title"></Field>
                    <Field name="description" component={this.renderInput_short} label="enter desc"></Field>
                    <Field name="url" component={this.renderInput_short} label="enter youtube url"></Field>
                    <button className="ui button primary">Submit</button>
                    <Link to="/" className="ui button secondary">Cancel</Link>
                </form>
            </div>
        )
    }
}

const validateUIForm = (formValues) => {
    const errors = {}
    if (!formValues.title) {
        errors.title = "you must enter a title"
    }
    if (!formValues.description) {
        errors.description = "you must enter a description"
    }
    if (!formValues.url) {
        errors.url = "you must enter a valid youtube url"
    }
    return errors
}

export default reduxForm({
    form: 'StreamForm'
    , validate: validateUIForm
})(StreamForm)
