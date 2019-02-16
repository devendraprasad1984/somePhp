import React from "react";
import browserHistory from "../../browserHistory";
import {connect} from 'react-redux'
import {fetchStreamById} from '../../redux_actions/googleAuthActions'
import flv from 'flv.js'
import ReactPlayer from 'react-player'


class StreamShow extends React.Component {
    constructor(props) {
        super(props)
        this.videoRef = React.createRef()
    }

    componentDidMount() {
        // console.log(this.props)
        // const id=this.props.match.params.id
        const {id} = this.props.match.params
        this.props.fetchStreamById(id)
        // this.builderPlayer()
        // <YouTube video="mYFaghHyMKc" autoplay="0" rel="0" modest="1" />
    }

    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     // this.builderPlayer()
    //     this.displayVideo()
    // }
    //
    // componentWillUnmount() {
    //     // this.player.destroy()
    // }

    builderPlayer = () => {
        if (this.player || !this.props.foundStreamById) {
            return <div>loading, please wait....</div>
        }
        const {id} = this.props.match.params
        // this.player=flv.createPlayer({
        //     type:'flv'
        //     ,url:'http://localhost:8000/live/'+id+'.flv'
        // })
        this.player = flv.createPlayer({
            type: 'flv'
            , url: this.props.foundStreamById.url
            , cors: true
            , header: {'Access-Control-Allow-Origin': '*'}
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
        this.player.play()
    }

    displayVideo = () => {
        if (!this.props.foundStreamById) {
            return <div>loading, please wait....</div>
        }
        console.log("stream show, trying to play:", this.props.foundStreamById.url)
        return (
            <div style={{height: '400px'}}>
                <ReactPlayer url={this.props.foundStreamById.url} playing={false} controls
                             youtubeConfig={{playerVars: {showinfo: 1}}}
                             width='100%'
                             height='100%'
                />
                {/*<iframe src={this.props.foundStreamById.url+"?enablejsapi=1"} frameBorder="0" allowFullScreen  id="video"></iframe>*/}
                {/*<YoutubePlayer video={this.props.foundStreamById.url} rel="0"/>*/}
            </div>
        )
    }

    render() {
        if (!this.props.foundStreamById) {
            return <div>loading....</div>
        }
        return (
            <div className="ui segments">
                <div className="ui button secondary" onClick={() => {
                    browserHistory.push('/')
                }}><span>Showing...{this.props.foundStreamById.title}</span>
                </div>
                <div className="ui green segment">
                    <span className="ui label header blue">{this.props.foundStreamById.description}</span>
                    {/*<p>{this.props.foundStreamById.description}</p>*/}
                    {/*<div>*/}
                    {/*<video src="" controls style={{width: '100%', height: '400px'}} ref={this.videoRef}></video>*/}
                    {/*</div>*/}
                    {this.displayVideo()}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        // foundStreamById: state.streams[ownProps.match.params.id]
        foundStreamById: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStreamById
})(StreamShow)
