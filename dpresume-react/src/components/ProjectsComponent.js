import React, {Component} from 'react'

export default class ProjectsComponent extends Component {
    render() {
        return (
            <div>
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