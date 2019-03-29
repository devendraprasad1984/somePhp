import React, {Component} from 'react'
import axios from "axios";
import '../styles/RightComponent.css'


export default class RightComponent extends Component {
    url = "./resources/skills.json"
    state = {
        skills: {
        }
    }

    getskill_data = async () => {
        const res=await axios.get(this.url)
        this.setState({skills: res.data.skills})
        // console.log(this.state.skills)
    }

    componentDidMount() {
        this.getskill_data()
    }

    display = () => {
        let vals=this.state.skills
        // console.log("vals",vals)
        return Object.keys(vals).map((k,id) => {
            return (
                <div className="right_skills" key={"id" + id} >
                    <div className="bg-danger text-white font-weight-bolder">{k}</div>
                    {vals[k].map((v,id)=>{return <div key={"id"+k+id} className="color-1">{v}</div>})}
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <div className="bg-primary text-white font-weight-bolder">Skills</div>
                <div style={{overflow:'auto', height:'400px'}}>
                    {this.display()}
                </div>
            </div>
        )
    }
}