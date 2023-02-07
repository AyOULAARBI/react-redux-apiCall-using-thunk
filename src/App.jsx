import { useSelector,useDispatch } from "react-redux"
import { fetchPosts } from "./config/actions";


function App() {
  let dispatch = useDispatch();
  let data = useSelector(state=>state.data);
  let charging = useSelector(state=>state.charging);
  let error = useSelector(state=>state.error);
  return (
    <div>
      <button onClick={()=>{return dispatch(fetchPosts())}}>load posts</button>
      {charging && "loading ..."}
      {data && data.map((item,i)=>(<h5 key={i}>{item.title}</h5>))}
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}

export default App
