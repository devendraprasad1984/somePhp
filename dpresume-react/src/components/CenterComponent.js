import React,{Component} from 'react'

export default class CenterComponent extends Component{
    render() {
        return (
            <div style={{overflow:'auto', height:'400px'}}>
                <div className="bg-primary text-white font-weight-bolder">Summary</div>
                <div>xx</div>

                <div className="bg-primary text-white font-weight-bolder">Education</div>
                <div>xx</div>

                <div className="bg-primary text-white font-weight-bolder">Professional Experience</div>
                <div>xx</div>

                <div className="bg-primary text-white font-weight-bolder">Key Project Details</div>
                <div>xx</div>
            </div>
        )
    }
}