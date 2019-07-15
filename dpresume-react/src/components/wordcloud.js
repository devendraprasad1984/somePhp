import React from 'react'
import ReactWordcloud from 'react-wordcloud'

export default class WordCloud extends React.Component {
    constructor(props) {
        super(props)
        this.words = this.props.words
        this.options = {
            colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
            enableTooltip: false,
            deterministic: false,
            fontFamily: '"Google Sans"',
            fontSizes: [5, 40],
            fontStyle: 'normal',
            fontWeight: 'bold',
            padding: 2,
            rotations: 3,
            rotationAngles: [0, 90],
            scale: 'sqrt',
            spiral: 'archimedean',
            transitionDuration: 1,
        };
        this.state={height:300}
    }

    // componentDidMount() {
    //     setInterval(()=>{
    //         this.setState({changeCounter:this.state.changeCounter===10 ? 0 : this.state.changeCounter+1})
    //         console.log(this.state.changeCounter)
    //     },1000)
    // }

    renderWords = () => {
        let swords = this.words
        return <ReactWordcloud options={this.options} words={swords}/>
    }

    rerun=()=>{
        this.setState({height:this.state.height===300 ? 301 : 300})
        // console.log(this.state.changeCounter)
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <div style={{width:'100%',height:this.state.height+"px"}} onClick={this.rerun}>{this.renderWords()}</div>
            </div>
        )
    }
}