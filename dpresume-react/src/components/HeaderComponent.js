import React, {Component} from 'react'
import '../styles/HeaderComponent.css'
import LinksComponent from "./LinksComponent"

export default class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className="h_left">
                    Devendra Prasad - Tech Lead Developer
                    <LinksComponent/>
                </div>
                <div className="h_right">
                    Email: devendraprasad1984@gmail.com<br/>
                    Mob: +91 9582797772
                </div>
            </div>
        )
    }
}