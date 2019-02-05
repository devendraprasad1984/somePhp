import './seasonDisplay.css'
import React from 'react'
import Spinner from './spinner'


export class SeasonsComponent extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {posLat: 0, posLong: 0, errMsg: ''}

        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         this.setState({posLat: position.coords.latitude, posLong: position.coords.longitude})
        //     }
        //     , (err) => this.setState({errMsg: err.message})
        // )
    }

    state = {posLat: 0, posLong: 0, errMsg: ''} //alternate way to state init

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({posLat: position.coords.latitude, posLong: position.coords.longitude})
            }
            , (err) => this.setState({errMsg: err.message})
        )
    }

    renderContent(){
        if (this.state.errMsg && !this.state.posLat) {
            return (
                <div>
                    <span> error: {this.state.errMsg} </span><br/>
                </div>
            )
        } else if (!this.state.errMsg && this.state.posLat) {
            return (
                <div>
                    <p>this is season display test component</p>
                    <p>position: {this.state.posLat}, {this.state.posLong}</p>
                    <SeasonsDisplayComponent lat={this.state.posLat}>

                    </SeasonsDisplayComponent>
                </div>
            )
        } else {
            return <Spinner loadingText="loading, please wait..."></Spinner>
        }
    }

    render() {
        return (
            <div className="border red">{this.renderContent()}</div>
        )
    }
}


export class SeasonsDisplayComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {month: 0, seasonLat: 0, season: {}}
        this.months = ['', 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    }

    seasonConfig = {
        summer: {
            text: 'cool its summer'
            , iconName: 'sun'
        }
        , winter: {
            text: 'chilling, its winter'
            , iconName: 'snowflake'
        }
    }

    getSeason(lat, month) {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'summer' : 'winter'
        } else {
            return lat > 0 ? 'winter' : 'summer'
        }
    }

    componentDidMount() {
        this.setState({seasonLat: this.props.lat})
        var seasonName = this.getSeason(this.state.seasonLat, this.state.month)
        const seasonConfigObj = this.seasonConfig[seasonName]
        this.setState({season: this.seasonConfig[seasonName]})

        // this.setState({month:this.months[new Date().getMonth()-1]})
        // this.setState({month:new Date().getMonth()})
        // var seasonConfigObj=this.seasonConfig[seasonName]
        // this.setState({season: this.seasonConfig})
        // console.log(this.seasonConfigObj,this.state.season)
    }

    render() {
        return (
            <div>
                <span>this is season Display new component</span>
                <p>this is new lat in seaosn display <span>{this.state.seasonLat}</span></p>
                <p>Month is <span>{this.state.month}</span></p>
                {/*<span>{this.state.season.text} {this.state.season.iconName}</span>*/}
                <div className="container">
                    <i className={`left icon ${this.state.season.iconName} massive`}></i>
                    <p className="season-content">Season is <span>{this.state.season.text}</span></p>
                    <i className={`right icon ${this.state.season.iconName} massive`}></i>
                </div>
            </div>
        )
    }
}


// export default SeasonsComponent
// export default SeasonsDisplayComponent

// export {SeasonsComponent,SeasonsDisplayComponent}


