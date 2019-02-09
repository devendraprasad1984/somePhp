export default (state,action)=>{
    //never call external calls from anywhere network or resource request - bad reducer
    //always return some calci on state based on some action - pure reducer
    //never mutate state inside reducers - rule of redux
    return 'post reducer'
}