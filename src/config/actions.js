import axios from "axios";

export const fetchRequest = ()=>{
    return {type:"FETCH_REQUEST"}
}
export const fetchSuccess = (posts)=>{
    return {type:"FETCH_SUCCESS",payload:posts}
}
export const fetchFailure = (err)=>{
    return {type:"FETCH_FAILURE",payload:err}
}

//thunk fetch function

export const fetchPosts = ()=>{
    return function(dispatch,getState){
        dispatch(fetchRequest());
        
        axios.get('https://jsonplaceholer.typicode.com/posts')
        .then(res=> dispatch(fetchSuccess(res.data)))
        .catch(err=>dispatch(fetchFailure(err.message)))
    }
}