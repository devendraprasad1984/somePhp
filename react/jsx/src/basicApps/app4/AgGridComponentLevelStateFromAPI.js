import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios'
import NumberFormatter from './numberFormatter'
import NumericCellEditor from './NumericCellEditor'
import CustomFilter from './CustomFilter'


//frameworkComponents - tell aggrid about custom formatting options
export default class AgGridComponentLevelStateFromAPI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            columnDefs: [
                {headerName: "Make", field: "make"},
                {headerName: "Model", field: "model", editable: true},
                {headerName: "Price", field: "price", editable: true
                    ,cellRenderer:'NumberFormatterFunc'
                    , cellEditor:'NumericCellEditorFunc'
                    ,filter: 'CustomFilterFunc'
                }

            ],
            countOfData: 0,
            rowData: [],
            frameworkComponents: {
                'NumberFormatterFunc': NumberFormatter,
                'NumericCellEditorFunc': NumericCellEditor,
                'CustomFilterFunc': CustomFilter,
            }
        }
    }

    getDataFromApi = async () => {
        // fetch('https://api.myjson.com/bins/15psn9')
        //     .then(result => result.json())
        //     .then(rowData => this.setState({rowData}))
        const url = 'https://api.myjson.com/bins/15psn9'
        const res = await axios.get(url)
        this.setState({rowData: res.data, countOfData: res.data.length})
    }

    componentDidMount() {
        this.getDataFromApi()
    }

    render() {
        return (
            <div className="ui segment">
                <div className="badge badge-danger">
                    using component level state - fromP API
                    <p className="badge badge-warning">found: {this.state.countOfData}</p>
                </div>
                <div><p>using custom input, number validation, cellRenderer and custom filter</p></div>

                <div className="ag-theme-balham" style={{height: '300px', width: '100%', overflow: 'auto'}}>
                    <AgGridReact
                        enableFilter={true}
                        enableSorting={true}
                        frameworkComponents={this.state.frameworkComponents}
                        pagination={true}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}>
                    </AgGridReact>
                </div>
            </div>
        );
    }
}
