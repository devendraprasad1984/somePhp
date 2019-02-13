import streams from '../api/streams'

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN'
        , payload: {
            userId: userId
        }
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const createStream = (formValues) => {
    //because we are using thunk
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues)
        dispatch({type: 'CREATE_STREAM', payload: response.data})
    }
}

export const fetchStreams = () => {
    //because we are using thunk
    return async (dispatch) => {
        const response = await streams.get('/streams')
        dispatch({type: 'FETCH_STREAMS', payload: response.data})
    }
}

export const fetchStreamById = (streamId) => {
    //because we are using thunk
    return async (dispatch) => {
        const response = await streams.get('/streams/'+streamId)
        dispatch({type: 'FETCH_STREAM_BY_ID', payload: response.data})
    }
}

export const editStreamById = (streamId,formValues) => {
    //because we are using thunk
    return async (dispatch) => {
        const response = await streams.put('/streams/'+streamId, formValues)
        dispatch({type: 'EDIT_STREAM_BY_ID', payload: response.data})
    }
}

export const deleteStreamById = (streamId) => {
    //because we are using thunk
    return async (dispatch) => {
        await streams.delete('/streams/'+streamId)
        dispatch({type: 'DELETE_STREAM_BY_ID', payload: streamId})
    }
}

//238