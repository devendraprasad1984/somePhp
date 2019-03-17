import React from 'react'
import {Link, Route, Router} from 'react-router-dom'
import * as x from '../types'
import browserHistory from "../browserHistory";
// import {} from 'semanti-ui-react'
// https://stackoverflow.com/questions/51036731/menu-item-active-state-not-working-with-navlink-semantic-ui-react

class HomeRouteMenuApps extends React.Component {
    styleSet1 = 'active border green'

    constructor(props) {
        super(props)
        this.state = {
            name: '0'
            , path: x.AppPages[0].path
            , component: x.AppPages[0].component

        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    changeRouteStateOld = (curLoc) => {
        x.AppPages.map((obj) => {
            // let curhref = window.location.pathname
            let curhref = curLoc
            if (obj.path === curhref) {
                console.log("current matched values", obj.path, curhref, obj.path === curhref)
                this.setState({path: obj.path, component: obj.component})
            }
        })
    }

    changeRouteState = (id) => {
        x.AppPages.map((obj) => {
            if (obj.name === id) {
                this.setState({path: obj.path, component: obj.component})
            }
        })
    }

    generateAppRoute=()=>{
        return x.AppPages.map((obj) => {
            // console.log("apps route path",obj.path)
            return <Route key={`id${obj.name}`} exact path={obj.path} component={obj.component}></Route>
        })
    }

    generateAppLinks=()=>{
        console.log(browserHistory.location.pathname)
        return x.AppPages.map((obj) => {
            // if(obj.path===browserHistory.location.pathname){
            //     this.activeMarker(obj.name)
            // }
            // console.log("apps links path",obj.path)
            return (
                <Link key={obj.name} to={obj.path}>
                    <p onClick={() => this.activeMarker(obj.name)} className={`item ${this.state.name === obj.name ? this.styleSet1 : ''}`}>{obj.text}</p>
                </Link>
            )
        })
    }


    activeMarker = (name) => {
        this.setState({name: name})
        // this.changeRouteState(name)
        // this.changeRouteStateOld(window.location.pathname)
        // console.log("current menu value", name, " compare: ", this.state.name)
    }

    navigationBar = () => {
        return (
            <div className="ui primary pointing menu">
                <Link to="/apps/app0"><p onClick={() => this.activeMarker('0')}
                                         className={`item ${this.state.name === '0' ? this.styleSet1 : ''}`}>Base</p>
                </Link>
                <Link to="/apps/app1"><p onClick={() => this.activeMarker('1')}
                                         className={`item ${this.state.name === '1' ? this.styleSet1 : ''}`}>Counter</p>
                </Link>
                <Link to="/apps/app2"><p onClick={() => this.activeMarker('2')}
                                         className={`item ${this.state.name === '2' ? this.styleSet1 : ''}`}>Timer</p>
                </Link>
                <Link to="/apps/app3"><p onClick={() => this.activeMarker('3')}
                                         className={`item ${this.state.name === '3' ? this.styleSet1 : ''}`}>Calci</p>
                </Link>
                <Link to="/apps/app4"><p onClick={() => this.activeMarker('4')}
                                         className={`item ${this.state.name === '4' ? this.styleSet1 : ''}`}>Grid</p>
                </Link>
                <Link to="/apps/app5"><p onClick={() => this.activeMarker('5')}
                                         className={`item ${this.state.name === '5' ? this.styleSet1 : ''}`}>QRCode</p>
                </Link>
            </div>
        )
    }

    navigationBarUsingConfig = () => {
        return (
            <div className="ui primary pointing menu">
                {this.generateAppLinks()}
            </div>
        )
    }

    render() {
        return (
            <div>
                {/*<Router basename={x.BASE_ROUTE_DIR} history={browserHistory}>*/}
                <Router history={browserHistory}>
                    <div>
                        {this.navigationBarUsingConfig()}
                        {this.generateAppRoute()}
                    </div>
                </Router>
            </div>
        )
    }
}

export default HomeRouteMenuApps


// {/*<Route exact path={this.state.path} component={this.state.component}></Route>*/}
// {/*<Route exact path="/apps/app0" component={App0Starter}></Route>*/}
// {/*<Route exact path="/apps/app1" component={App1Page}></Route>*/}
// {/*<Route exact path="/apps/app2" component={App2Page}></Route>*/}
// {/*<Route exact path="/apps/app3" component={App3Page}></Route>*/}
// {/*<Route exact path="/apps/app4" component={App4ReactAgGrid}></Route>*/}
// {/*<Route exact path="/apps/app5" component={App5Page}></Route>*/}
