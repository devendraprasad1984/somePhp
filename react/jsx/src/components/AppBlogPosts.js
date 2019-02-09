import React from 'react'
import {createStore} from 'redux'
import PostList from "./postList";
import {Provider} from 'react-redux'
import posts_reducers from '../redux_reducers/posts_reducers'


// axios('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

export const AppBlogPosts = (props) => {
    return (
        <Provider store={createStore(posts_reducers)}>
            <div>
                <span>my blog posts app goes here</span>
                <PostList/>
            </div>
        </Provider>
    )
}