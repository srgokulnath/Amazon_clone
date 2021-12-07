import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import { CheckOutlined } from '@material-ui/icons';
import Checkout from './Checkout';
import Loginpage from './Loginpage';
import { useStateValue } from './StateProvider';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {

  const [{basket}, dispatch] = useStateValue();

  useEffect(()=>{
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        //user logged in...
         dispatch({
          type: "SET_USER",
          user: user,
        })
      }
      else{
        //user logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
    return()=>{
      //any cleanup operations go in here...
      unsubscribe();
    }
  }, [])
  return (
    <Router>
      <div className="app"> 
        <Header/>       
        <Routes>
          <Route path = "/checkout" element = {<Checkout/>}/>      
                    
          <Route path = "/login" element = {<Loginpage/>}/>     
             
          <Route path = "/" element = {<Home/>}/>        
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
