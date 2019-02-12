import React from 'react'
import {connect} from "react-redux";
// import {fetchUserMemoized} from "../redux_actions/app_post_actions";

class PostUserHeader extends React.Component {

    // constructor(props) {
    //     super(props)
    // }

    // //memoise solution needs it and the second sol wont need it
    // componentDidMount() {
    //     //issue:if this component is called 100 times from postList, these calls will be made 100 times, although unnecessary, need to fix it
    //     //can be fixed by maintaining state and not changing it with everytime userId is same
    //     //1. crux is tha redux state management will then not going to make a separate network call as per our actions and reducers defined
    //     //or 2 (short and quick): memoizing functions in actions - lodash library
    //     // console.log("user header component mounted", this.props)
    //     this.props.fetchUser(this.props.userId) //will be mapped to users as object as per redux flow
    // }

    render() {
        // console.log("user header component, userid", this.props.users)
        if (!this.props.user) {
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
//

const mapStateToProps = (state, ownProps) => {
    //any pre calci to be done here
    return {
        user: state.users.find((user) => {
            return user.id === ownProps.userId
        })
    }
}

// export default connect(mapStateToProps, {
//     fetchUser: fetchUserMemoized
// })(PostUserHeader)

export default connect(mapStateToProps)(PostUserHeader)
