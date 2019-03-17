import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import redux_reducers from '../redux_reducers'
import SongList from './SongList'
import SongCurrentComponent from "./SongCurrentComponent";

//if you want to make use of redux for state management, you can make use of functional component
//class based component are better place when we want to manage states within react itself
//but either or mixed such components are just fine

//react-redux lib- helper function created in react to interact with redux
//redux is not meant only to be working with react
//provider and connect components : provider (accepts states from redux store & works on top of the react application ever on top of APP and provides the states to all components as child)
//and connect components connects provider and other components in the app not using PROP but via Contexts (no need of parent child wiring, any child can access the contexts)

export class AppSongs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            song: ''
        }
    }

    callBackFunc = (cursong) => {
        console.log('click in parent from child - ', cursong)
        this.setState({song: cursong.title+" => "+cursong.detail+" => "+cursong.duration})
    }

    render() {
        return (
            <div className="container-fluid">
                <Provider store={createStore(redux_reducers)}>
                    <div>
                        <span>Songs components using Redux goes here, also parent-child and child-parent comms</span>
                        <div className="ui grid">
                            <div className="ui row">
                                <div className="column nine wide">
                                    <SongList callBackFunc={this.callBackFunc}/>
                                </div>
                                <div className="column three wide">
                                    <div className="badge badge-danger" style={{width:'100%',height:'300px', fontSize:'20pt'}}   >you have selected: {this.state.song}</div>
                                    {/*<SongCurrentComponent curSong="this is cur song" />*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </Provider>
            </div>
        )
    }
}
