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

ReactDOM.render(<div>
    <span>APP COMPONENT</span><br/>
    <App/><br/>
    <span>FUNC COMPONENT</span><br/>
    <FuncApp/><br/>
</div>, document.getElementById('root'));

ReactDOM.render(
    <div>
        <span>TEST COMPONENT</span><br/>
        <ComponentsTest></ComponentsTest>
    </div>
    , document.getElementById('root_comments'))

ReactDOM.render(
    <div>
        <span>SEASONS COMPONENT</span><br/>
        <SeasonsComponent></SeasonsComponent><br/>
    </div>
    , document.getElementById('root_seasons'))

ReactDOM.render(<div><AppSeachBar /></div>, document.getElementById('root_searchBarAndList'))

ReactDOM.render(<div><AppVideoComponent /></div>, document.getElementById('root_AppVideoComponent'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();

