import React from 'react'
// import {BrowserRouter, Route} from 'react-router-dom'
import {Route, Router, Switch} from 'react-router-dom'
// import ReactRouterDummyCase from "./ReactRouterDummyCase";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamCurrentUserOnly from './streams/StreamCurrentUserOnly'
import StreamsNav from "./streams/StreamsNav";
import StreamsHeader from './streamsHeader'
import {Provider} from 'react-redux'
// import {createStore} from 'redux'
import {applyMiddleware, compose, createStore} from 'redux' //compose - for redux dev tools and better debugging
import googleAuthReducers from '../redux_reducers/googleAuthReducers'
import thunk from 'redux-thunk'

import browserHistory from '../browserHistory'

class AppTwitchTV extends React.Component {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    store = createStore(googleAuthReducers, this.composeEnhancers(applyMiddleware(thunk)))

    render() {
        return (
            <Provider store={this.store}>
                <div>
                    <span>Video Streaming Dummy app</span>
                    <p>child components will go here</p>
                    {/*dummy case: <ReactRouterDummyCase/>*/}
                    <br/><br/>
                    <hr/>
                    <Router history={browserHistory}>
                        <div>
                            <StreamsNav></StreamsNav>
                            <h1><StreamsHeader/></h1>
                            <Switch>
                                <Route exact path="/practice/streams/" component={StreamList}></Route>
                                <Route path="/practice/streams/new" component={StreamCreate}></Route>
                                <Route path="/practice/streams/edit/:id" component={StreamEdit}></Route>
                                {/*<Route path="/streams/edit/:id/:prop1/:prop2/" component={StreamEdit}></Route> as many runtime params as we want in url and they will be captured in params*/}
                                <Route path="/practice/streams/delete/:id" component={StreamDelete}></Route>
                                <Route path="/practice/streams/show/:id" component={StreamShow}></Route>
                                <Route path="/practice/streams/currentUserOnly" component={StreamCurrentUserOnly}></Route>
                            </Switch>
                        </div>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default AppTwitchTV