import React, {Component} from 'react'
import '../styles/CenterComponent.css'
import GenericComponent from "./GenericComponent";
import WordCloud  from './wordcloud'
import RightComponent from "./RightComponent";

export default class CenterComponent extends Component {
    constructor(props){
        super(props)
        this.skills= [
            {text: 'HTML5+ES6+JS',value:''},
            {text: 'react+hooks 16.8.0',value:''},
            {text: 'redux 4.0.1',value:''},
            {text: 'ag-grid 20.1.0',value:''},
            {text: 'html-react-parser 0.6.4',value:''},
            {text: 'axios 0.18.0',value:''},
            {text: 'es6-promise 4.2.6',value:''},
            {text: 'react-app-polyfill 1.0.1',value:''},
            {text: 'lodash 4.17.11',value:''},
            {text: 'react-native 0.59.8',value:''},
            {text: 'Tableau 2019.1.3',value:''},
            {text: 'python 3.6.7',value:''},
            {text: 'Tornado 5.1.1',value:''},
            {text: 'Django 2.1.7',value:''},
            {text: 'Flask 1.0.2',value:''},
            {text: 'databases',value:''},
            {text: 'Oracle 11g',value:''},
            {text: 'nosql',value:''},
            {text: 'Servers',value:''},
            {text: 'apache 2.4.0',value:''},
            {text: 'nginx 1.14.0',value:''},
            {text: 'IntelliJ',value:''},
            {text: 'heroku',value:''},
            {text: 'tomcat',value:''},
            {text: 'JIRA',value:''},
            {text: 'flask',value:''},
            {text: 'Autosys',value:''},
            {text: 'Fisheye',value:''},
            {text: 'Confluence',value:''},
            {text: 'Nodejs',value:''},
            {text: 'Winmerge',value:''},
            {text: 'Arria NLG',value:''},
            {text: 'Filezilla',value:''},
            {text: 'SDLC',value:''},
            {text: 'TOGAF & MBDL',value:''},
            {text: 'Putty',value:''},
            {text: 'Git',value:''}
        ]
        // {text: 'nodejs',value: 11},
    }
    render() {
        return (
            <div id="main_center_div">
                <div className="row">
                    <div className="col-sm-7"><GenericComponent tag="Summary" grid_col_val="col-sm-12" url="./resources/summary.json"/></div>
                    <div className="col-sm-5"><WordCloud words={this.skills}/></div>
                </div>

                <div className="row">
                    <GenericComponent tag="Education" grid_col_val="col-sm-6" url="./resources/education.json"/>
                    <GenericComponent tag="Certification" grid_col_val="col-sm-6"
                                      url="./resources/certifications.json"/>
                </div>

                <div className="row">
                    <div className="col-sm-10">
                        <GenericComponent tag="Experience" grid_col_val="col-sm-12" url="./resources/prof_expr.json"/>
                    </div>
                    <div className="col-sm-2"><RightComponent/></div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <GenericComponent tag="Projects" grid_col_val="col-sm-12" url="./resources/projects.json"/>
                    </div>
                </div>
            </div>
        )
    }
}