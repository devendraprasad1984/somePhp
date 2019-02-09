import React from 'react'
import {createStore} from 'redux'
import PostList from "./postList";
import {Provider} from 'react-redux'
import postIndexReducers from '../redux_reducers/postIndexReducers'
//connect the thunk middleware
import thunk from 'redux-thunk'
import {Middleware} from "redux";

//github.com/reduxjs/redux

// axios('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

//hook middleware to store
const store=createStore(postIndexReducers,applyMiddleware(thunk))

export const AppBlogPosts = (props) => {
    return (
        <Provider store={store}>
            <div>
                <span>my blog posts app goes here</span>
                <PostList/>
            </div>
        </Provider>
    )
}