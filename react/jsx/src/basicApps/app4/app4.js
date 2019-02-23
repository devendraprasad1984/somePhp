import React, {Component} from 'react';
import AgGridComponentLevelState from "./AgGridComponentLevelState";
import AgGridComponentLevelStateFromAPI from "./AgGridComponentLevelStateFromAPI";
import './custom.css'

export default class App4ReactAgGrid extends Component {
    render() {
        return (
            <div className="ui segment">
                <span>AgGrid Example using React</span>
                <AgGridComponentLevelState/>
                <AgGridComponentLevelStateFromAPI/>
            </div>
        );
    }
}
