import React from 'react'

export class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {term: 'default value'}
        // this.setTextInputValueTEST=this.setTextInputValueTEST.bind(this) //way 2 solve this undefined issue
    }

    componentDidMount() {
    }

    onInputChangeClick(event) {
        let searchVal = event.target.value
        console.log(event, searchVal, "from change input search bar")
    }

    getTextInputValue() {
        let sVal = document.getElementById('txtSearchBar').value || "-no value"
        return sVal
    }
    setTextInputValue=()=> {
        this.setState({inputText: this.getTextInputValue()})
        console.log("inside setText",this.state.inputText)
    }
    //way 2 solve this undefined issue - ES2015 arrow function, resolves this automatically
    setTextInputValueTEST=()=> {
        this.setState({inputText: this.getTextInputValue()})
        console.log("inside setText TEST",this.state.inputText)
    }

    setTextInputValueTEST2(){
        this.setState({inputText: this.getTextInputValue()})
        console.log("inside setText TEST2",this.state.inputText)
    }

    onFormSubmit(){
        console.log("form submitted")
    }

    render() {
        return (
            <div className="ui segment">
                <p>search bar component goes here</p><br/>
                <div className="ui form">
                    <label className="field">Search</label>
                    <input type="text" placeholder="search" id="txtSearchBar"/>
                    {/*<button onClick={()=>this.setState({inputText: document.getElementById('txtSearchBar').value})}>Search</button>*/}
                    <button onClick={() => {
                        this.setTextInputValue()
                        console.log("outside setText",this.state.inputText)
                        // this.setState({inputText: this.getTextInputValue()})
                        this.onFormSubmit()
                    }
                    }
                    >Search</button>

                    <button onClick={this.setTextInputValueTEST}>Search TEST</button>
                    <button onClick={()=>this.setTextInputValueTEST2()}>Search TEST2 arrow</button>

                </div>
                <SearchDisplayList txt2search={'default - ' + this.state.inputText}/>
            </div>
        )
    }
}

export class SearchDisplayList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <p>search display component</p><br/>
                <p>searched value is {this.props.txt2search}</p>
            </div>
        )
    }
}
