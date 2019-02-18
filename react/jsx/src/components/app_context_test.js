import React from 'react'
import ContextUserCreate from "./contextUserCreate";
import contextsObject from './contextsObject'

class AppContextTest extends React.Component {
    state = {language: 'English'}

    onLanguageChange = (lang) => {
        this.setState({language: lang})
    }

    render() {
        return (
            <div>
                <h1>React Context System</h1>
                <h3>this is a test for React Context system - props are passed to any child compoent (diff from prop
                    system to 1 parent-1 child relation)</h3>
                <div>
                    <span>Select a language: </span>
                    <i className="flag us huge" onClick={() => this.onLanguageChange('English')}></i>
                    <i className="flag in" onClick={() => this.onLanguageChange('Hindi')}></i>
                    <i className="flag uk" onClick={() => this.onLanguageChange('British')}></i>
                    <i className="flag nl" onClick={() => this.onLanguageChange('Neitherlands')}></i>
                </div>
                <div className="ui label red"><span>you have selected: <span
                    className="ui label blue">{this.state.language}</span></span></div>

                <contextsObject.Provider value={this.state.language}>
                    <ContextUserCreate/>
                </contextsObject.Provider>
                <span>separate copy of provider is an altogether separet context</span>

                <contextsObject.Provider value="English">
                    <ContextUserCreate/>
                </contextsObject.Provider>
            </div>
        )
    }
}

export default AppContextTest
