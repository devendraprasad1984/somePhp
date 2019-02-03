import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './icon.css';

import App from './App';
import FuncApp from './FuncApp'
import ComponentsTest from './components-test'
import {SeasonsComponent,SeasonsDisplayComponent} from './seasons'
import {SearchBar,SearchDisplayList} from './searchBarAndList'
import * as serviceWorker from './serviceWorker';

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
    ,document.getElementById('root_comments'))

ReactDOM.render(
    <div>
        <span>SEASONS COMPONENT</span><br/>
        <SeasonsComponent></SeasonsComponent><br/>
    </div>
    ,document.getElementById('root_seasons'))


ReactDOM.render(
    <div className="ui container">
        <span>Search Bar Component</span><br/>
        <SearchBar></SearchBar><br/>
    </div>
    ,document.getElementById('root_searchBarAndList'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();

