import React from "react";
import faker from 'faker'
// import ComponentApprovalCard from './ComponentApprovalCard'


//function based component ES2015 types
const ComponentDetails = (props) => {
    return (
        <div className="card">
            <div className="comment">
                <a href="/" className="avatar">
                    <img src={faker.image.avatar()} alt="avatar" className="right floated mini ui image"/>
                </a>
                <span><a href="/" className="header">{props.author}</a></span>
                <div className="content">
                    <div className="text"><span>{props.commentText}</span></div>
                    {/*<a href="" className="author">{props.author} - {faker.name.findName()} | {faker.internet.email()}</a>*/}
                    <label
                        className="metadata"><label>lives
                        in {faker.address.city()} - {faker.address.country()}</label></label><br/>
                    <label className="metadata"><label className="date">{props.postedAt}</label></label><br/>
                </div>
            </div>
            {/*<div>*/}
                {/*<ComponentApprovalCard></ComponentApprovalCard>*/}
            {/*</div>*/}



        </div>
    )
}


export default ComponentDetails
