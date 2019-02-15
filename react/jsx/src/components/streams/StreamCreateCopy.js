import React from "react";
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {
    createStream,
    signIn,
    signOut,
    deleteStreamById,
    editStreamById,
    fetchStreamById,
    fetchStreams
} from '../../redux_actions/googleAuthActions'

class StreamCreateCopy extends React.Component {
    renderInput(formProps) {
        //redux-form is wiring these html form tags to formProps and events inside of it automatically following redux life cycles
        // console.log("renderInput streams create",formProps)
        /*<div><input type="text" onChange={formProps.input.onChange} value={formProps.input.value}/></div>*/
        return (
            <div><input type="text" {...formProps.input} /></div>
        )
        //this syntax about will take every key:value pair from object above and assign back to input element
    }

    renderInput_short = ({input, label, meta}) => {
        //redux - meta is automatically wired up from validation function down there
        //error handler object down there has exactly similar name as that input/elements inside form that we want to have validation run on
        // console.log("see meta object values inside browser console to have above validated",meta)
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

    //renderError({error, touched}) = destructure can be used as well
    renderError(meta) {
        if (meta.error && meta.touched) {
            return (
                <div className="ui error message">
                    <div className="header">{meta.error}</div>
                </div>
            )
        }
    }

    // onSubmit(event){
    //     event.preventDefault()
    // }
    onSubmit = (formValues) => {
        console.log("StreamCreateCopy form values", formValues)
        this.props.createStream(formValues)
    }

    render() {
        // console.log("form props from streams create", this.props)
        return (
            <div>
                <span>stream create</span>
                {/*<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error"> error is important in order for semantic ui to render any tag that has error tag/class */}
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                    <Field name="title" component={this.renderInput_short} label="enter title"></Field>
                    <Field name="description" component={this.renderInput_short} label="enter desc"></Field>
                    <button className="ui button primary">Submit</button>
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
    return errors
}


// export default reduxForm({
//     form: 'StreamCreateCopyForm'
//     ,validate:validateUIForm
// })(StreamCreateCopy)

// export default connect()(reduxForm({
//         form: 'StreamCreateCopyForm'
//         , validate: validateUIForm
//     })(StreamCreateCopy)
// )

const formWrapped = reduxForm({
    form: 'StreamCreateCopyForm'
    , validate: validateUIForm
})(StreamCreateCopy)

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {
    createStream: createStream
})(formWrapped)


// export default StreamCreateCopy


