import React, {Component} from 'react'
import axios from "axios";
import parser from 'html-react-parser'

export default class GenericComponent extends Component {
    constructor(props) {
        super(props)
        // this.url = "./resources/education.json"
        this.url = this.props.url
        this.tag = this.props.tag
        this.state = {
            data: []
        }
    }

    getdata = async () => {
        const res = await axios.get(this.url)
        this.setState({data: res.data.data})
    }

    componentDidMount() {
        this.getdata()
    }

    // display = () => {
    //     let vals = this.state.data
    //     // console.log("data",vals)
    //     return vals.map((k, id) => {
    //         let key = Object.keys(k)[0]
    //         let desc = Object.values(k)[0]
    //         return (
    //             <li key={"id" + key}>{parser(key)} {parser(desc)}</li>
    //         )
    //     })
    // }

    display = () => {
        // console.log(this.tag.toLowerCase(),this.tag.toLowerCase() === "projects")
        if (this.tag.toLowerCase() === "projects") {
            return this.display_projects()
        } else {
            let vals = this.state.data
            return vals.map((k, id) => {
                return (
                    <li key={"idDiv" + id}>{parser(k)}</li>
                )
            })
        }
    }

    display_projects = () => {
        let vals = this.state.data
        // console.log("data",vals)
        return vals.map((k, id) => {
            let key = Object.keys(k)[0]
            let desc = Object.values(k)[0]
            // console.log(Object.keys(k)[0],Object.values(k)[0])
            return (
                <div key={"id" + key}>
                    <span>{parser(key)}</span>
                    <div>{parser(desc)}</div>
                </div>
            )
        })
    }


    render() {
        return (
            <div className={this.props.grid_col_val}>
                <div className="bg-primary text-white font-weight-bolder">{this.tag}</div>
                <div id="project_summary">
                    <ul>
                        {this.display()}
                    </ul>
                </div>
            </div>
        )
    }
}