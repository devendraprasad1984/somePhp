import React, {Component} from 'react'

export default class ProfExperienceComponent extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}