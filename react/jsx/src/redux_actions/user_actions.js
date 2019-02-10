import jsonPlaceHolder from '../api/jsonPlaceHolder'

export const fetchUser = (id) => {
    return async (dispatch, getstate) => {
        const response = await jsonPlaceHolder.get('/users/'+id)
        dispatch({type: 'FETCH_USER', payload: response.data})
    }
}
