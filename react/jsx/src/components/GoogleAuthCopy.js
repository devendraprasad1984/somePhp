import React from 'react'

class GoogleAuthCopy extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isSignedIn: null}
    }

    componentDidMount() {
        //gapi is window scoped
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '217054210790-pr0kbfv8e68md93p8bddpspabssansa5.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //    checking after init is completed, we chaining  here as init from google would return a promise
                this.authCopy = window.gapi.auth2.getAuthInstance()
                this.setState({isSignedIn: this.authCopy.isSignedIn.get()})
                this.authCopy.isSignedIn.listen(this.onAuthChangeCopy)
            })
        })
        //after gapi loadup in browser, we can fire related methods attached to gapi like so
        // const auth2=gapi.auth2.getAuthInstance() auth2.signIn()
    }

    //arrow function for better context management by js itself - es2015
    onAuthChangeCopy = () => {
        this.setState({isSignedIn: this.authCopy.isSignedIn.get()})
    }

    onSignInCopy=()=>{
        this.authCopy.signIn()
    }
    onSignOutCopy=()=>{
        this.authCopy.signOut()
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <div style={{color: 'purple'}}>we dont know if user has signed in</div>
            )
        } else if (this.state.isSignedIn) {
            return (
            <div>
                <button onClick={this.onSignOutCopy} className="ui red google button">
                  <i className="google icon"></i>
                    SignOut
                </button>
            </div>
        )
        } else {
            return (
                <div>
                    <button onClick={this.onSignInCopy}  className="ui green google button">
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
                <span><div style={{float: 'right'}}>checking google auth copy - component level state:{this.renderAuthButton()}</div></span>
            </div>
        )
    }
}

export default GoogleAuthCopy
