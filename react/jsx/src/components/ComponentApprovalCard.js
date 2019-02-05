import React from "react";


//function based component ES2015 types
const ComponentApprovalCard = (props) => {
    return (
        <div className="ui card">
            <div>{props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <span className="ui basic green button">Approve</span>
                    <span className="ui basic red button">Reject</span>
                </div>
            </div>
        </div>
    )
}


export default ComponentApprovalCard
