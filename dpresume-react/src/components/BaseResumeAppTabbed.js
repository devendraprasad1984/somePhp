import React from 'react'
import HeaderComponent from "./HeaderComponent";
import CenterComponent from "./CenterComponent";
import '../styles/BaseResumeApp.css'
import TopComponent from "./TopComponent";
import GenericComponent from "./GenericComponent";


class BaseResumeAppTabbed extends React.Component {
    render() {
        return (
            <div id="main_id" className="container">
                <div id="div_fix_top" className="row">
                    <div className="col-lg-12 bg-dark">
                        <HeaderComponent/>
                    </div>
                    <div className="col-lg-12 bg-dark">
                        <TopComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="badge badge-primary" style={{cursor:'pointer'}}>Summary</div><br/>
                        <div className="badge badge-primary" style={{cursor:'pointer'}}>Education</div><br/>
                        <div className="badge badge-success" style={{cursor:'pointer'}}>Certification</div><br/>
                        <div className="badge badge-primary" style={{cursor:'pointer'}}>Experience</div><br/>
                        <div className="badge badge-success" style={{cursor:'pointer'}}>Projects</div><br/>
                        <div className="badge badge-primary" style={{cursor:'pointer'}}>Skills</div><br/>
                    </div>
                    <div className="col-lg-10">
                        <div><GenericComponent tag="Summary" grid_col_val="col-sm-12" url="./resources/summary.json"/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseResumeAppTabbed

