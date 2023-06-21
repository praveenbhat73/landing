import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchUser } from '../../state/index.js';
import { useNavigate } from 'react-router-dom';
import * as actiontype from '../../constatnts/actiontypes.js';

const Dasboard = () => {
const dispatch = useDispatch();
const history=useNavigate();
  const handleSubmit=(e)=>{
    // e.preventDefaualt();
    dispatch({ type: actiontype.LOGOUT });

    // history.push('/');
    localStorage.clear();
    window.location.href="/";
    
  }

  // Rest of your component code

  return (
    <div>
      <p>User ID: </p>
      <button style={{color:"white"}}
      onClick={handleSubmit}
      >
        logout
      </button>
    </div>
  );
};

export default Dasboard;
