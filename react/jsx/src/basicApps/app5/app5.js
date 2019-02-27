import React, {Component} from 'react';
import QRCode from 'react-qr-code'
// import * as $ from 'jquery'

export default class App5Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qrval: 'default'
            ,checked:false
        }
        // this.datepicker=React.createRef()
    }

    componentDidMount() {
        // $(this.datepicker.current).datepicker();
        this.initDatePicker()
        document.getElementById('idQrText').value = this.state.qrval
        document.getElementById('idQrText').addEventListener('keypress', this.onKeyPress)
        document.getElementById('idQrText').addEventListener('input', this.changeStateOfQR)

        // this.$refQRDiv = $(this.refs.refQRDiv); //element is on ref for React virtual DOM, so that it can get control for jquery
        // this.$el.qrcode({ width: 300, height: 300, text: $('#idQrText').val()});
        // this.$el.qrcode({ width: 300, height: 300, text: 'hello wrold'});
    }

    updateQR=()=>{
        this.setState({qrval: document.getElementById('idQrText').value})
    }
    changeStateOfQR = () => {
        if(this.state.checked)
            this.updateQR()
    }
    onKeyPress = (e) => {
        if (e.keyCode === 13) {
            this.updateQR()
        }
        // e.preventDefault()
        // e.stopPropagation()
    }

    initDatePicker=()=>{
        const dtpick=window.jQuery(this.refs.refdatepicker)
        console.log("date pick values",dtpick)
        dtpick.datepicker()
    }

    onQRButtonClick=()=>{
        // console.log(window.jQuery( document.getElementById('qrCodeDiv')))
        // const qr=window.jQuery( document.getElementById('qrCodeDiv'))
        // const qr=window.jQuery( $('#qrCodeDiv'))
        const qr=window.jQuery( this.refs.refQRDiv)
        qr.empty()
        qr.css({'width': 200,'height': 200 });
        // qr.qrcode({ width: 200, height: 200, text: $('#idQrText').val()})
        console.log(qr,this.refs.ref_idqrtext,this.refs.ref_idqrtext.current, this.refs.ref_idqrtext.value)
        qr.qrcode({text: this.refs.ref_idqrtext.value})
        // console.log(qr)
        // console.log(window.jQuery( document.getElementById('qrCodeDiv')), this.$refQRDiv, $('#qrCodeDiv'))
        // $('#qrCodeDiv').qrcode({ width: 300, height: 300, text: $('#idQrText').val()});
        // this.$refQRDiv.qrcode({ width: 300, height: 300, text: $('#idQrText').val()});

    }

    checkStateChange=()=>{
        const sCheckVal=!this.state.checked
        this.setState({checked: sCheckVal})
        // console.log("QR check",sCheckVal)
        // if(sCheckVal)
        //     document.getElementById('idQrText').addEventListener('onchange', this.changeStateOfQR)
        // else
        //     document.getElementById('idQrText').removeEventListener('onchange',this.changeStateOfQR)

    }

    // https://github.com/rtkhanas/react-qr-code
    render() {
        return (
            <div className="card form">
                <div>
                    datepicker: <input type='text' ref='refdatepicker' />
                </div>
                <div>
                    Enter Value for QR Code: <input id="idQrText" ref='ref_idqrtext' type="text" className="form-control"/>
                    <span>Change QR on every text change</span>
                    <label className="switch danger">
                        <input type="checkbox" onChange={this.checkStateChange} checked={this.state.checked}/>
                        <span className="slider round"></span>
                    </label>
                </div>

                <div className="row">
                    <div className="container-fluid card-body col-lg-6">
                        <span>using react-qr-code and npm mode qr.js</span>
                        <div><QRCode value={this.state.qrval}/></div>
                    </div>
                    <div className="container-fluid card-body col-lg-6">
                        <span>using standalone qr.js / jquery integration</span>
                        <button className="btn btn-danger" onClick={this.onQRButtonClick}>Generate</button>
                        <div id="qrCodeDiv" ref="refQRDiv"></div>
                    </div>
                </div>
            </div>
        );
    }
}
