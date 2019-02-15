import React from "react";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchStreamById} from '../../redux_actions/googleAuthActions'

class StreamEditCopy extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchStreamById(this.props.match.params.id)
    }

    displayFoundStream = () => {
        if(!this.props.foundStreamById){
            return <div><span>Loading, please wait...</span></div>
        }
        return (
            <div className="content">
                <form className="ui form">
                    <div><label>id</label><input type="text" value={this.props.foundStreamById.id}/></div>
                    <div><label>title</label><input type="text" value={this.props.foundStreamById.title}/></div>
                    <div><label>description</label><input type="text" value={this.props.foundStreamById.description}/>
                    </div>
                </form>
                <div>
                    <button className="ui button primary">Update</button>
                    <Link to="/" className="ui button secondary">Cancel</Link>
                </div>
            </div>
        )
    }

    render() {
        console.log("Stream Edit Props and Route Props", this.props, this.props.match.params)
        return (
            <div>
                <span>stream edit</span>
                {/*<span>{Object.values(this.props.match.params)}</span>*/}
                {this.displayFoundStream()}

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // foundStreamById: state.streams[ownProps.match.params.id]
        foundStreamById: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {
    fetchStreamById
})(StreamEditCopy)
