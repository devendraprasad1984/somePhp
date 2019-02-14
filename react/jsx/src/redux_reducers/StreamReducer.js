import * as x from '../types'
import _ from 'lodash'

export default (state = {}, action) => {
    switch (action.type) {
        case x.CREATE_STREAM:
            return {...state,[action.payload.id]: action.payload}
        case x.EDIT_STREAM_BY_ID:
            //same as loop /map over array and match one key and add
            return {...state,[action.payload.id]: action.payload}
        case x.DELETE_STREAM_BY_ID:
            return _.omit(state,action.payload)
        case x.FETCH_STREAM_BY_ID:
            //object based reducer, key interpolation es2015 syntax, adding new key value pair like obj[new_key]:new_value
            return {...state, [action.payload.id]: action.payload}
        case x.FETCH_STREAMS:
            return {...state, ..._.mapKeys(action.payload,'id')}
        default:
            return state
    }
}