import React from "react";
import {connect} from 'react-redux'
import {fetchStreams} from '../../redux_actions/googleAuthActions'
import {Link} from 'react-router-dom'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams()
        console.log("StreamList Object and props", this.props)
    }

    renderAdmin = (stream) => {
        if (stream.userId !== this.props.currentUserId) {
            return null
        } else {
            return (
                <div className="right floated content">
                    <Link to={"/streams/edit/" + stream.id} className="ui button primary">Edit</Link>
                    <Link to={"/streams/delete/" + stream.id}  className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    displayMappedDataOnly = (stream) => {
        return (
            <div key={stream.id} className="item">
                {this.renderAdmin(stream)}
                <div className="content">
                    <i className="large middle aligned icon camera"></i>
                    <a href={"/streams/show/" + stream.id}><span>{stream.id} - {stream.title}</span></a>
                    <p className="description">{stream.description}</p>
                </div>
            </div>
        )
    }

    renderList = () => {
        if (this.props.showCurrent === "true") {
            console.log("props:", this.props)
            return Object.values(this.props.streamList).map((stream) => {
                if (stream.userId === this.props.currentUserId) { //show only current User stream
                    this.displayMappedDataOnly(stream)
                }
            })
        } else {
            console.log("props: NOT")
            return Object.values(this.props.streamList).map((stream) => {
                return (
                    this.displayMappedDataOnly(stream)
                )
            })
        }
    }

    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <div>
                    <Link to="/streams/new" className="ui button green right floated">Create Stream</Link>
                </div>
            )
        }else{
            return null
        }
    }

    render() {
        console.log("Stream List object", this.props, this.props.streamList)
        return (
            <div className="item">
                <div className="ui celled list container-fluid" style={{overflow: 'auto', height: '300px'}}>
                    {this.renderList(this.props.streamList)}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streamList: state.streams //from reducer
        , currentUserId: state.authFromReducer.userId
        , isSignedIn: state.authFromReducer.isSignedIn
    }
}
export default connect(mapStateToProps, {
    fetchStreams //from action to have callback and fill in payload
})(StreamList)

