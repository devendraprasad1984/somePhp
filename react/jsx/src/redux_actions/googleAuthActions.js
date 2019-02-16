import streams from '../api/streams'
import * as x from '../types'
import browserHistory from '../browserHistory'

export const signIn = (userId) => {
    return {
        type: x.SIGN_IN
        , payload: {
            userId: userId
        }
    }
}

export const signOut = () => {
    return {
        type: x.SIGN_OUT
    }
}

//history - of navigational references
//formValues from page this reducer is passed in
//browser routed listens all history of navigatoinal changes as well
export const createStream = (formValues) => {
    //because we are using thunk
    return async (dispatch, getState) => {
        // const userId=getState().authFromReducer.userId
        const {userId} = getState().authFromReducer
        // console.log(getState().authFromReducer.userId)
        // const response = await streams.post('/streams', formValues)
        const response = await streams.post('/streams', {...formValues, userId})
        dispatch({type: x.CREATE_STREAM, payload: response.data})
        //    navigate user back to the home page once successful submission
        console.log("history of navigations", browserHistory)
        browserHistory.push('/')
    }
}

export const fetchStreams = () => {
    //because we are using thunk
    return async (dispatch) => {
        const response = await streams.get('/streams')
        dispatch({type: x.FETCH_STREAMS, payload: response.data})
    }
}

export const fetchStreamById = (streamId) => {
    //because we are using thunk
    return async (dispatch) => {
        const response = await streams.get('/streams/' + streamId)
        dispatch({type: x.FETCH_STREAM_BY_ID, payload: response.data})
    }
}

export const editStreamById = (streamId, formValues) => {
    //because we are using thunk
    //if only some values need updates as part rest convension, use PATCH instead of PUT
    return async (dispatch,getState) => {
        const {userId} = getState().authFromReducer
        const response = await streams.patch('/streams/' + streamId, {...formValues, userId})
        // const response = await streams.patch'/streams/' + streamId, formValues)
        dispatch({type: x.EDIT_STREAM_BY_ID, payload: response.data})
        browserHistory.push('/')
    }
}

export const deleteStreamById = (streamId) => {
    //because we are using thunk
    return async (dispatch) => {
        await streams.delete('/streams/' + streamId)
        dispatch({type: x.DELETE_STREAM_BY_ID, payload: streamId})
        browserHistory.push('/')
    }
}
