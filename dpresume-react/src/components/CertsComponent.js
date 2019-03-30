import React, {Component} from 'react'

export default class CertsComponent extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="bg-primary text-white font-weight-bolder">Certification</div>
                <ul>
                    <li>Certified Associate, Python Institute</li>
                    <li>1Z0-071 Oracle DB SQL (OC1849712), Oracle University</li>
                    <li>React+Redux (UC-91YOYH2M), Udemy</li>
                </ul>
            </div>
        )
    }
}