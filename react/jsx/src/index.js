import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './components/serviceWorker';
import HomeRouteMenu from "./components/HomeRouteMenu";
import HomeRouteMenuApps from "./components/HomeRouteMenuApps";
import {BrowserRouter, Link, Route, Router} from "react-router-dom";
import browserHistory from "./browserHistory";
import * as x from "./types";

// import './icon.css';

//if normal named exports are used then while importing {} is used and if default export is used, then that module will have only one export statement
//and like that only with that function name if written  without {} will be used
//and if in case of default no function name written, fileName will be used as that module name

class DefaultApp extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            curUrl:window.location.href
            , path: null
            , component: null
        }
    }

    componentDidMount() {
        console.log("location href",window.location)
        console.log("browser history",browserHistory)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.curUrl!==prevState.curUrl){
            this.setState({curUrl:window.location.href})
        }
    }

    render(){
        return(
            <div>
                <span>Click below Link</span>
                <BrowserRouter>
                    <div>
                        <div className="ui primary pointing menu">
                            <Link to={x.BASE_ROUTE_DIR+"/practice/baseApp"}><span>Practices</span></Link>
                            <Link to={x.BASE_ROUTE_DIR+"/apps/app0"}><span>Apps</span></Link>
                        </div>

                        <Route exact path={x.BASE_ROUTE_DIR} component={HomeRouteMenuApps}></Route>
                        <Route exact path={x.BASE_ROUTE_DIR+"/practice/baseApp"} component={HomeRouteMenu}></Route>
                        <Route exact path={x.BASE_ROUTE_DIR+"/apps/app0"} component={HomeRouteMenuApps}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<DefaultApp />, document.getElementById('root_menu'))


// ReactDOM.render(<div className="ui segment">
//     <span>Practicing React/redux/hooks - class based and functional components along with hooks</span>
//     <HomeRouteMenu/>
// </div>, document.getElementById('root_menu'))
//
// ReactDOM.render(<div className="ui segment">
//     <span>Practicing Some Basic React Apps</span>
//     <HomeRouteMenuApps />
// </div>, document.getElementById('root_menu_apps'))
// //
//
// ReactDOM.render(<div className="ui segment">
//     <span>APP COMPONENT</span><br/>
//     <App/><br/>
//     <span>FUNC COMPONENT</span><br/>
//     <FuncApp/><br/>
// </div>, document.getElementById('root'));
//
// ReactDOM.render(
//         <div className="ui segment">
//             <span>TEST COMPONENT</span><br/>
//             <ComponentsTest></ComponentsTest>
//         </div>
//         , document.getElementById('root_comments'))
//
// ReactDOM.render(
//         <div className="ui segment">
//             <span>SEASONS COMPONENT</span><br/>
//             <SeasonsComponent></SeasonsComponent><br/>
//         </div>
//         , document.getElementById('root_seasons'))
//
// ReactDOM.render(<div className="ui segment"><AppSeachBar /></div>, document.getElementById('root_searchBarAndList'))
//
// ReactDOM.render(<div className="ui segment"><AppVideoComponent /></div>, document.getElementById('root_AppVideoComponent'))
//
// // songs app using redux and react-redux
// ReactDOM.render(<div className="ui segment"><AppSongs /></div>, document.getElementById('root_AppSongs'))
//
// ReactDOM.render(<div className="ui segment"><AppBlogPosts /></div>, document.getElementById('root_AppBlogPosts'))
//
// ReactDOM.render(<div className="ui segment"><AppTwitchTV /></div>, document.getElementById('root_AppTwitchTV'))
//
// ReactDOM.render(<div className="ui segment"><AppContextTest /></div>, document.getElementById('root_context_app'))
//
// ReactDOM.render(<div className="ui segment"><HooksApp /></div>, document.getElementById('root_hooks'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();

// setState is component level state and to app level it can be passed from compoent to component in a parent child relation model
//redux is application wide state management model
//ES2015 - arrow function context are managed automatically and hence this is resolved perfactly fine
//javascript in depth - STUDY - _PROTO_ Object hierarchy STUDY


//hook system - class based component have setStates & life cycle method and functional components dont have these as they are pure simple jsx logic presentaion only that have very less ui logic
//hook system makes functional componentn equivalent to class based compoent by providing setStates and lifecycle methods
//hook makes sharing/reuse logic between components very easily


// https://gist.github.com/primaryobjects/64734b8fe3f54aa637f444c95f061eed
// integrating jquery and other lib in reactjs: https://reactjs.org/docs/integrating-with-other-libraries.html