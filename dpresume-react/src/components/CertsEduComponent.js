import React, {Component} from 'react'
import axios from "axios";
import parser from 'html-react-parser'

export default class CertsEduComponent extends Component {
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

    display = () => {
        let vals = this.state.data
        // console.log("data",vals)
        return vals.map((k, id) => {
            let key = Object.keys(k)[0]
            let desc = Object.values(k)[0]
            return (
                <li key={"id" + key}>{parser(key)} {parser(desc)}</li>
            )
        })
    }

    render() {
        return (
            <div className="col-sm-6">
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