import React,{Component} from 'react'
import '../styles/TopComponent.css'


export default class TopComponent extends Component{
    render(){
        return(
            <div className="top_div">
                <div className="bg-dark text-white font-weight-bold" style={{textAlign: 'right'}}>This view is build with
                    latest React webpack
                </div>

                <div className="bg-primary text-white font-weight-bolder"></div>
                <div  className="top_div_a">
                    <a href="http://dpresume.com/older" rel="noopener noreferrer" target="_blank">Older View</a>
                    <a href="http://dpresume.com/react-build" rel="noopener noreferrer" target="_blank" className="text-danger">reactJs</a>
                    <a href="http://github.com/devendraprasad1984" rel="noopener noreferrer" target="_blank">github.com</a>
                    <a href="http://linkedin.com/devendraprasad" rel="noopener noreferrer" target="_blank">linkedin</a>
                </div>
            </div>
        )
    }
}