import React, {Component} from 'react'

export default class CertsComponent extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <div className="bg-primary text-white font-weight-bolder">Certification</div>
                <ul>
                    <li><b>Certified Associate</b>, Python Institute</li>
                    <li><b>1Z0-071 Oracle DB SQL</b> (OC1849712), Oracle University</li>
                    <li><b>React+Redux</b> (UC-91YOYH2M), Udemy</li>
                </ul>
            </div>
        )
    }
}