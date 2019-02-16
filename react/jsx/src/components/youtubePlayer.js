import React from 'react'

class YoutubePlayer extends React.Component {

    constructor(props) {
        super(props)
        // this.videoSrc = "https://www.youtube.com/embed/" +
        //     this.props.video + "?autoplay=" +
        //     this.props.autoplay + "&rel=" +
        //     this.props.rel + "&modestbranding=" +
        //     this.props.modest;
        this.videoSrc=this.props.video+"?rel="+this.props.rel
    }

    render() {
        return (
            <div>
                <div className="container">
                    <iframe className="player" type="text/html" width="100%" height="100%"
                            src={this.videoSrc}
                            frameBorder="0"/>
                </div>
            </div>
        )
    }
}


export default YoutubePlayer