import React from 'react'
import {connect} from 'react-redux'
import googleAuthActions, {signIn,signOut} from '../redux_actions/googleAuthActions'

class GoogleAuth extends React.Component {
    componentDidMount() {
        //gapi is window scoped
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '217054210790-pr0kbfv8e68md93p8bddpspabssansa5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //    checking after init is completed, we chaining  here as init from google would return a promise
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get()) //get is in the __proto__ object
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
        //after gapi loadup in browser, we can fire related methods attached to gapi like so
        // const auth2=gapi.auth2.getAuthInstance() auth2.signIn()
    }

    //arrow function for better context management by js itself - es2015
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
    }

    onSignInClick=()=>{
        this.auth.signIn()
    }
    onSignOutClick=()=>{
        this.auth.signOut()
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <div style={{color: 'purple'}}>we dont know if user has signed in</div>
            )
        } else if (this.props.isSignedIn) {
            return (
            <div>
                <button onClick={this.onSignOutClick} className="ui red google button">
                  <i className="google icon"></i>
                    SignOut
                </button>
            </div>
        )
        } else {
            return (
                <div>
                    <button onClick={this.onSignInClick} className="ui green google button">
                        <i className="google icon"></i>
                        SignIn
                    </button>
                </div>
        )
        }
    }

    render() {
        return (
            <div>
                <span><div style={{float: 'right'}}>checking google auth - redux state app:{this.renderAuthButton()}</div></span>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        isSignedIn:state.authFromReducer.isSignedIn
    }
}


export default connect(mapStateToProps,{
    signIn:signIn
    ,signOut: signOut
})(GoogleAuth)
