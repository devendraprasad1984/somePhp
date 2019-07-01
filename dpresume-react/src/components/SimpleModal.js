import React from 'react'

export default class SimpleModal extends React.Component {
    render() {
        if (!this.props.show) {
            return null
        }
        const divpage={
            height:"300px",
            overflow: "auto",
        }
        return (
            <div className="modal-backdrop">
                <div className="modal-dialog">
                    <div className="modal-content" >
                        <div className="modal-header text-primary font-weight-bold">
                            {this.props.header}
                            <button onClick={this.props.onClose} className="btn btn-dark">Close</button>
                        </div>
                        <div style={{overflow:'auto', height:'300px', width:'100%'}}>{this.props.contents}</div>
                    </div>
                </div>
            </div>
        )
    }
}