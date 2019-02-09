import jsonPlaceHolder from '../api/jsonPlaceHolder'

// export const fetchPosts=async ()=>{
//     //this can be done but is bad appraoch, as with every state change it will be calling every time
//     //we are breaking rules of redux action creaters here
//     //use cusom middle ware api here which redux-thunk
//     const response=await jsonPlaceHolder.get('/posts')
//     return{
//         type:'FETCH_POSTS'
//         ,payload:response
//     }
// }

//redux thunk only return a function to action creators and automatically executes it
//KEY: with redux-thunk we can manually dispatch an action creators and hence solves above problem to automatic reload everytime a state changes
// see over thunk git - https://github.com/reduxjs/redux-thunk/blob/master/src/index.js
//that all it does...

// export const fetchPosts=()=>{
//     return function(dispatch,getstate){
//         const promise=jsonPlaceHolder.get('/posts')
//         return{
//             type:'FETCH_POSTS'
//             ,payload:promise
//         }
//     }
// }

export const fetchPosts = () => {
    return {
        type: 'FETCH_POSTS'
    }
}
