"use strict";

import React, {Component} from "react";
import {AgGridReact} from "ag-grid-react";
// import "ag-grid-enterprise";

export default class TestAgComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Athlete",
                    field: "athlete",
                    width: 150
                },
                {
                    headerName: "Age",
                    field: "age",
                    width: 90,
                    minWidth: 50
                },
                {
                    headerName: "Country",
                    field: "country",
                    width: 120
                },
                {
                    headerName: "Year",
                    field: "year",
                    width: 90
                },
                {
                    headerName: "Date",
                    field: "date",
                    width: 110
                },
                {
                    headerName: "Sport",
                    field: "sport",
                    width: 110
                },
                {
                    headerName: "Gold",
                    field: "gold",
                    width: 100
                },
                {
                    headerName: "Silver",
                    field: "silver",
                    width: 100
                },
                {
                    headerName: "Bronze",
                    field: "bronze",
                    width: 100
                },
                {
                    headerName: "Total",
                    field: "total",
                    width: 100
                }
            ],
            rowData: null,
            statusBar: {
                statusPanels: [
                    {
                        statusPanel: "agAggregationComponent",
                        statusPanelParams: {
                            aggFuncs: ["sum", "avg"]
                        }
                    }
                ]
            }
        };
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;

        const httpRequest = new XMLHttpRequest();
        const updateData = data => {
            this.setState({rowData: data});
        };

        httpRequest.open(
            "GET",
            "https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json"
        );
        httpRequest.send();
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4 && httpRequest.status === 200) {
                updateData(JSON.parse(httpRequest.responseText));
            }
        };
    };

    render() {
        return (
            <div style={{width: "100%", height: "300px",overflow:'auto'}}>
                <div
                    id="myGrid"
                    style={{
                        height: "100%",
                        width: "100%"
                    }}
                    className="ag-theme-balham"
                >
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        enableRangeSelection={true}
                        statusBar={this.state.statusBar}
                        onGridReady={this.onGridReady}
                    />
                </div>
            </div>
        );
    }
}
