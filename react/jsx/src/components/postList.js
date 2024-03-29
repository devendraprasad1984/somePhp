import React from 'react'
import {connect} from 'react-redux'
import {fetchPostsAndUsers} from '../redux_actions/app_post_actions'
import PostUserHeader from "./post_userHeader";



class PostList extends React.Component {
    componentDidMount() {
        // console.log("post list component mounted", this.props)
        // this.props.fetchPosts()
        this.props.fetchPostsAndUsers()
    }

    renderList() {
        return this.props.posts.map((post) => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div><PostUserHeader userId={post.userId}/> </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        console.log("posts list from state to props", this.props)
        return (
            <div className="ui relaxed divided list" style={{height:'400px'}}>
                <p>blog post list goes here</p>
                <div style={{height:'300px', overflow:'auto',position:'relative'}}>{this.renderList()}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {
    fetchPostsAndUsers: fetchPostsAndUsers
})(PostList)
