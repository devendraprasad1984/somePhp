// actions for my songs app
// default vs named export, this is named export
export const selectSong=(song)=>{
    // return an action
    return{
        type:'SONG_SELECTED'
        ,payload: song
    }
}

