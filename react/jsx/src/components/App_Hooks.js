import React,{ useState } from 'react'
import PostToDoResourceList, {PostToDoResourceList_Func_Component_hook} from "./PostToDoResourceList";
import {ReuseResourcesComponent} from "./ReuseResourcesComponent";
import {ReuseComponet_UsersList} from "./ReuseComponet_UsersList";

//     //hook functions in react for functional components to behave like classbased components are
//     //useState, useEffect, useContext, userRef, userReducer


// class App_Hooks extends React.Component{
//     state={resource:'posts'}
//     render(){
//         return(
//             <div>
//                 <span>App Hooks - bridge between class based and functional component</span>
//                 <p>this component is an example of stateful class based component</p>
//                 <div>
//                     <button onClick={()=>this.setState({resource:'posts'})} className="ui button green">Posts</button>
//                     <button onClick={()=>this.setState({resource:'todos'})} className="ui button green">Todos</button>
//                 </div>
//                 <h1 className="ui label red">{this.state.resource}</h1>
//             </div>
//         )
//     }
// }
//
// export default App_Hooks

//works like getter/setter
//hooks work with react 16.8.0 onwards, use react/react-dome:"next" in package.json
 const HooksApp = () => {
    const [resource, setResource] = useState('posts'); //array destucturing, useState returns a dispatcher object
    // first arg is any var to hold init values from useState
    //  second is the function call back that will be used when we want to update the var(1st arg) and rerender the component
    // this names can be anything, but we would keep the meaningful names to relate to operation

    return (
        <div>
            <span>App Hooks - bridge between class based and functional component</span>
            <p>this component is an example of stateful class based component - using Hooks of React16.8.0 </p>
            <div>
                <button onClick={() => setResource('posts')} className="ui button green">Posts
                </button>
                <button onClick={() => setResource('todos')} className="ui button green">Todos
                </button>
            </div>
            <h1 className="ui label red">selected value is: {resource}</h1>
            <PostToDoResourceList resourceValue={resource} />
            <PostToDoResourceList_Func_Component_hook resourceValue={resource}  />
            <ReuseResourcesComponent resourceValue={resource}  />
            <ReuseComponet_UsersList />
        </div>
    );
};


export default HooksApp