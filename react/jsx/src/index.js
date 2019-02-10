import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import './icon.css';

import App from './components/App';
import FuncApp from './components/FuncApp'
import ComponentsTest from './components/components-test'
import {SeasonsComponent, SeasonsDisplayComponent} from './components/seasons'
// import {SearchBar, SearchDisplayList} from './searchBarAndList'
import * as serviceWorker from './components/serviceWorker';
import {AppSeachBar} from "./components/AppSearchBar";
import {AppVideoComponent} from "./components/appVideoComponent";
import {AppSongs} from "./components/AppSongs";
import {AppBlogPosts} from "./components/AppBlogPosts";
import AppTwitchTV from "./components/AppTwitchTV";

//if normal named exports are used then while importing {} is used and if default export is used, then that module will have only one export statement
//and like that only with that function name if written  without {} will be used
//and if in case of default no function name written, fileName will be used as that module name


ReactDOM.render(<div className="ui segment">
    <span>APP COMPONENT</span><br/>
    <App/><br/>
    <span>FUNC COMPONENT</span><br/>
    <FuncApp/><br/>
</div>, document.getElementById('root'));

ReactDOM.render(
    <div className="ui segment">
        <span>TEST COMPONENT</span><br/>
        <ComponentsTest></ComponentsTest>
    </div>
    , document.getElementById('root_comments'))

ReactDOM.render(
    <div className="ui segment">
        <span>SEASONS COMPONENT</span><br/>
        <SeasonsComponent></SeasonsComponent><br/>
    </div>
    , document.getElementById('root_seasons'))

ReactDOM.render(<div className="ui segment"><AppSeachBar /></div>, document.getElementById('root_searchBarAndList'))

ReactDOM.render(<div className="ui segment"><AppVideoComponent /></div>, document.getElementById('root_AppVideoComponent'))

// songs app using redux and react-redux
ReactDOM.render(<div className="ui segment"><AppSongs /></div>, document.getElementById('root_AppSongs'))

ReactDOM.render(<div className="ui segment"><AppBlogPosts /></div>, document.getElementById('root_AppBlogPosts'))

ReactDOM.render(<div className="ui segment"><AppTwitchTV /></div>, document.getElementById('root_AppTwitchTV'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();



//187 - react router