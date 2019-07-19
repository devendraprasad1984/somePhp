import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import BaseResumeApp from './components/BaseResumeApp'
import BaseResumeAppTabbed from './components/BaseResumeAppTabbed'

export default class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.tabs=React.createRef()
        this.tab1=React.createRef()
        this.tab2=React.createRef()
        // this.styleTopBar={
        //     top:0,
        //     position:'relative',
        //     zIndex:10,
        //     padding:'10px'
        // }
    }

    componentDidMount() {
        this.handleTabClick('tab1')
    }

    handleTabClick=(id)=>{
        let tabs=['tab1','tab2']
        for(let i=0;i<tabs.length;i++){
            document.getElementById(tabs[i]).style.display = 'none';
        }
        document.getElementById(id).style.display='block'
    }

    render() {
        return (
            <div>
                <div className="container bg-light" style={{padding:'5px',width:'100%'}}>
                    <span className="btn btn-primary" onClick={()=>this.handleTabClick('tab1')}>Tabbed</span>
                    <span className="btn btn-primary" onClick={()=>this.handleTabClick('tab2')}>Simple</span>
                </div>

                <div className="container">
                    <div id="tabs" ref={this.tabs} className="">
                        <div id="tab1" ref={this.tab1} style={{display:'none'}}><BaseResumeAppTabbed/></div>
                        <div id="tab2" ref={this.tab2} style={{display:'none'}}><BaseResumeApp/></div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Tabs/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
