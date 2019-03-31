import React, {Component} from 'react'
import '../styles/CenterComponent.css'
import SummaryComponent from "./SummaryComponent";
import CertsEduComponent from "./CertsEduComponent";
import ProjectsComponent from "./ProjectsComponent";
import ProfExperienceComponent from "./ProfExperienceComponent";

export default class CenterComponent extends Component {
    render() {
        return (
            <div id="main_center_div">
                <SummaryComponent/>

                <div className="row">
                    <CertsEduComponent tag="Education" url="./resources/education.json"/>
                    <CertsEduComponent tag="Certification" url="./resources/certifications.json"/>
                </div>

                <ProfExperienceComponent/>
                <ProjectsComponent/>
            </div>
        )
    }
}