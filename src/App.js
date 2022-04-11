import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectUser, login, logout } from './features/userSlice';
import { auth } from './firebase';
import Imessage from './Imessage';
import Login from './Login';


function App() {
  const user = useSelector(selectUser);
  const dispatch  = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        //user logged in 
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      } else {
        //user logged out
        dispatch(logout())
      }
    })
  }, [])
  return (
    //BEM naming convention
    <div className="App">
      {user ? <Imessage /> : <Login/>}
    </div>
  );
}

export default App;
