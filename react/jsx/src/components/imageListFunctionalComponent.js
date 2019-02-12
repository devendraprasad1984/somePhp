import React from 'react'
import './imageList.css'
import {ImageCard} from "./imageCard";



export const ImageListFunctionalComponent = (props) => {
    console.log("ImageListFunctionalComponent images count", props.allImages.length)
    // const displayImages=()=>{
    //     console.log("log from displayImages",props.images)
    //     return (
    //         <div>images has count of: {props.allImages.length}</div>
    //     )
    // }
    //faster
    const images2display = props.allImages.map((image) => {
        return (
            <div>
                <ImageCard key={image.id} src={image} />
            </div>
        )
    })
    //slower as keys needs to be mapped behind the scenes for every call
    // const images2displayWithProps = props.allImages.map(({id, urls, description}) => {
    //     return (
    //         <img key={id} src={urls.regular} alt={description} style={imageStyle}/>
    //     )
    // })
    return (
        <div>
            <div>
                <span>this is image list - functional component</span>
                <span>{console.log("image list has props from parent app search bar", props)}</span>
                <p>all images goes here, we got {props.allImages.length} images from parent component</p>
            </div>
            <p>imageList goes here</p>
            <div className="imageList">{images2display}</div>
        </div>
    )
}