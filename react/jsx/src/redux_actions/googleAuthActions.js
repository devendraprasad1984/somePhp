import streams from '../api/streams'
import * as x from '../types'

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

export const createStream = (formValues) => {
    //because we are using thunk
    return async (dispatch, getState) => {
        // const userId=getState().authFromReducer.userId
        const {userId}=getState().authFromReducer
        // console.log(getState().authFromReducer.userId)
        // const response = await streams.post('/streams', formValues)
        const response = await streams.post('/streams', {...formValues,userId})
        dispatch({type: x.CREATE_STREAM, payload: response.data})
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
        const response = await streams.get('/streams/'+streamId)
        dispatch({type: x.FETCH_STREAM_BY_ID, payload: response.data})
    }
}

export const editStreamById = (streamId,formValues) => {
    //because we are using thunk
    return async (dispatch) => {
        const response = await streams.put('/streams/'+streamId, formValues)
        dispatch({type: x.EDIT_STREAM_BY_ID, payload: response.data})
    }
}

export const deleteStreamById = (streamId) => {
    //because we are using thunk
    return async (dispatch) => {
        await streams.delete('/streams/'+streamId)
            dispatch({type: x.DELETE_STREAM_BY_ID, payload: streamId})
    }
}
