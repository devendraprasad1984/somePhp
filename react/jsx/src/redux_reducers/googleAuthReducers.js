import {combineReducers} from 'redux'

const INITIAL_STATE={
    isSignedIn:null
    ,userId:null
}

const authReducer= (state=INITIAL_STATE,action)=>{
    console.log("auth reducer info",state)
    switch (action.type) {
        case 'SIGN_IN':
            return {...state,isSignedIn:true, userId:action.payload.userId}
        case 'SIGN_OUT':
            return {...state,isSignedIn:false, userId: null}
        default:
            return state
    }
}

export default combineReducers({
    authFromReducer:authReducer
})