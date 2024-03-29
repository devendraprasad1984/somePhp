function transform(offset) {
    const cos = Math.cos(offset);
    const sin = Math.sin(offset);
    return {transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`};
}


class App extends React.Component {
    state = {style1: {}, style2: {}}

    onMouseMove = (event) => {
        this.setState({
            style1: transform(-event.clientX / event.clientY)
            , style2: transform(event.clientX / event.clientY)
        })
    }

    render() {
        return <div onMouseMove={this.onMouseMove}>
            <span>hello new component</span>
            <div className="panel" style={this.state.style1}></div>
            <div className="panel" style={this.state.style2}></div>
        </div>
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
