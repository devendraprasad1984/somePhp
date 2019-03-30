import React, {Component} from 'react'
import '../styles/CenterComponent.css'

export default class CenterComponent extends Component {
    render() {
        return (
            <div id="main_center_div">
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
                    <li>I work on Agile Sprints using KANBAN and full SDLC life cycles.</li>
                </ul>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="bg-primary text-white font-weight-bolder">Education</div>
                        <ul>
                            <li>PGDITM, SCDL, Symbiosis, Pune, India (2017)</li>
                            <li>B.Tech. in Information Technology, MDU Rohtak, Haryana, India (2006)</li>
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <div className="bg-primary text-white font-weight-bolder">Certification</div>
                        <ul>
                            <li>Certified Associate, Python Institute</li>
                            <li>1Z0-071 Oracle DB SQL (OC1849712), Oracle University</li>
                            <li>React+Redux (UC-91YOYH2M), Udemy</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-primary text-white font-weight-bolder">Professional Experience</div>
                <div id="prof_summary">
                    <div>
                        <span>Tech Lead @ Royal Bank Of Scotland, Oct11-current</span>
                        <div>
                            <span>Projects Undertaken:</span>
                            <ul>
                                <li>Disclosure Reporting Automation</li>
                                <li>Oracle Analytical Cloud Service</li>
                                <li>Potter - Short Term Money Market & Deposits</li>
                                <li>Cash Nostro Management Systems</li>
                            </ul>
                            <span>Role Summary:</span>
                            <ul>
                                <li>I am working on application development using Python/Tornado/Flask, React, PL/Sql
                                </li>
                                <li>I have designed solution for Reporting Solution which involves DB design, backend
                                    design, data processing using python, UI design and helped in finalising
                                    architectural strategies around it
                                </li>
                                <li>Converted logical data model to physical for Oracle</li>
                                <li>working on high ledger data volumes in Oracle environment</li>
                                <li>Designed data loader strategy using Python3/k-Shell/Cron/Autosys and written complex
                                    Sql Queries and PL/Sql business logic
                                </li>
                                <li>Installed, configured and customized Data Visualiser solution from Oracle</li>
                                <li>I help defining project outcomes, recruit & grow team, handle end-user queries and
                                    technical documentation
                                </li>
                                <li>I also handle Some adhoc activities which involves Solution Design, reconciliations
                                    and dashboarding
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <span>Senior VBA Programmer @ Syntel Apr11-Sep11</span>
                        <div>
                            <span>Projects Undertaken:</span>
                            <ul>
                                <li>Information Publisher macros</li>
                                <li>Markdown Optimisation template for requisition management system</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <span>Programmer @ 9 Dimensions, Nov09-Mar11</span>
                        <div>
                            <span>Projects Undertaken:</span>
                            <ul>
                                <li>PRVit (Performance Risk Valuation Investment Technique)</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <span>Programmer @ DAVIM, Sep07-Sep08</span>
                        <div>
                            <span>Projects Undertaken:</span>
                            <ul>
                                <li>Software development training to MCA students</li>
                                <li>Library Management</li>
                            </ul>
                        </div>
                    </div>


                </div>




                <div className="bg-primary text-white font-weight-bolder">Key Project Details</div>
                <div id="project_summary">
                    <span>Finance Portal</span>
                    <div>
                        This project is written in Python & Tornado, React & Html5 & Oracle PL/Sql and we to automate
                        Disclosure Reporting Processes and reducing the overall submission cycle from 2months to 12days.
                        The challenge was o design a reusable sysem of components and business services for each set of
                        different business processes and userbase across globe. The server and ui is capable of handling
                        all the traffic using asynchronous handles which non blocking i/o
                        Oracle Analytical Cloud Service
                    </div>

                    <span>FRC (Finance Reporting Cube) over OACS (Oracle Analytics Clound)</span>
                    <div>platform is SaaS which has to be onboarded by GFS teams for management and budget reporting. My
                        role is to build reports in smartviewand do the reconcilation over management and budge data.
                        This is pure migration project from older reporting systems (INEA/KHALIX/WALKER) to OACS world
                    </div>

                    <span>Potter</span>
                    <div>This is VB6+SQL Server based short terms money market front office system where Retails Bankers
                        in UK within RBS used to book the money market corporate and private banking trades,bonds,deals
                        etc. The trades were then made to flow to WSS(formaly) and then calypso(later) settlement
                        systems for further settlement with RBS. The application maintains customer and trades history
                        and also prints the deals on network printer or via GDS bulk print module. To achieve the
                        printing and bulk mailing facility, potter had Python2 proxy service configured running on
                        windows app server
                    </div>

                    <span>Cash Nostro Management System</span>
                    <div>Excel(Soap, WSS JPO API, Attachmate API->mainframe terminal hit) based solution which gives
                        trades the real time FX funding positions across globe. Any trade balances hit by anyone in RBS
                        (trade desk) was captured into this solution via WSS JOT APIs. When NWB system came into RBS, a
                        connection via Python CIL Services->Score systems where also made and balances were fetched to
                        give more closer real time view to traders
                    </div>
                </div>
            </div>
        )
    }
}