import React from 'react'
import HeaderComponent from "./HeaderComponent";
import '../styles/BaseResumeApp.css'
import TopComponent from "./TopComponent";
import GenericComponent from "./GenericComponent";
import Overview from "./Overview";

// import WordCloud  from './wordcloud'

class BaseResumeAppTabbed extends React.Component {
    constructor(props) {
        super(props)
        this.data = {
            "Summary": {
                "grid_col_val": "col-sm-12",
                "url": "./resources/summary.json"
            }, "Education": {
                "grid_col_val": "col-sm-12",
                "url": "./resources/education.json"
            }, "Certification": {
                "grid_col_val": "col-sm-12",
                "url": "./resources/certifications.json"
            }, "Experience": {
                "grid_col_val": "col-sm-12",
                "url": "./resources/prof_expr.json"
            }, "Projects": {
                "grid_col_val": "col-sm-12",
                "url": "./resources/projects.json"
            }, "Skills": {
                "grid_col_val": "col-sm-12",
                "url": "./resources/skills.json"
            },
        }
        this.state = {
            tag: "Summary",
            grid_col_val: this.data["Summary"].grid_col_val,
            url: this.data["Summary"].url
        }
    }

    componentDidMount() {
        // console.log(this.state)
        this.display()
    }

    updateData = (tagVal) => {
        this.setState({
            tag: tagVal,
            grid_col_val: this.data[tagVal].grid_col_val,
            url: this.data[tagVal].url
        })
        // this.componentDidMount()
    }

    display = () => {
        let {tag, grid_col_val, url} = this.state
        let elm = (<div>
            <GenericComponent tag={tag} grid_col_val={grid_col_val} url={url}/>
        </div>)
        // console.log(this.state,elm)
        return elm
    }

    render() {
        return (
            <div id="main_id" className="container">
                <div id="div_fix_top" className="row fixed-top">
                    <div className="col-lg-12 bg-dark">
                        <HeaderComponent/>
                    </div>
                    <div className="col-lg-12 bg-dark">
                        <TopComponent/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <div className="badge badge-primary" style={{cursor: 'pointer'}}
                             onClick={() => this.updateData("Summary")}>Summary
                        </div>
                        <br/>
                        <div className="badge badge-primary" style={{cursor: 'pointer'}}
                             onClick={() => this.updateData("Education")}>Education
                        </div>
                        <br/>
                        <div className="badge badge-success" style={{cursor: 'pointer'}}
                             onClick={() => this.updateData("Certification")}>Certification
                        </div>
                        <br/>
                        <div className="badge badge-primary" style={{cursor: 'pointer'}}
                             onClick={() => this.updateData("Experience")}>Experience
                        </div>
                        <br/>
                        <div className="badge badge-success" style={{cursor: 'pointer'}}
                             onClick={() => this.updateData("Projects")}>Projects
                        </div>
                        <br/>
                        <div className="badge badge-primary" style={{cursor: 'pointer'}}
                             onClick={() => this.updateData("Skills")}>Skills
                        </div>
                        <br/>
                    </div>
                    <div className="col-lg-10">
                        <div className="row" style={{marginBottom: '4em'}}>
                            <div className="col-lg-2" id="profile_img"><img src="./global/dp.png" alt=""/></div>
                            <div className="col-lg-10">
                                <Overview/>
                            </div>
                        </div>
                        {/*<div className=""><WordCloud words={this.skills}/></div>*/}
                        <div className="row">
                            {this.display()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseResumeAppTabbed

