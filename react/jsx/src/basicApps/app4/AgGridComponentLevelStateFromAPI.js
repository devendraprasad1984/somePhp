"use strict";

import React, {Component} from 'react';
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios'
import NumberFormatter from './numberFormatter'
import NumericCellEditor from './NumericCellEditor'
import CustomFilter from './CustomFilter'
import {DefMakeModelDataSet, DefCountryAthelete} from './ColDefDataSet'

//frameworkComponents - tell aggrid about custom formatting options
export default class AgGridComponentLevelStateFromAPI extends Component {
    def = DefMakeModelDataSet()

    constructor(props) {
        super(props)
        this.state = {
            api: this.def.api,
            columnDefs: this.def.colDef,
            countOfData: 0,
            rowData: [],
            style: {
                width: '100%',
                height: '100%'
            },
            frameworkComponents: {
                'NumberFormatterFunc': NumberFormatter,
                'NumericCellEditorFunc': NumericCellEditor,
                'CustomFilterFunc': CustomFilter,
            },
            defaultColDef: {
                enableRowGroup: false,
                enablePivot: false,
                enableValue: false,
                sortable: true,
                filter: true,
                resizable: true,
                animateRows: false,

            },
            statusBar: {
                statusPanels: [
                    {
                        statusPanel: "agAggregationComponent"
                        , statusPanelParams: {
                            aggFuncs: ['min', 'max', 'avg', 'count', 'sum']
                        }
                    }
                ]
            },
        }
    }

    // state.statusBar: {
    //     statusPanels: [
    //         {
    //             statusPanel: "agTotalRowCountComponent",
    //             align: "left"
    //         },
    //         {statusPanel: "agFilteredRowCountComponent"},
    //         {statusPanel: "agSelectedRowCountComponent"},
    //         {statusPanel: "agAggregationComponent"}
    //         ]
    // }

    fillLarge() {
        this.setWidthAndHeight('100%', '100%');
    }

    fillMedium() {
        this.setWidthAndHeight('60%', '60%');
    }

    fillExact() {
        this.setWidthAndHeight('400px', '400px');
    }

    setAutoHeight() {
        this.gridApi.setDomLayout("autoHeight");
        // document.querySelector("#myGrid").style.height = "";
    }

    setFixedHeight() {
        this.gridApi.setDomLayout("normal");
        // document.querySelector("#myGrid").style.height = "400px";
    }

    getDataFromApi = async () => {
        // fetch('https://api.myjson.com/bins/15psn9')
        //     .then(result => result.json())
        //     .then(rowData => this.setState({rowData}))
        const url = this.state.api
        const res = await axios.get(url)
        this.setState({rowData: res.data, countOfData: res.data.length})
    }

    componentDidMount() {
        this.getDataFromApi()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState, this.state)
        this.gridApi.doLayout();
        if (prevState.api !== this.state.api) {
            this.getDataFromApi()
        }
    }

    dataSetChangeHandler = (type) => {
        switch (type) {
            case 'set1':
                this.def = DefMakeModelDataSet()
                this.setState({columnDefs: this.def.colDef, api: this.def.api})
                return
            case 'set2':
                this.def = DefCountryAthelete()
                this.setState({columnDefs: this.def.colDef, api: this.def.api})
                return
            default:
                return
        }
    }

    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        // const httpRequest = new XMLHttpRequest();
        // const updateData = data => {
        //     params.api.setRowData(data.slice(0, 50));
        // }
    }

    onBtForEachNode() {
        console.log("### api.forEachNode() ###");
        this.gridApi.forEachNode(this.printNode);
    }

    onBtForEachNodeAfterFilter() {
        console.log("### api.forEachNodeAfterFilter() ###");
        this.gridApi.forEachNodeAfterFilter(this.printNode);
    }

    onBtForEachNodeAfterFilterAndSort() {
        console.log("### api.forEachNodeAfterFilterAndSort() ###");
        this.gridApi.forEachNodeAfterFilterAndSort(this.printNode);
    }

    onBtForEachLeafNode() {
        console.log("### api.forEachLeafNode() ###");
        this.gridApi.forEachLeafNode(this.printNode);
    }

    printNode(node, index) {
        if (node.group) {
            console.log(index + " -> group: " + node.key);
        } else {
            console.log(index + " -> data: " + node.data.country + ", " + node.data.athlete);
        }
    }

    printAllDisplayedRows() {
        var count = this.gridApi.getDisplayedRowCount();
        console.log("## printAllDisplayedRows");
        for (var i = 0; i < count; i++) {
            var rowNode = this.gridApi.getDisplayedRowAtIndex(i);
            console.log("row " + i + " is ", rowNode.data);
        }
    }

    printPageDisplayedRows() {
        var rowCount = this.gridApi.getDisplayedRowCount();
        var lastGridIndex = rowCount - 1;
        var currentPage = this.gridApi.paginationGetCurrentPage();
        var pageSize = this.gridApi.paginationGetPageSize();
        var startPageIndex = currentPage * pageSize;
        var endPageIndex = (currentPage + 1) * pageSize - 1;
        if (endPageIndex > lastGridIndex) {
            endPageIndex = lastGridIndex;
        }
        console.log("## printPageDisplayedRows");
        for (var i = startPageIndex; i <= endPageIndex; i++) {
            var rowNode = this.gridApi.getDisplayedRowAtIndex(i);
            console.log("row " + i + " is " + rowNode.data.athlete);
        }
    }

    setWidthAndHeight(width, height) {
        this.setState(function (oldState) {
            return Object.assign(oldState, {
                style: {
                    width: width,
                    height: height
                }
            });
        });
    }


    render() {
        return (
            <div className="ui segment">
                <div className="badge badge-danger">
                    using component level state - fromP API
                    <p className="badge badge-warning">found: {this.state.countOfData}</p>
                </div>
                <div><p>using custom input, number validation, cellRenderer and custom filter</p></div>

                <div>
                    <button className="btn btn-info" onClick={this.onBtForEachNode.bind(this)}>For-Each Node</button>
                    <button className="btn btn-info" onClick={this.onBtForEachNodeAfterFilter.bind(this)}>For-Each Node
                        After Filter
                    </button>
                    <button className="btn btn-info" onClick={this.onBtForEachNodeAfterFilterAndSort.bind(this)}>
                        For-Each Node After Filter and Sort
                    </button>
                    <button className="btn btn-info" onClick={this.onBtForEachLeafNode.bind(this)}>For-Each Leaf Node
                    </button>
                    <button className="btn btn-info" onClick={this.printAllDisplayedRows.bind(this)}>Print All Displayed
                        Rows
                    </button>
                    <button className="btn btn-info" onClick={this.printPageDisplayedRows.bind(this)}>Print Page
                        Displayed Rows
                    </button>
                    <button onClick={this.setAutoHeight.bind(this)}>Auto Height</button>
                    <button onClick={this.setFixedHeight.bind(this)}>Fixed Height</button>
                </div>

                <div>
                    <button className="btn btn-primary" onClick={() => this.dataSetChangeHandler('set1')}>Make Model
                    </button>
                    <button className="btn btn-primary" onClick={() => this.dataSetChangeHandler('set2')}>Country Athelete
                    </button>
                </div>

                <div className="ag-theme-balham" style={{height: '300px', width: '100%', overflow: 'auto'}}>
                    <AgGridReact
                        frameworkComponents={this.state.frameworkComponents}
                        columnDefs={this.state.columnDefs}
                        defaultColDef={this.state.defaultColDef}
                        rowData={this.state.rowData}
                        enableRangeSelection={true}
                        statusBar={this.state.statusBar}
                        onGridReady={this.onGridReady}
                        pagination={true}
                    >
                    </AgGridReact>

                </div>
            </div>
        );
    }
}
