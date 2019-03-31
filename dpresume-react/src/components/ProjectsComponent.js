import React, {Component} from 'react'
import axios from "axios";

export default class ProjectsComponent extends Component {
    url = "./resources/projects.json"
    state = {
        data: []
    }

    getdata = async () => {
        const res = await axios.get(this.url)
        this.setState({data: res.data.data})
    }

    componentDidMount() {
        this.getdata()
    }

    display = () => {
        let vals = this.state.data
        // console.log("data",vals)
        return vals.map((k, id) => {
            let key=Object.keys(k)[0]
            let desc=Object.values(k)[0]
            // console.log(Object.keys(k)[0],Object.values(k)[0])
            return (
                <div key={"id"+key}>
                    <span>{key}</span>
                    <div>{desc}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="bg-primary text-white font-weight-bolder">Key Project Details</div>
                <div id="project_summary">
                    {this.display()}
                </div>
            </div>
        )
    }
}