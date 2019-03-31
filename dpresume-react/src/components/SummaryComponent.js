import React, {Component} from 'react'
import axios from "axios";
import parser from 'html-react-parser'

export default class SummaryComponent extends Component {

    url = "./resources/summary.json"
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
        return vals.map((k, id) => {
            return (
                <li key={"idSummary" + id}>{ parser(k)}</li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="bg-primary text-white font-weight-bolder">Summary</div>
                <div id="summary">
                    <ul>
                        {this.display()}
                    </ul>
                </div>
            </div>
        )
    }
}