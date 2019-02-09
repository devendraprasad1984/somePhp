import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../redux_actions/posts_actions'

class PostList extends React.Component{
    componentDidMount(){
        console.log("post list component mounted",this.props)
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                <p>blog post list goes here</p>
            </div>
        )
    }
}


const mapStateToProps=()=>{
    return null
}

export default connect(mapStateToProps,{fetchPosts:fetchPosts})(PostList)
