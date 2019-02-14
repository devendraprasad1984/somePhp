import React from "react";
import {connect} from 'react-redux'
import {fetchStreams} from '../../redux_actions/googleAuthActions'


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
                <div>
                    <button className="ui button primary">Edit</button>
                    <button className="ui button red">Delete</button>
                </div>
            )
        }
    }

    renderList = () => {
        // if (this.props.showCurrent) {
        //     return Object.values(this.props.streamList).map((stream) => {
        //         if (stream.userId === this.props.currentUserId) { //show only current User stream
        //             this.displayMappedDataOnly(stream)
        //         }
        //     })
        //
        // } else {
            return Object.values(this.props.streamList).map((stream) => {
                return (
                    <div key={stream.id} className="item">
                        <div className="content">
                            <i className="large middle aligned icon camera"></i>
                            <a href={"/streams/" + stream.id}><span>{stream.id} - {stream.title}</span></a>
                            <p className="description">{stream.description}</p>
                        </div>
                        {this.renderAdmin(stream)}
                    </div>
                )
            })
        // }
    }

    render() {
        console.log("Stream List object", this.props, this.props.streamList)
        return (
            <div>
                <div className="ui celled list container-fluid" style={{overflow: 'auto', height: '300px'}}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streamList: state.streams //from reducer
        , currentUserId: state.authFromReducer.userId
    }
}
export default connect(mapStateToProps, {
    fetchStreams //from action to have callback and fillin payload
})(StreamList)


//246