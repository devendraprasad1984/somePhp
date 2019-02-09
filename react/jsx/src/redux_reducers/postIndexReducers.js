import {combineReducers} from 'redux'
import posts_reducer from './posts_reducer'

//github.com/reduxjs/redux
//look and study combineReducers code

export default combineReducers({
    posts:posts_reducer
})

//start from video 169