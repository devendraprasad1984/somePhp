import React,{Component} from 'react'
import '../styles/BottomComponent.css'


export default class BottomComponent extends Component{
    render(){
        return(
            <div className="bottom_div">
                <div className="bg-primary text-white font-weight-bolder"></div>
                <div  className="bottom_div_a">
                    <a href="http://dpresume.com" rel="noopener noreferrer" target="_blank">Older View</a>
                    <a href="http://dpresume.com/react-build" rel="noopener noreferrer" target="_blank">react-build</a>
                    <a href="http://github.com/devendraprasad1984" rel="noopener noreferrer" target="_blank">github.com</a>
                    <a href="http://linkedin.com/devendraprasad" rel="noopener noreferrer" target="_blank">linkedin</a>
                </div>
            </div>
        )
    }
}