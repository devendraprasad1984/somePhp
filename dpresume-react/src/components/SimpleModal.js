import React from 'react'
import axios from "axios";

export default class SimpleModal extends React.Component {
    constructor(props) {
        super(props)
        this.imgStyle = {
            height: '400px',
            width: '98%',
            padding: '10px 10px',
            border: '2px solid black',
            marginBottom: '5px'
        }
        this.hval = this.props.header.split("->")
        this.cururl = window.location.href
        // this.cururl = "http://dpresume.com"
    }

    setHeader() {
        return (
            <div>
                <span style={{textAlign:'center', fontSize: '24pt'}}
                      className="font-weight-bold text-danger">{this.hval[0]}</span>
            </div>
        )
    }

    formatResources = (x) => {
        if (x.includes(".png") || x.includes(".jpg")) {
            return <img src={x} alt={x} style={this.imgStyle}/>
        } else if (x.includes(".pdf")) {
            return <div>
                {/*{this.cururl+x}*/}
                <object data={"" + this.cururl + x + "#view=FitH"} type='application/pdf'
                        style={{height: '50vh', width: '100%'}}>{x}</object>
            </div>
        } else if (x.includes(".txt") || x.includes(".htm")) {
            // let txtData = this.read_txt_axios(x)
            // console.log(txtData)
            return <div>
                <iframe title="myframebody" style={{height: '500px', width: '100%'}} src={"" + x + ""}></iframe>
            </div>
        } else {
            return x
        }
    }

    displayContents = () => {
        if (!this.props.contents)
            return null
        return this.props.contents.map((x, id) =>
            <div key={"k1_" + id}>
                <a href={x} className="text-primary font-weight-bold" target="_blank"
                   rel="noopener noreferrer">{this.formatResources(x)}</a>
            </div>
        )
    }

    readTextFile = file => {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status === 0) {
                    return rawFile.responseText;
                }
            }
        };
        rawFile.send(null);
    };

    read_txt_axios=async file=>{
        let config = {
            headers: {'Access-Control-Allow-Origin': '*'}
        };
       let data=await axios.get(file,config).then(function (response) {
           console.log(response.data);
       }).catch(error=>{console.log(error)})
        console.log(data)
    }


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