import { useSelector } from 'react-redux/es/hooks/useSelector';
import './App.css';
import { useDispatch } from 'react-redux';
import Land from './components/Landing/Land';
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import Dasboard from './components/Dashboard/Dasboard';
// import {}
import Login from './components/Auth/Login.jsx';
import {useEffect,useState}  from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const ALAN_API="66c3da80661af2d6e2b8054f8a687d072e956eca572e1d8b807a3e2338fdd0dc/stage"
// import {}
function App() {
  // const user = useSelector((state) => state.global.name);
  // alanbotton=useRef(useAlan);
  const dispatch=useDispatch();
  // dispatch({ type: AUTH });
  const user=JSON.parse(localStorage.getItem('profile'))
  // const user = store.dispatch(authSlice.endpoints.getUser.initiate())
  // const {user}=useContext(AuthContext)

  useEffect(()=>{
    //this is call back function
    alanBtn({
      key:ALAN_API,
      // Responsible for handling commands sent from the Alan voice script.
      // To accompany user’s utterances with activities in the app UI, you can send commands from the voice scripts to the client app.
      // this command is passsed as destructive paramter and used in if else condition
      //if that command is mapped then that function is executed 
      //destructuring is unpacking the values that is sent in array into distinct variables -> int r= a[1]; eg
      onCommand:({ command,articles })=>{
        
        
      }
    })
    
      },[])
  return (
    <BrowserRouter>

    <div className="App">
    <Routes>
    <Route exact path="/" element={user?<Dasboard/>:<Land/>}/>
    <Route exact path="/login" element={user?<Navigate to ="/"/>:<Login/>}/>
   
    </Routes>
   

    </div>

    </BrowserRouter>
  );
}

export default App;
