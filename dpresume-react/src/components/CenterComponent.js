import React, {Component} from 'react'
import '../styles/CenterComponent.css'
import GenericComponent from "./GenericComponent";
import ProfExperienceComponent from "./ProfExperienceComponent";

export default class CenterComponent extends Component {
    render() {
        return (
            <div id="main_center_div">
                <div className="row">
                    <GenericComponent tag="Summary" grid_col_val="col-sm-12" url="./resources/summary.json"/>
                </div>

                <div className="row">
                    <GenericComponent tag="Education" grid_col_val="col-sm-6" url="./resources/education.json"/>
                    <GenericComponent tag="Certification" grid_col_val="col-sm-6"
                                      url="./resources/certifications.json"/>
                </div>

                <div className="row">
                    <div className="col-sm-12"><ProfExperienceComponent/></div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <GenericComponent tag="Projects" grid_col_val="col-sm-12" url="./resources/projects.json"/>
                    </div>
                </div>
            </div>
        )
    }
}