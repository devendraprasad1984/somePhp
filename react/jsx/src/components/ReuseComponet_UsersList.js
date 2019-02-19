import React from 'react'
import reuseResources from './reuseResources'


export const ReuseComponet_UsersList = () => {
    let resourceList=[]
    resourceList=reuseResources('users')

    const renderList = () => {
        return resourceList.map((elm) => {
            return (
                <li key={elm.id}>{elm.name}</li>
            )
        })
    }
    return (
        <div>
            <div><span>Reusing component reuseResources and printing users list</span></div>
            <div className="ui label red">fetched: {resourceList.length} - users</div>
            <div style={{height:'200px', overflow:'auto'}}><ul>{renderList()}</ul></div>
        </div>
    )
}
