import React from "react";
import ComponentDetails from './ComponentDetails'
import ComponentApprovalCard from './ComponentApprovalCard'

//function based component ES2015 types
const ComponentsTest = () => {
    return (
        <div className="ui cards">
            <ComponentApprovalCard>
                <ComponentDetails author="Sam" postedAt='04:00PM' commentText="comment1"></ComponentDetails>
            </ComponentApprovalCard>

            <ComponentApprovalCard>
                <ComponentDetails author="Jan" postedAt='08:00PM' commentText="comment2"></ComponentDetails>
            </ComponentApprovalCard>

            <ComponentApprovalCard>
                <ComponentDetails author="devendra" postedAt='06:10PM' commentText="comment3"></ComponentDetails>
            </ComponentApprovalCard>
        </div>
    )
}


export default ComponentsTest
