// import combine reducer function from redux lib

import {combineReducers} from 'redux'

const songsReducer=()=>{
    return[
        {title: 'songs1', detail:'Humne Tumko Dekha', duration:'4.05'}
        ,{title: 'songs2', detail:'Aap Jaisa koi meri Zindagi me aaye', duration:'3.15'}
        ,{title: 'songs3', detail:'yeh deewana pan', duration:'2.20'}
        ,{title: 'songs4', detail:'yeh hai jalwa', duration:'1.15'}
        ,{title: 'songs5', detail:'baby doll main sone di', duration:'4.40'}
    ]
}

const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        console.log("selected song is ",action.payload)
        return action.payload
    }
    return selectedSong
}

const currentSongReducer=(curx={},action)=>{
    if(action.type==='CURRENT_SONG'){
        console.log("CURRENT_SONG is ",curx,action)
        return action.payload
    }
    return curx
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
    currentSong: currentSongReducer
})
