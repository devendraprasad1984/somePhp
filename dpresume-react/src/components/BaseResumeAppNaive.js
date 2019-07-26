import React from 'react'
import HeaderComponent from "./HeaderComponent";
import '../styles/BaseResumeApp.css'
import TopComponent from "./TopComponent";
import SimpleModal from "./SimpleModal";
import axios from "axios";


class BaseResumeAppNaive extends React.Component {
    constructor(props) {
        super(props)
        this.url = this.props.url
        this.tag = this.props.tag
        this.adhocUrl = "./resources/adhoc.json"
        this.data = {
            "Summary": {
                "url": "./resources/summary.json"
            }, "Education": {
                "url": "./resources/education.json"
            }, "Certification": {
                "url": "./resources/certifications.json"
            }, "Experience": {
                "url": "./resources/prof_expr.json"
            }, "Projects": {
                "url": "./resources/projects.json"
            }, "Skills": {
                "url": "./resources/skills.json"
            },
        }
        this.state = {
            isOpen: false,
            content: "default",
            adhocResources: {},
            tag: "Certification",
            url: "./resources/certifications.json"
        }
    }

    getAdhocResources = async () => {
        if (Object.keys(this.state.adhocResources).length === 0) {
            const res = await axios.get(this.adhocUrl)
            let xdata = res.data
            this.setState({adhocResources: xdata})
        }
    }

    toggleModal = (sval) => {
        this.getAdhocResources()
        if (sval === "") {
            this.setState({isOpen: !this.state.isOpen})
        } else {
            this.setState({isOpen: !this.state.isOpen, tag: sval, url: this.data[sval].url})
        }
    }

    getSummary = () => {
        let url = this.data["Summary"].url
        let retObj = (async () => {
            const res = await axios.get(url)
            return res.data.data
        })() //its result is a promise
        let elm = []
        Promise.resolve(retObj).then(arr => {
                elm.push(
                    <div>
                        <h1>Who I Am.......</h1>
                        <h2>Tech Lead Developer - python | react | js | html5 | plsql | AWS</h2>
                        {arr.map((x, id) => <p key={"pleft_" + id}>{x}</p>)}
                    </div>
                )
            }
        )
    }

    render() {
        if (!this.props.isActive)
            return null

        return (
            <div id="main_id" className="container" style={{marginBottom: '5em'}}>

                <SimpleModal show={this.state.isOpen} onClose={() => this.toggleModal("")}
                             header={this.state.tag + "->"}
                             contents={this.state.adhocResources[this.state.tag]}/>

                <div className="">
                    <div id="div_fix_top" className="row fixed-top">
                        <div className="col-lg-12 bg-dark">
                            <HeaderComponent/>
                        </div>
                        <div className="col-lg-12 bg-dark">
                            <TopComponent/>
                        </div>
                    </div>

                    <div id="div_container" style={{marginTop: '1em', paddingLeft: '10px'}}>
                        <div className="row">
                            <div id="div_container_naive_left" className="col-lg-6">
                                <div className='content'>
                                    {this.getSummary()}
                                </div>
                            </div>

                            <div id="div_container_naive_right" className="col-lg-6">
                                <div className='content'>
                                    <h3 onClick={() => this.toggleModal("Summary")}>Synopsis</h3>
                                    <div className='synopsis'>
                                    <span className='title'>
                                      Technology Enthuziast, Tech Lead Developer, I love solving challenges in software programming
                                    </span>
                                    </div>

                                    <h3 onClick={() => this.toggleModal("Experience")}>Career History</h3>
                                    <div className='position'>
                                        <span className='title'>Tech Lead @ RBS</span>
                                        <span className='time-period'>October 2011 to Present</span>
                                    </div>

                                    <div className='position'>
                                        <span
                                            className='title'>Software Developer @ Syntel</span>
                                        <span className='time-period'>April 2011 to September 2011</span>
                                    </div>

                                    <div className='position'>
                                        <span
                                            className='title'>Software Developer @ 9Dimensions</span>
                                        <span className='time-period'>November 2009 to MArch 2011</span>
                                    </div>


                                    <div className='position'>
                                        <span className='title'>Programmer @ DAVIM</span>
                                        <span
                                            className='time-period'>September 2007 to September 2008</span>
                                    </div>


                                    <h3 onClick={() => this.toggleModal("Projects")}>Projects</h3>
                                    <div className='projects'>
                                        <span className='title'>Arria NLG – bugets and forecasts Narratives</span>
                                        <span className='time-period'></span>
                                        <span>This project is generated as PoC under Future Finance vertical within RBS and
                                            intended for automatic commentary / notes / narratives generation from
                                            bank’s statement reports using Arria.com NLG platform and using Tableau’s UI
                                            / story telling capabilities, intends to similify internal reporting to RBS
                                            group and to board members. This would also help reduction in manual man
                                            hours spending on generating these texts</span>
                                    </div>

                                    <div className='projects'>
                                        <span
                                            className='title'>Finance Portal (DRA: Disclosure Reporting Application)</span>
                                        <span className='time-period'></span>
                                        <span>Across the Bank, is required to produce multiple disclosures (Statutory
                                            Compliance) which are submitted as part of quarterly result to regulators.
                                            The project uses standard and consistent / configurable reports approache to
                                            building disclosures using tech stack such as Python & Tornado, React &
                                            Html5 and Oracle PL/Sql. The server and UI is capable of handling all the
                                            traffic using asynchronous handles which are non blocking in nature. The
                                            data which we aggregate and represnt comes from various sources using Argon
                                            and are loaded by sqlloader files via python scripts and are automated in
                                            batches using autosys schedular</span>
                                    </div>

                                    <div className='projects'>
                                        <span className='title'>FRC (Finance Reporting Cube) over OACS (Oracle Analytics Clound)</span>
                                        <span className='time-period'></span>
                                        <span>platform is SaaS which has to be onboarded by GFS teams for management and
                                            budget reporting. My role is to build reports in smartviewand do the
                                            reconciliation over management and budge data. This is pure migration
                                            project from older reporting systems (INEA/KHALIX/WALKER) to OACS world</span>
                                    </div>

                                    <div className='projects'>
                                        <span className='title'>CNMS (Cash Nostro Management System)</span>
                                        <span className='time-period'></span>
                                        <span>I have written a proxy server for the project, the aim was to have a single
                                            instance accessing RBS cash balances server and can give relevant data to
                                            authorised client. Clients identified by the IP address defined in a config
                                            file access to proxy server (socket implementation in python) can deliver
                                            the data back the connected client via soap object. Its ondemand pull
                                            application directly from any client that access and soap client handler
                                            installed can get the balances</span>
                                    </div>
                                    <div className='projects'>
                                        <span className='title'>Miscellaneous</span>
                                        <span className='time-period'></span>
                                        <span>I was also involved in non technology projects, reporting projects, migration
                                            projects and Support L3 projects also.</span>
                                    </div>

                                    <h3 onClick={() => this.toggleModal("Education")}>Education</h3>
                                    <div className='education'>
                                        <span className='title'>SCDL, Symbiosis, Pune, India</span>
                                        <span className='supplemental'>PGDITM, 2015-2017</span>
                                    </div>
                                    <div className='education'>
                                        <span className='title'>MDU, Rohtak, Haryana, India</span>
                                        <span className='supplemental'>BTech IT, 2002-2006</span>
                                    </div>

                                    <h3 onClick={() => this.toggleModal("Certification")}>Certifications</h3>
                                    <div className='cert'>
                                        <span className='title'>Certified Associate in Python</span>
                                        <span className='supplemental'>Python Institute</span>
                                    </div>
                                    <div className='cert'>
                                        <span className='title'>1Z0-071 Oracle DB SQL (OC1849712)</span>
                                        <span className='supplemental'>Oracle University</span>
                                    </div>
                                    <div className='cert'>
                                        <span className='title'>React+Redux (UC-91YOYH2M)</span>
                                        <span className='supplemental'>Udemy</span>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseResumeAppNaive

