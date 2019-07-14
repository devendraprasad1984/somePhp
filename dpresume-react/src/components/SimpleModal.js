import React from 'react'
import axios from "axios";
// import _ from 'lodash'

export default class SimpleModal extends React.Component {
    constructor(props) {
        super(props)
        this.imgStyle = {
            height: '400px',
            width: '98%',
            padding: '10px 10px',
            border: '2px solid black',
            marginBottom: '10px'
        }
        this.hval = this.props.header.split("->")
        this.cururl = window.location.href
        this.state = {filetxt: ""}
    }

    setHeader() {
        return (
            <div>
                <span style={{textAlign: 'center', fontSize: '24pt'}}
                      className="font-weight-bold text-danger">{this.hval[0]}</span>
            </div>
        )
    }

    formatResources = (x) => {
        if (x.indexOf(".png") >= 0 || x.indexOf(".jpg") >= 0) {
            return <img src={x} alt={x} style={this.imgStyle}/>
        } else if (x.indexOf(".pdf") >= 0) {
            return <div>
                <object data={"" + this.cururl + x + "#view=FitH"} type='application/pdf'
                        style={{height: '50vh', width: '100%'}}>{x}</object>
            </div>
        } else if (x.indexOf(".txt") >= 0 || x.indexOf(".htm") >= 0) {
            return <div>{
                this.readTextFile(x)
            }</div>
        } else {
            return x
        }
    }

    displayContents = () => {
        if (!this.props.contents)
            return null
        return this.props.contents.map((x, id) => {
                let finalFormattedValues = this.formatResources(x)
                let elm1 = <a href={x} className="text-primary font-weight-bold" target="_blank"
                              rel="noopener noreferrer">{finalFormattedValues}</a>
                let elm2 = <pre className="text-primary">{finalFormattedValues}</pre>
                let elm = (x.indexOf(".png") >= 0 || x.indexOf(".jpg") >= 0) ? elm1 : elm2
                return <div key={"k1_" + id}>{elm}</div>
            }
        )
    }

    readTextFile = file => {
        // axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        // axios.defaults.headers.get['Content-Type'] ='text/plain';
        // axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
        // let headerConfig = {
        //     headers:{
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Methods": "GET",
        //         "crossOrigin": true,
        //         "crossDomain": true,
        //         "Access-Control-Allow-Credentials": true,
        //         'Content-Type': 'text/plain',
        //         "Access-Control-Allow-Headers":"Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization",
        //         "Access-Control-Expose-Headers":"Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
        //     }
        // }
        let callFn = async file => {
            let res = await axios.get(file)
            let data = await res.data
            this.setState({filetxt: data})
        }
        callFn(file)
        // console.log(callFn(file).then(res=>console.log(res)))
        return <pre>{this.state.filetxt}</pre>
        // let data=await axios.get(file).then((res) => {
        //     return res.data
        // }).catch((err) => {
        //     console.log(err)
        // })
        // this.setState({filetxt: data})
        // var request = new XMLHttpRequest();
        // request.onreadystatechange = await function () {
        //     if (request.status === 200 && request.readyState === 4) {
        //         let txt = request.responseText
        //         return txt
        //     }
        // };
        // request.open('GET', file, true);
        // request.setRequestHeader("Access-Control-Allow-Origin", "*");
        // request.setRequestHeader("Access-Control-Allow-Credentials", true);
        // request.send();
    };

    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="modal-backdrop" style={{float: 'left'}}>
                <div className="">
                    <div className="modal-content" style={{height: "600px", width: "100%", float: 'left'}}>
                        <div className="modal-header text-primary font-weight-bold">
                            {this.setHeader()}
                            <button onClick={this.props.onClose} className="btn btn-dark">Close</button>
                        </div>
                        <div style={{overflow: 'auto', height: '100%', width: '98%'}}>{this.displayContents()}</div>
                    </div>
                </div>
            </div>
        )
    }
}