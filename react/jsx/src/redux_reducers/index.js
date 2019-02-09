// import combine reducer function from redux lib

import {combineReducers} from 'redux'

const songsReducer=()=>{
    return[
        {title: 'songs1', detail:'song detail 1', duration:'4.05'}
        ,{title: 'songs2', detail:'song detail 2', duration:'3.15'}
        ,{title: 'songs3', detail:'song detail 3', duration:'2.20'}
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})
