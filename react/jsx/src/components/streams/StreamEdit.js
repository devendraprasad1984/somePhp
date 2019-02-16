import React from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchStreamById, editStreamById} from '../../redux_actions/googleAuthActions'
import StreamForm from './StreamForm'


class StreamEdit extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchStreamById(this.props.match.params.id)
    }

    onEditSubmit = (formValues) => {
        this.props.editStreamById(this.props.match.params.id, formValues)
    }

    displayFoundStream = () => {
        if (!this.props.foundStreamById) {
            return <div><span>Loading, please wait...</span></div>
        }
        return (
            <div className="content">
                <span>common form component draw same as StreamCreate - but with some edit init props</span>
                <span>1st option for Redux Form initial values ties back to Field name</span>
                {/*you can use _.pick(object, list of all values to extract) as well*/}
                {/*1st case is always appropriate, pass only what is needed and not everything like the 2nd case*/}
                <StreamForm
                    initialValues={{
                        title: this.props.foundStreamById.title,
                        description: this.props.foundStreamById.description
                    }}
                    onSubmit={this.onEditSubmit}></StreamForm>
                {/*initialValues is special redux form property and it looks for Field object with the same name as that these props supplied e.g. title and description and ties back to its values automatically*/}

                {/*<span>2nd option for Redux Form initial values ties back to Field name</span>*/}
                {/*<StreamForm initialValues={this.props.foundStreamById} onSubmit={this.onEditSubmit}></StreamForm>*/}


                {/*<span>Manual Form Draw</span>*/}
                {/*<form className="ui form">*/}
                    {/*<div><label>id</label><input type="text" value={this.props.foundStreamById.id}/></div>*/}
                    {/*<div><label>title</label><input type="text" value={this.props.foundStreamById.title}/></div>*/}
                    {/*<div><label>description</label><input type="text" value={this.props.foundStreamById.description}/>*/}
                    {/*</div>*/}
                {/*</form>*/}
                {/*<div>*/}
                    {/*<button onSubmit={this.onEditSubmit} className="ui button primary">Update</button>*/}
                    {/*<Link to="/" className="ui button secondary">Cancel</Link>*/}
                {/*</div>*/}
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
    fetchStreamById, editStreamById
})(StreamEdit)


//262