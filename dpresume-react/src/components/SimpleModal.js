import React from 'react'

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
        this.cururl=window.location.href
    }

    setHeader() {
        return (
            <div>
                <span style={{float: 'left', fontSize: '18pt'}}
                      className="font-weight-bold text-danger">{this.hval[0]}</span>
                {/*<span style={{float: 'right'}}><a className="font-weight-bold text-danger" href={this.hval[1]}*/}
                {/*                                  target='_blank' rel='noopener noreferrer'>JSON</a></span>*/}
            </div>
        )
    }

    formatResources = (x) => {
        if (x.includes(".png") || x.includes(".jpg")) {
            return <img src={x} alt={x} style={this.imgStyle}/>
        } else if (x.includes(".pdf")) {
            return <div>
                {/*{this.cururl+x}*/}
                <object alt-text={x} data={"" + this.cururl+x + "#view=FitH"} type='application/pdf'
                        style={{height: '50vh', width: '100%'}}></object>
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