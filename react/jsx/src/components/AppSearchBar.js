import React from 'react'
import axios from 'axios'
import {SearchBar} from "./searchBarAndList";
import unsplash from '../api/unsplash'
import {ImageListFunctionalComponent} from './imageListFunctionalComponent'

export class AppSeachBar extends React.Component {
    constructor(props){
        super(props)
        this.state={photos:[]}
        // this.onSearchBarSubmitAsync=this.onSearchBarSubmitAsync.bind(this)
    }
    onSearchBarSubmit(searchText) {
        //use aysnc promise (resolve/reject) or then chain as a callback when this async unsplash request finishes
        console.log("search AppSearchBar Submit", searchText)
        axios.get('https://api.unsplash.com/search/photos',{
            params:{query:searchText},
            headers:{
                Authorization:'Client-ID ecb0850d9f40b41be2ad14fcb56a4e10488caf3f4c56a725445ed6d1085da5e4'
            }
        }).then((responseFromApi)=>{
            console.log("image list response back",responseFromApi.data.results)
            // responseFromApi.data.results.map((elm)=>{
            //     console.log(elm.urls.regular)
            // })
        })
    }
    // async onSearchBarSubmitAsync(searchText){
    onSearchBarSubmitAsync=async(searchText)=>{
        //use aysnc promise (resolve/reject) or then chain as a callback when this async unsplash request finishes
        console.log("search AppSearchBar async Submit", searchText)
        //wrapping axios call into relevent api calls like so--see unsplash js fileAW
        const responseFromAsyncApiCall=await unsplash.get('/search/photos',{
            params:{query:searchText}
        })
        console.log("promise async await api call",responseFromAsyncApiCall)
        this.setState({photos:responseFromAsyncApiCall.data.results})
        // responseFromAsyncApiCall.data.results.map((elm)=>{
        //     console.log(elm.urls.regular)
        // })
        console.log("state images object",this.state.photos)
    }

    render() {
        return (
            <div className="ui container">
                <span>Search Bar Component</span><br/>
                <SearchBar onSeachSubmitFromAppSearchBar={this.onSearchBarSubmitAsync}></SearchBar><br/>
                <span>found:{this.state.photos.length} images</span>
                <ImageListFunctionalComponent allImages={this.state.photos} />
            </div>
        )
    }
}

//{/*search bar api handle is to be done by app component*/}
//{/*for this child value of search to be made available to parent app component*/}
//{/*in the form of function callback from parent to child*/}-- >-->
