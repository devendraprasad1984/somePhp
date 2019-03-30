import React, {Component} from 'react'
import '../styles/CenterComponent.css'
import SummaryComponent from "./SummaryComponent";
import EducationComponent from "./EducationComponent";
import CertsComponent from "./CertsComponent";
import ProjectsComponent from "./ProjectsComponent";
import ProfExperienceComponent from "./ProfExperienceComponent";

export default class CenterComponent extends Component {
    render() {
        return (
            <div id="main_center_div">
                <SummaryComponent/>

                <div className="row">
                    <EducationComponent/>
                    <CertsComponent/>
                </div>

                <ProfExperienceComponent/>
                <ProjectsComponent/>
            </div>
        )
    }
}