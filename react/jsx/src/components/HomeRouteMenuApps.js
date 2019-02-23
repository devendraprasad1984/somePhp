import React from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import App0Starter from "../basicApps/app0/app0starter";
import App1Page from "../basicApps/app1/app1";
import App2Page from "../basicApps/app2/app2";
import browserHistory from "../browserHistory";
import App3Page from "../basicApps/app3/app3page";
import App4ReactAgGrid from "../basicApps/app4/app4";
// import {} from 'semanti-ui-react'
// https://stackoverflow.com/questions/51036731/menu-item-active-state-not-working-with-navlink-semantic-ui-react

class HomeRouteMenuApps extends React.Component {
    state = {name: '0'}
    styleSet1='active border green'

    activeMarker = (name) => {
        this.setState({name: name})
        console.log("current menu value", name, " compare: ", this.state.name)
    }

    navigationBar = () => {
        return (
            <div className="ui primary pointing menu">
                <Link to="/apps/app0"><p onClick={() => this.activeMarker('0')}
                                         className={`item ${this.state.name === '0' ? this.styleSet1 : ''}`}>Base</p>
                </Link>
                <Link to="/apps/app1"><p onClick={() => this.activeMarker('1')}
                                         className={`item ${this.state.name === '1' ? this.styleSet1: ''}`}>Counter</p>
                </Link>
                <Link to="/apps/app2"><p onClick={() => this.activeMarker('2')}
                                         className={`item ${this.state.name === '2' ? this.styleSet1: ''}`}>Timer</p>
                </Link>
                <Link to="/apps/app3"><p onClick={() => this.activeMarker('3')}
                                         className={`item ${this.state.name === '3' ? this.styleSet1: ''}`}>Calci</p>
                </Link>
                <Link to="/apps/app4"><p onClick={() => this.activeMarker('4')}
                                         className={`item ${this.state.name === '4' ? this.styleSet1 : ''}`}>Grid</p>
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        {this.navigationBar()}
                        <Route exact path="/apps/app0" component={App0Starter}></Route>
                        <Route exact path="/apps/app1" component={App1Page}></Route>
                        <Route exact path="/apps/app2" component={App2Page}></Route>
                        <Route exact path="/apps/app3" component={App3Page}></Route>
                        <Route exact path="/apps/app4" component={App4ReactAgGrid}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default HomeRouteMenuApps