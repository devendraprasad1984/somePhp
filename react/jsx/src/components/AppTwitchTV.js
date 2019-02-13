import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
// import ReactRouterDummyCase from "./ReactRouterDummyCase";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamsNav from "./streams/StreamsNav";
import StreamsHeader from './streamsHeader'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import {createStore,applyMiddleware,compose} from 'redux' //compose - for redux dev tools and better debugging
import googleAuthReducers from '../redux_reducers/googleAuthReducers'
import thunk from 'redux-thunk'

class AppTwitchTV extends React.Component {
    composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
    store=createStore(googleAuthReducers,this.composeEnhancers(applyMiddleware(thunk)))
    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <span>Twitch TV Main app</span>
                    <p>child components will go here</p>
                    {/*dummy case: <ReactRouterDummyCase/>*/}
                    <br/><br/>
                    <hr/>
                    <BrowserRouter>
                        <div>
                            <StreamsNav></StreamsNav>
                            <h1><StreamsHeader/></h1>
                            <Route exact path="/" component={StreamList}></Route>
                            <Route path="/streams/new" component={StreamCreate}></Route>
                            <Route path="/streams/edit" component={StreamEdit}></Route>
                            <Route path="/streams/delete" component={StreamDelete}></Route>
                            <Route path="/streams/show" component={StreamShow}></Route>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        )
    }
}

export default AppTwitchTV
