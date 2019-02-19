import React from 'react'
import axios from 'axios'

class PostToDoResourceList extends React.Component {
    state = {resources: []}
    resourceList=[]

    apiCallBack = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resourceValue}`)
        this.setState({resources: response.data})
        console.log("data from api on click on posts and todos", response)
        //this.resourceList=reuseResources(this.props.resourceValue)
        this.resourceList=this.state.resources
    }

    componentDidMount() {
        this.apiCallBack()
    }

    //this issue to mount and update life cycle bug (if not matched prev vs this.prop), can be easily sorted out with functional component and hook

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.resourceValue !== this.props.resourceValue) {
            this.apiCallBack()
        }
    }


    renderList = () => {
        return this.resourceList.map((elm) => {
            return (
                <li key={elm.id}>{elm.title}</li>
            )
        })
    }

    render() {
        return (
            <div>
                <div><span>rendering this prop inside class based component from functional component using hook</span>
                </div>
                <div>{this.props.resourceValue}</div>
                <div>fetched: {this.state.resources.length}</div>
                <div style={{height:'200px', overflow:'auto'}}><ul>{this.renderList()}</ul></div>
            </div>
        )
    }
}

export default PostToDoResourceList


//for reusability with hooks
const reuseResources=(resVal)=>{
    const [resourceList, setResourceList] = React.useState([]);
    const fetchDataFromApi = async (resVal) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resVal}`)
        setResourceList(response.data)
    }

    React.useEffect(() => {
        fetchDataFromApi(resVal);
    }, [resVal])

    return resourceList
}

export const PostToDoResourceList_Func_Component_hook = (props) => {
    // state = {resources: []}
    // const [resourceList, setResourceList] = React.useState([]);

    // const fetchDataFromApi = async (resVal) => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resVal}`)
    //     setResourceList(response.data)
    //     console.log("data from api on click on posts and todos", resourceList)
    // }
    //
    // //useEffect hook combines the behaviour of componentDidMount and ComponentDidUpdate
    // React.useEffect(() => {
    //     fetchDataFromApi(props.resourceValue);
    // }, [props.resourceValue])
    // //with every render useEffect param i.e array,if different will rerender and called
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
            <div><span>PostToDoResourceList_Func_Component_hook</span></div>
            <div>selected value in functional hooked compoent is : {props.resourceValue}</div>
            <div className="ui label primary">fetched: {resourceList.length} - {props.resourceValue}</div>
            <div style={{height:'200px', overflow:'auto'}}><ul>{renderList()}</ul></div>
        </div>
    )
}
