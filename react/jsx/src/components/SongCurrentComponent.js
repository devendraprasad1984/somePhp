import React from 'react'
import {connect} from 'react-redux'
import {createStore} from 'redux'
import {currentSongAction} from "../redux_actions";

class SongCurrentComponent extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={() => {
                    this.props.currentSongAction({title: 'songs1', detail:'song detail 1', duration:'4.05'})
                    console.log("my song from appSongs", this.props.currentSong)
                }}>{this.props.curSong}
                </button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentSong: state.currentSong
    }
}

export default connect(mapStateToProps, {
    currentSongAction
})(SongCurrentComponent)

