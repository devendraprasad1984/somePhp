import React from 'react'

export default class SimpleModal extends React.Component {

    displayContents=()=>{
        if(!this.props.contents)
            return null
        return this.props.contents.map((x,id)=>
                <div key={"k1_"+id}>
                    <img src={x} alt={x} style={{height:'400px',width:'100%', padding:'5px 5px'}} />
                </div>
            )
    }
    render() {
        if (!this.props.show) {
            return null
        }
        return (
            <div className="modal-backdrop"  style={{float:'left'}}>
                <div className="">
                    <div className="modal-content" style={{height:"600px", width:"100%", float:'left'}}>
                        <div className="modal-header text-primary font-weight-bold">
                            {this.props.header}
                            <button onClick={this.props.onClose} className="btn btn-dark">Close</button>
                        </div>
                        <div style={{overflow:'auto', height:'100%', width:'98%'}}>{this.displayContents()}</div>
                    </div>
                </div>
            </div>
        )
    }
}