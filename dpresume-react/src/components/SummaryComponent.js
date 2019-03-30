import React,{Component} from 'react'

export default class SummaryComponent extends Component{
    render() {
        return(
            <div>
                <div className="bg-primary text-white font-weight-bolder">Summary</div>
                <ul>
                    <li>I have <b>11+</b> years wide experience in developing software applications</li>
                    <li>I am leading a small team of software engineers and graduates.</li>
                    <li>I am working on applications built on technologies such as <b>Python / Tornado / Flask (REST, JSON)
                        / React / PlSql / HTML5 and Solution Designing</b>.
                    </li>
                    <li>I handle change management, incident management and Release management.</li>
                    <li>I am enthusiastic, <b>versatile</b>, ambitious and result oriented with excellant communication
                        skills
                    </li>
                    <li>I work on <b>Agile Ceremonies (planning, estimation, scrum, retrospective, review)</b> using <b>KANBAN</b> and full SDLC life cycles.</li>
                </ul>
            </div>
        )
    }
}