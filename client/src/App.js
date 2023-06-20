
import './App.css';
import Land from './components/Landing/Land';
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom"
import Dasboard from './components/Dashboard/Dasboard';

import Login from './components/Auth/Login.jsx';
function App() {
  const user=false;
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
