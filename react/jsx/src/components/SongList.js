import React from 'react'
import {connect} from 'react-redux'
import {selectSongAction} from "../redux_actions";

class SongList extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    componentDidMount() {
        console.log("song lis just mounted")
    }

    renderList(){
        return this.props.songs.map((song)=>{
            return (
                <div className="item" key={song.title} style={{marginBottom:'10px'}}>
                    <span>{song.title} - {song.detail}</span>
                    <span className="right floated content">
                        <button className="ui button primary" onClick={
                            ()=>{
                                this.props.selectSongAction(song)
                                this.props.callBackFunc(song)
                                // console.log("my song from song list is", this.props.selectSong)
                            }
                        }>
                            Select
                        </button>
                    </span>
                </div>
            )
        })
    }

    render(){
        // this.props = {songs:state.songs} //this is how react-redux - see mapStateToProps & connect - helper function from lib
        // console.log("this.props from react-redux mapper",this.props, this.props.songs, this.props.selectSong)
        return(
            <div>
                <p>songs list goes here</p>
                <div className="ui divided list">{this.renderList()}</div>
            </div>
        )
    }    
}

//by convension this is the name,it will run with every state change
const mapStateToProps=(state)=>{
    // console.log("state from mapStateToProps",state)
    // return state
    return {
        songs:state.songs
        ,selectedSong: state.selectedSong
    }
}

//passing actions from redux_reducers as mapper/redux_actions to  connect and then pass to component as prop
//and then component will use actions to update state into the redux store
export default connect(mapStateToProps,{
    selectSongAction
})(SongList)
//this way is like closure, function that invokes another function