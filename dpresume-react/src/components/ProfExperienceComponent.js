import React, {Component} from 'react'
import {polyfill} from 'es6-promise'
import axios from 'axios'
import parser from 'html-react-parser'


export default class ProfExperienceComponent extends Component {

    constructor(props) {
        super(props)
        this.url = this.props.url
        this.state = {
            data: {}
        }
    }

    getdata = async () => {
        const res = await axios.get(this.url)
        this.setState({data: res.data})
    }

    componentDidMount() {
        polyfill()
        this.getdata()
    }

    display = () => {
        let {data} = this.state //destruct syntax
        //for ie support also
        return Object.keys(data).map(i=> data[i]).map((obj,k) => {
            let {role, time, projects, summary} = obj //ES6 desctruct syntax
            return (
                <div key={"idDiv"+role}>
                    <div className="bg-success text-white">
                        <span>{parser(role)}</span>
                        <span style={{float: 'right'}}>{parser(time)}</span>
                    </div>
                    <div>
                        <span>Projects Undertaken:</span>
                        <ul>{projects.map((x, id) => <li key={"Proj" + id}>{parser(x)}</li>)}</ul>
                        <span>Role Summary:</span>
                        <ul>{summary.map((x, id) => <li key={"Role" + id}>{parser(x)}</li>)}</ul>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="bg-primary text-white font-weight-bolder">
                    <span>Professional Experience</span>
                    <span style={{float:'right'}}><a href={this.url} target="_blank" title={this.url}><i className="fas fa-chevron-circle-right"></i></a></span>
                </div>
                <ul id="prof_summary">
                    {this.display()}
                </ul>
            </div>
        )
    }
}