import React from 'react'

export class ImageCard extends React.Component{
    constructor(props){
        super(props)
        this.state={imag_span:0}
        //Refs are used to take ref of any single DOM element, and can access and alter it
        this.imageRef=React.createRef()

    }

    componentDidMount() {
        //set current image height to better fit in card layout
        console.log("img ref usage",this.imageRef,this.imageRef.current,this.imageRef.current.clientHeight)
        // this.imageRef.current.addEventListener('load',()=>{})
        // this.imageRef.current.addEventListener('load',()=>{return this.setSpansValueOfImg()})
        this.imageRef.current.addEventListener('load',this.setSpansValueOfImg)
    }

    setSpansValueOfImg=()=>{
        console.log("from image spans setter",this.imageRef.current.clientHeight)
        let height=this.imageRef.current.clientHeight
        let spans=Math.ceil(height)
        this.setState({imag_span:spans})
    }

    render(){
        this.imageSrc=this.props.src
        return(
            <div style={{gridRowEnd:`span ${this.state.span}`}}>
                <img ref={this.imageRef} src={this.imageSrc.urls.regular} alt={this.imageSrc.description}/>
            </div>
        )
    }
}