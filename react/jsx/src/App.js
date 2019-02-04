import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import {SearchBar} from "./searchBarAndList";

//class based component
class App extends Component {
    // onSearchSubmit(searchTerm) {
    //     console.log("searched app value is", searchTerm)
    // }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>

                {/*/!*search bar api handle is to be done by app component*!/*/}
                {/*/!*for this child value of search to be made available to parent app component*!/*/}
                {/*/!*in the form of function callback from parent to child*!/*/}
                {/*/!*{in such cases property must be the exact event handler as in child component}*!/*/}
                {/*<SearchBar onClick={this.onSearchSubmit}/>*/}

            </div>
        );
    }
}


export default App;
