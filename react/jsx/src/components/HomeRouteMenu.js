import React from 'react'
import {Link, BrowserRouter,Route} from 'react-router-dom'
import App from './App';
import ComponentsTest from './components-test'
import {SeasonsComponent} from './seasons'
import {AppSeachBar} from "./AppSearchBar";
import {AppVideoComponent} from "./appVideoComponent";
import {AppSongs} from "./AppSongs";
import {AppBlogPosts} from "./AppBlogPosts";
import AppTwitchTV from "./AppTwitchTV";
import AppContextTest from "./app_context_test";
import HooksApp from "./App_Hooks";
// import {} from 'semanti-ui-react'
// https://stackoverflow.com/questions/51036731/menu-item-active-state-not-working-with-navlink-semantic-ui-react

const navigationBar = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/"><p className="item active">Home</p></Link>
            <Link to="/ComponentsTest"><p className="item">Test</p></Link>
            <Link to="/SeasonsComponent"><p className="item">Seasons</p></Link>
            <Link to="/AppSeachBar"><p className="item">Search Bar</p></Link>
            <Link to="/AppVideoComponent"><p className="item">Video App</p></Link>
            <Link to="/AppSongs"><p className="item">Songs App</p></Link>
            <Link to="/AppBlogPosts"><p className="item">Blogs</p></Link>
            <Link to="/AppTwitchTV"><p className="item">Streaming</p></Link>
            <Link to="/AppContextTest"><p className="item">Contexts</p></Link>
            <Link to="/HooksApp"><p className="item">Hooks & Reusable functions</p></Link>
        </div>
    )
}

class HomeRouteMenu extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        {navigationBar()}
                        <Route exact path="/" component={App}></Route>
                        <Route exact path="/ComponentsTest" component={ComponentsTest}></Route>
                        <Route exact path="/AppSeachBar" component={AppSeachBar}></Route>
                        <Route exact path="/AppVideoComponent" component={AppVideoComponent}></Route>
                        <Route exact path="/AppSongs" component={AppSongs}></Route>
                        <Route exact path="/AppBlogPosts" component={AppBlogPosts}></Route>
                        <Route exact path="/AppTwitchTV" component={AppTwitchTV}></Route>
                        <Route exact path="/AppContextTest" component={AppContextTest}></Route>
                        <Route exact path="/HooksApp" component={HooksApp}></Route>
                        <Route exact path="/SeasonsComponent" component={SeasonsComponent}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default HomeRouteMenu
