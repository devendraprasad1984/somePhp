import React from 'react'
import axios from 'axios'

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

export default reuseResources

