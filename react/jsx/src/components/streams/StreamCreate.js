import React from "react";
import {connect} from 'react-redux'
import {createStream} from '../../redux_actions/googleAuthActions'
import StreamForm from './StreamForm'


class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        console.log("StreamCreate form values", formValues)
        this.props.createStream(formValues)
    }

    render() {
        return (
            <div>
                <span>stream create</span>
                <StreamForm onSubmit={this.onSubmit}></StreamForm>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {
    createStream: createStream
})(StreamCreate)

