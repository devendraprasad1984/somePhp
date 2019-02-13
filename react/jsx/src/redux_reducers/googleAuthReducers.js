import {combineReducers} from 'redux'
import {reducer as redux_form_reducer} from 'redux-form'

const INITIAL_STATE={
    isSignedIn:null
    ,userId:null
}

const authReducer= (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case 'SIGN_IN':
            let objState={...state,isSignedIn:true, userId:action.payload.userId}
            console.log("from google auth signin",objState)
            return objState
        case 'SIGN_OUT':
            objState={...state,isSignedIn:false, userId: null}
            console.log("from google auth sigout",objState)
            return objState
        default:
            return state
    }
}

export default combineReducers({
    authFromReducer: authReducer
    ,form:redux_form_reducer
})

