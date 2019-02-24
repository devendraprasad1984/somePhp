"use strict";

export const DefMakeModelDataSet=()=>{
    let colDef=[
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model", editable: true},
        {headerName: "Price", field: "price", editable: true
            ,cellRenderer:'NumberFormatterFunc'
            , cellEditor:'NumericCellEditorFunc'
            ,filter: 'CustomFilterFunc'
        }
    ]
    let def={
        api:'https://api.myjson.com/bins/15psn9',
        colDef: colDef
    }
    return def
}

export const DefCountryAthelete=()=>{
    let colDef=[
        {
            headerName: "Athlete",
            field: "athlete",
            width: 150
        },
        {
            headerName: "Age",
            field: "age",
            width: 90
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
            width: 100,
            aggFunc: "sum"
        },
        {
            headerName: "Silver",
            field: "silver",
            width: 100,
            aggFunc: "sum"
        },
        {
            headerName: "Bronze",
            field: "bronze",
            width: 100,
            aggFunc: "sum"
        },
        {
            headerName: "Total",
            field: "total",
            width: 100,
            aggFunc: "sum"
        }
    ]
    let def={
        api:'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinnersSmall.json',
        colDef: colDef
    }
    return def
}