import React from 'react'
import {connect} from "react-redux";
import {fetchUser} from "../redux_actions/user_actions";

class Post_UserHeader extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log("user header component mounted", this.props)
        this.props.fetchUser(this.props.userId) //will be mapped to users as object as per redux flow
    }

    render(){
        console.log("user header component, userid",this.props.users)
        if(!this.props.user){
            return null
        }
        return (
            <div>
                <b>post user header goes here</b>
                <div className="header"><span>{this.props.user.name}</span></div>
            </div>
        )
    }
}



const mapStateToProps = (state,ownProps) => {
    //any pre calci to be done here
    return {
        user: state.users.find((user)=>{return user.id===ownProps.userId})
    }
}

export default connect(mapStateToProps, {
    fetchUser: fetchUser
})(Post_UserHeader)