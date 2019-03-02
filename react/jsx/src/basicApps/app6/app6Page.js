import React from 'react'
import axios from 'axios'
import $ from 'jquery'

export default class App6Page extends React.Component {
    fx_api = 'http://webrates.truefx.com/rates/connect.html?f=csv'
    state = {fxdata: []}
    config = {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "no-cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "text/plain",
            'Access-Control-Allow-Origin': '*',
            // "Content-Type": "application/x-www-form-urlencoded",
        },
    }
    fields = ["currencyPair", "timestamp", "bidBig", "bidPips", "offerBig", "offerPips", "high", "low", "open"]

    processData = (fields, valid) => data => {
        console.log("process data",fields, data)
        data.split("\n")
            .map(row => row.split(",")
                .reduce((acc, val, i) => {
                    acc[fields[i]] = val;
                    return acc
                }, {}))
            .filter(obj => obj.hasOwnProperty(valid))
    }

    getDataFromFXApi = () => {
        fetch(this.fx_api, this.config)
            .then(response=>response.text())
            .then(this.processData(this.fields, "timestamp"))
            .then(result => {
                this.cachedData = result;
                // io.sockets.emit('data', result);
                console.log(result)
            })
    }

    getDataFromFXApi_old = () => {

        const fxdata = axios.get(this.fx_api, this.config).then(res => res.text()).then(data => {
            console.log(data)
        })
        // this.setState({fxdata:fxdata})
        // console.log("fxdata",fxdata)

        // fetch(this.fx_api)
        //     .then(response=>{
        //         console.log("fx data using fetch",response)
        //         return response.text()
        //     })
        //     .then(result => {
        //         this.cachedData = result;
        //         // io.sockets.emit('data', result);
        //     })


        // $.ajax({
        //     url: this.fx_api,
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/text',
        //     },
        //     datatype:'text',
        //     method: 'GET',
        //     success: function (response) {
        //         console.log("fx data",response)
        //     },
        //     error: function (xhr, status) {
        //         console.log("error",xhr, status)
        //     }
        // });


        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', this.fx_api, true);
        // xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        // xhr.setRequestHeader('Content-Type', 'application/csv');
        // xhr.send(null);
        // console.log(xhr)

    }

    render() {
        return (
            <div>
                <span>App6 Pull Data from webapi live using sockets</span>
                <div><span onClick={this.getDataFromFXApi} className="btn btn-success">Pull FX Data</span></div>
            </div>
        )
    }
}