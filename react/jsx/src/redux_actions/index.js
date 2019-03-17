// actions for my songs app
// default vs named export, this is named export
export const selectSongAction=(song)=>{
    // return an action
    return{
        type:'SONG_SELECTED'
        ,payload: song
    }
}

export const currentSongAction=(curSong)=>{
    // return an action
    return{
        type:'CURRENT_SONG'
        ,payload:curSong
    }
}
