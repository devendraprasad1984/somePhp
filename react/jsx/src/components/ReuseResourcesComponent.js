import React from 'react'
import reuseResources from './reuseResources'


export const ReuseResourcesComponent = (props) => {
    let resourceList=[]
    resourceList=reuseResources(props.resourceValue)
    
    const renderList = () => {
        return resourceList.map((elm) => {
            return (
                <li key={elm.id}>{elm.title}</li>
            )
        })
    }
    return (
        <div>
            <div><span>Reusing component based on hooks, function that can be reused is in seprate file importable</span></div>
            <div>selected value in functional hooked compoent is : {props.resourceValue}</div>
            <div className="ui label primary">fetched: {resourceList.length} - {props.resourceValue}</div>
            <div style={{height:'200px', overflow:'auto'}}><ul>{renderList()}</ul></div>
        </div>
    )
}
