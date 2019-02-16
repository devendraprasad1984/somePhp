import React from "react";
import ModalWindow from '../modal'
import browserHistory from "../../browserHistory";
import {connect} from 'react-redux'
import {deleteStreamById, fetchStreamById} from '../../redux_actions/googleAuthActions'

class StreamDelete extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log("Stream Delete Props and Route Props", this.props)
        this.props.fetchStreamById(this.props.match.params.id)
    }

    onDeleteSubmit = () => {
        console.log("delete stream props", this.props)
        this.props.deleteStreamById(this.props.match.params.id)
    }


    renderAction = () => {
        const id = this.props.match.params.id
        return (
            <React.Fragment>
                <button className="ui button negative" onClick={this.onDeleteSubmit}>Delete</button>
                <button onClick={() => {
                    browserHistory.push('/')
                }} className="ui button">Cancel
                </button>
            </React.Fragment>
        )
    }


    render() {
        if (!this.props.stream) {
            return <div><span>Loading, please wait...</span></div>
        } else {
            return (
                <div>
                    <span>stream delete</span>
                    <ModalWindow
                        title={"Delete Confirmation for (" + this.props.stream.title + ")"}
                        description="Are you sure to delete this?"
                        action={this.renderAction()}
                        onDismiss={() => {
                            browserHistory.push('/')
                        }}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {deleteStreamById, fetchStreamById})(StreamDelete)


