import React from "react";



const clickApprove=(props)=>{
    const {author,commentText}=props.children.props
    console.log("props",props.children.props)
    alert("approved "+author+" -> "+commentText)
}
const clickReject=(props)=>{
    const {author,commentText}=props.children.props
    alert("rejected "+author+" -> "+commentText)
}

//function based component ES2015 types
const ComponentApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div>{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <span className="ui basic green button" onClick={()=>clickApprove(props)}>Approve</span>
                    <span className="ui basic red button" onClick={()=>clickReject(props)}>Reject</span>
                </div>
            </div>
        </div>
    )
}


export default ComponentApprovalCard
