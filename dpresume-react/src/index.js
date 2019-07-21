import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import BaseResumeApp from './components/BaseResumeApp'
import BaseResumeAppTabbed from './components/BaseResumeAppTabbed'
import BaseResumeAppNaive from './components/BaseResumeAppNaive'

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
        this.tabs=['tab1','tab2','tab3']
    }

    componentDidMount() {
        this.handleTabClick('tab3')
    }

    handleTabClick=(id)=>{
        for(let i=0;i<this.tabs.length;i++){
            document.getElementById(this.tabs[i]).style.display = 'none';
        }
        document.getElementById(id).style.display='block'
    }

    render() {
        return (
            <div>
                <div id="bottomPane" className="bg-dark fixed-bottom" style={{padding:'2px',width:'100%'}}>
                    <span className="btn btn-primary font-weight-bold text-white" onClick={()=>this.handleTabClick('tab2')}>Default</span>
                    <span className="btn btn-primary font-weight-bold text-white" onClick={()=>this.handleTabClick('tab1')}>Tabbed</span>
                    <span className="btn btn-primary font-weight-bold text-white" onClick={()=>this.handleTabClick('tab3')}>Naive</span>
                </div>

                <div className="container">
                    <div id="tabs" ref={this.tabs} className="">
                        <div id="tab1" ref={this.tab1} style={{display:'none'}}><BaseResumeAppTabbed/></div>
                        <div id="tab2" ref={this.tab2} style={{display:'none'}}><BaseResumeApp/></div>
                        <div id="tab3" ref={this.tab2} style={{display:'none'}}><BaseResumeAppNaive/></div>
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
