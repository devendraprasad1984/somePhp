import {combineReducers} from 'redux'
import posts_reducer from './posts_reducer'
import users_reducer from "./users_reducer";

//github.com/reduxjs/redux
//look and study combineReducers code

export default combineReducers({
    posts:posts_reducer
    ,users:users_reducer
})

