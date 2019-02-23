import React, {Component} from 'react';

export default class CustomFilter extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter: ''
        };
        this.input=React.createRef()
        this.valueGetter = this.props.valueGetter; //func through props
        // Notice that we also receive the valueGetter function through component props.
        // It’s the function provided by ag-Grid to retrieve the current value of a cell
    }

    isFilterActive() {
        return this.state.filter !== '';
    }

    doesFilterPass(params) {
        const filter = this.state.filter.split('-');
        const gt = Number(filter[0]);
        const lt = Number(filter[1]);
        const value = this.valueGetter(params.node);

        return value >= gt && value <= lt;
    }

    getModel() {
        return {filter: this.state.filter};
    }

    setModel(model) {
        const filter = model ? model.filter : '';
        this.setState({filter: filter});
    }

    afterGuiAttached(params) {
        this.input.current.focus();
    }


    // Whenever there’s a change in the filtering condition, we not only need to update the state but also notify
    // ag-Grid about the change. We can do that by calling the filterChangedCallback that ag-Grid provides for us through
    //the component props. Let’s modify the call to setState a little bit and add the notification logic:


    // Next, we need to implement the doesFilterPass method that performs filtering. It’s called by ag-Grid to determine whether a
    // value passes the current filtering condition or not. We also need to implement the method isFilterActive that is used by ag-Grid
    // to determine whether the component has any filtering condition to apply.


    onSubmit=(event)=> {
        event.preventDefault();

        let filterValFromFromElem = event.target.elements.filter.value;

        if (this.state.filter !== filterValFromFromElem) {
            this.setState({filter: filterValFromFromElem});
        }
    }

    onChange=(event)=>{
        let filterValFromFromElem = event.target.elements.filter.value;
        if(this.state.filter!==filterValFromFromElem){
            this.setState({filter:filterValFromFromElem},()=>{
                /* notify ag-Grid about the change */
                this.props.filterChangedCallback()
            })
        }
    }



    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input ref={this.input} name="filter" defaultValue={this.state.filter}/>
                <button>Apply</button>
            </form>
        );
    }
}