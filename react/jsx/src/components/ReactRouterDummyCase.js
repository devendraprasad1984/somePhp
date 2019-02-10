import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'


const navigationBar = () => {
    return (
        <div>
            <Link to="/"><span>page 1</span></Link>
            <Link to="/page2"><span>page 2</span></Link>
        </div>
    )
}

const page1Route = () => {
    return (
        <div>
            <span>this is page1 route</span>
        </div>
    )
}
const page2Route = () => {
    return (
        <div>
            <span>this is page2 route</span>
            <button className="ui button red">Click me</button>
        </div>
    )
}

class ReactRouterDummyCase extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>React Router Dummy Case</p>
                <BrowserRouter>
                    <div>
                        {navigationBar()}
                        <Route exact path="/" component={page1Route}></Route>
                        <Route path="/page2" component={page2Route}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default ReactRouterDummyCase
