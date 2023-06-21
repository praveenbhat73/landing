import { useSelector } from 'react-redux/es/hooks/useSelector';
import './App.css';
import { useDispatch } from 'react-redux';
import Land from './components/Landing/Land';
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import Dasboard from './components/Dashboard/Dasboard';
// import {}
import Login from './components/Auth/Login.jsx';
import { AUTH } from './constatnts/actiontypes';
function App() {
  // const user = useSelector((state) => state.global.name);
  // const dispatch=useDispatch();
  // dispatch({ type: AUTH });
  const user=JSON.parse(localStorage.getItem('profile'))
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
