import React,{Component} from 'react'

export default class SummaryComponent extends Component{
    render() {
        return(
            <div>
                <div className="bg-primary text-white font-weight-bolder">Summary</div>
                <ul>
                    <li>I have 11+ years wide experience in developing software applications</li>
                    <li>I am leading a small team of software engineers and graduates.</li>
                    <li>I am working on applications built on technologies such as Python / Tornado / Flask (REST, JSON)
                        / React / PlSql / HTML5 and Solution Designing.
                    </li>
                    <li>I handle change management, incident management and Release management.</li>
                    <li>I am enthusiastic, versatile, ambitious and result oriented with excellant communication
                        skills
                    </li>
                    <li>I work on Agile Ceremonies (planning, estimation, scrum, retrospective, review) using KANBAN and full SDLC life cycles.</li>
                </ul>
            </div>
        )
    }
}