import React from 'react'
import HeaderComponent from "./HeaderComponent";
import '../styles/BaseResumeApp.css'
import TopComponent from "./TopComponent";


class BaseResumeAppNaive extends React.Component {
    render() {
        return (
            <div id="main_id" className="container" style={{marginBottom: '5em'}}>
                <div className="">
                    <div id="div_fix_top" className="row fixed-top">
                        <div className="col-lg-12 bg-dark">
                            <HeaderComponent/>
                        </div>
                        <div className="col-lg-12 bg-dark">
                            <TopComponent/>
                        </div>
                    </div>

                    <div id="div_container">
                        <div className="row">
                            <div id="div_container_naive_left" className="col-lg-6">
                                <div className='content'>
                                    <h1>Devendra Prasad</h1>
                                    <h2>Tech Lead Developer - python|react|js|html5|plsql|AWS</h2>
                                    <p>I work on application development using Python/Tornado(Asynchronous IO based
                                        networking framework, RESTFul), React, PL/Sql and high edger data volume in
                                        Oracle 11g</p>
                                    <p>I run pylint, jshint and coverage.py for code quality and follow TDD
                                        approaches</p>
                                    <p>I do code review using tools built in git / fisheye</p>
                                    <p>I have worked on all aspects of Reporting Automation Solution (DRA project) such
                                        as DB design, REST API Design, data loader & data consumption stragegy using
                                        Python3 / k-Shell / Autosys / sqlloader / sql / plsql</p>
                                    <p>we use JIRA for agile, bug tracking and backlog grooming</p>
                                    <p>I can work smoothly on UI development & build in React.js</p>
                                    <p>I worked with Architects finalising strategies around our solution</p>
                                    <p>In RBS, we deliver cross platform message(soap & json) / file transfer using
                                        Argon APIs which is similar to Kafka / RabbitMQ sort of Pub-Sub ( observer /
                                        source-sink / push-pull) implementation</p>
                                    <p>I help defining project outcomes, recruit & grow team, handle end-user
                                        queries and support technical documentation</p>
                                    <p>I have also trained some of new joiners and graduates within team</p>
                                    <p>We follow MBDL(More Better Different Less) practices for retrospectives</p>
                                </div>
                            </div>

                            <div id="div_container_naive_right" className="col-lg-6">
                                <div className='content'>
                                    <h3>Synopsis</h3>
                                    <div className='synopsis'>
                                    <span className='title'>
                                      Technology Enthuziast, Tech Lead Developer, I love solving challenges in software programming
                                    </span>
                                    </div>

                                    <h3>Career History</h3>

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



                                    <h4>Projects</h4>

                                    <div className='projects'>
                                        <span className='title'>Arria NLG – bugets and forecasts Narratives</span>
                                        <span className='time-period'></span>
                                        <p>This project is generated as PoC under Future Finance vertical within RBS and intended for automatic commentary / notes / narratives generation from bank’s statement reports using Arria.com NLG platform and using Tableau’s UI / story telling capabilities, intends to similify internal reporting to RBS group and to board members. This would also help reduction in manual man hours spending on generating these texts</p>
                                    </div>

                                    <div className='projects'>
                                        <span className='title'>Finance Portal (DRA: Disclosure Reporting Application)</span>
                                        <span className='time-period'></span>
                                        <p>Across the Bank, is required to produce multiple disclosures (Statutory Compliance) which are submitted as part of quarterly result to regulators. The project uses standard and consistent / configurable reports approache to building disclosures using tech stack such as Python & Tornado, React & Html5 and Oracle PL/Sql. The server and UI is capable of handling all the traffic using asynchronous handles which are non blocking in nature. The data which we aggregate and represnt comes from various sources using Argon and are loaded by sqlloader files via python scripts and are automated in batches using autosys schedular</p>
                                    </div>

                                    <div className='projects'>
                                        <span className='title'>FRC (Finance Reporting Cube) over OACS (Oracle Analytics Clound)</span>
                                        <span className='time-period'></span>
                                        <p>platform is SaaS which has to be onboarded by GFS teams for management and budget reporting. My role is to build reports in smartviewand do the reconciliation over management and budge data. This is pure migration project from older reporting systems (INEA/KHALIX/WALKER) to OACS world</p>
                                    </div>

                                    <div className='projects'>
                                        <span className='title'>CNMS (Cash Nostro Management System)</span>
                                        <span className='time-period'></span>
                                        <p>I have written a proxy server for the project, the aim was to have a single instance accessing RBS cash balances server and can give relevant data to authorised client. Clients identified by the IP address defined in a config file access to proxy server (socket implementation in python) can deliver the data back the connected client via soap object. Its ondemand pull application directly from any client that access and soap client handler installed can get the balances</p>
                                    </div>
                                    <div className='projects'>
                                        <span className='title'>Miscellaneous</span>
                                        <span className='time-period'></span>
                                        <p>I was also involved in non technology projects, reporting projects, migration projects and Support L3 projects also.</p>
                                    </div>
                                    <h3>Education</h3>

                                    <div className='education'>
                                        <span className='title'>SCDL, Symbiosis, Pune, India</span>
                                        <span className='supplemental'>PGDITM, 2015-2017</span>

                                        <span className='title'>MDU, Rohtak, Haryana, India</span>
                                        <span className='supplemental'>BTech IT, 2002-2006</span>
                                    </div>

                                    <h3>Certifications</h3>
                                    <div className='cert'>
                                        <span className='title'>Certified Associate in Python</span>
                                        <span className='supplemental'>Python Institute</span>

                                        <span className='title'>1Z0-071 Oracle DB SQL (OC1849712)</span>
                                        <span className='supplemental'>Oracle University</span>

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

