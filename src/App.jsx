// import { useSelector,useDispatch } from "react-redux"
import { connect } from "react-redux";
import { fetchPosts } from "./config/actions";


function App({data,loading,error,start}) {
  // console.log(data,loading,error,start)
  // let dispatch = useDispatch();
  // let data = useSelector(state=>state.data);
  // let charging = useSelector(state=>state.charging);
  // let error = useSelector(state=>state.error);
  return (
    <div>
      <button onClick={start}>load posts</button>
      {loading && "loading ..."}
      {data && data.map((item,i)=>(<h5 key={i}>{item.title}</h5>))}
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}


const mapStateToProps = (state)=>({data:state.data,loading:state.loading,error:state.error});
const mapDispatchToProps = (dispatch)=>({start:()=>dispatch(fetchPosts())})

export default connect(mapStateToProps,mapDispatchToProps)(App);