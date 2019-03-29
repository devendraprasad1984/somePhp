import React,{Component} from 'react'
import '../styles/HeaderComponent.css'

export default class HeaderComponent extends Component{
    render(){
        return(
            <div>
                <div className="h_left">
                    Devendra Prasad - Tech Lead Developer
                    <div className="badge badge-danger">
                        <span className="badge badge-info">Python3</span>
                        <span className="badge badge-info">AWS</span>
                        <span className="badge badge-info">React+redux+js+html5</span>
                        <span className="badge badge-info">PLSql</span>
                        <span className="badge badge-info">Agile</span>
                    </div>
                </div>
                <div className="h_right">
                    Email: devendraprasad1984@gmail.com<br/>
                    Mob: +91 9582797772
                </div>
            </div>
        )
    }
}