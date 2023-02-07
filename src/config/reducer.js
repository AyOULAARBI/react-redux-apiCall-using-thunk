


const reducer = (state={loading:false,data:[],error:""},action)=>{
    switch(action.type){
        case "FETCH_REQUEST":
            return {...state,loading:true}
        case "FETCH_SUCCESS":
            return {...state,loading:false,data:action.payload};
        case "FETCH_FAILURE":
            return {...state,loading:false,error:action.payload}
        default:
            return state;
    }
}
export default reducer;