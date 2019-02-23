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

class HomeRouteMenu extends React.Component {
    state={name:'0'}
    styleSet1='active border blue'

    activeMarker=(name)=>{
        this.setState({name:name})
        console.log("current menu value",name," compare: ",this.state.name)
    }

    navigationBar = () => {
        return (
            <div className="ui primary pointing menu">
                <Link to="/practice/baseApp"><p onClick={()=>this.activeMarker('0')} className={`item ${this.state.name==='0'?this.styleSet1:''}`}>Home</p></Link>
                <Link to="/practice/ComponentsTest"><p onClick={()=>this.activeMarker('1')} className= {`item ${this.state.name==='1'?this.styleSet1:''}`}>Test</p></Link>
                <Link to="/practice/SeasonsComponent"><p onClick={()=>this.activeMarker('2')} className= {`item ${this.state.name==='2'?this.styleSet1:''}`}>Seasons</p></Link>
                <Link to="/practice/AppSeachBar"><p onClick={()=>this.activeMarker('3')} className= {`item ${this.state.name==='3'?this.styleSet1:''}`}>Search Bar</p></Link>
                <Link to="/practice/AppVideoComponent"><p onClick={()=>this.activeMarker('4')} className= {`item ${this.state.name==='4'?this.styleSet1:''}`}>Video App</p></Link>
                <Link to="/practice/AppSongs"><p onClick={()=>this.activeMarker('5')} className= {`item ${this.state.name==='5'?this.styleSet1:''}`}>Songs App</p></Link>
                <Link to="/practice/AppBlogPosts"><p onClick={()=>this.activeMarker('6')} className= {`item ${this.state.name==='6'?this.styleSet1:''}`}>Blogs</p></Link>
                <Link to="/practice/AppTwitchTV"><p onClick={()=>this.activeMarker('7')} className= {`item ${this.state.name==='7'?this.styleSet1:''}`}>Streaming</p></Link>
                <Link to="/practice/AppContextTest"><p onClick={()=>this.activeMarker('8')} className= {`item ${this.state.name==='8'?this.styleSet1:''}`}>Contexts</p></Link>
                <Link to="/practice/HooksApp"><p onClick={()=>this.activeMarker('9')} className= {`item ${this.state.name==='9'?this.styleSet1:''}`}>Hooks & Reusable functions</p></Link>
            </div>
        )
    }

    render() {
        return (
            <div className="ui segment">
                <BrowserRouter>
                    <div>
                        {this.navigationBar()}
                        <Route exact path="/practice/baseApp" component={App}></Route>
                        <Route exact path="/practice/ComponentsTest" component={ComponentsTest}></Route>
                        <Route exact path="/practice/AppSeachBar" component={AppSeachBar}></Route>
                        <Route exact path="/practice/AppVideoComponent" component={AppVideoComponent}></Route>
                        <Route exact path="/practice/AppSongs" component={AppSongs}></Route>
                        <Route exact path="/practice/AppBlogPosts" component={AppBlogPosts}></Route>
                        <Route exact path="/practice/AppTwitchTV" component={AppTwitchTV}></Route>
                        <Route exact path="/practice/AppContextTest" component={AppContextTest}></Route>
                        <Route exact path="/practice/HooksApp" component={HooksApp}></Route>
                        <Route exact path="/practice/SeasonsComponent" component={SeasonsComponent}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default HomeRouteMenu