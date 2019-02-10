import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ReactRouterDummyCase from "./ReactRouterDummyCase";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamsNav from "./streams/StreamsNav";


class AppTwitchTV extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <span>Twitch TV Main app</span>
                <p>child components will go here</p>
                dummy case: <ReactRouterDummyCase />
                <br/><br/>
                <hr/>
                <span>Video Stream App Components and Routes</span>
                <BrowserRouter>
                    <div>
                        <StreamsNav></StreamsNav>
                        <Route exact path="/" component={StreamList}></Route>
                        <Route path="/streams/new" component={StreamCreate}></Route>
                        <Route path="/streams/edit" component={StreamEdit}></Route>
                        <Route path="/streams/delete" component={StreamDelete}></Route>
                        <Route path="/streams/show" component={StreamShow}></Route>
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default AppTwitchTV

//vid199