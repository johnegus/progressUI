import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignInSide from "./components/sign-in-side/SignInSide";
import SignUp from "./components/sign-up/SignUp";
import NavBar from "./components/NavBar";
import Dashboard from './components/dashboard/Dashboard'
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/dashboard/User";
import { authenticate } from "./services/auth";
import HomePage from "./components/HomePage";
import AddGrocery from "./components/dashboard/addItem/Add";
import Modal from 'react-modal'
import Recipe from "./components/recipe-search/Recipe";

Modal.setAppElement('#root')


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} authenticated={authenticated}/>
      
      <Route path="/login" exact={true}>
        <SignInSide
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUp authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      
    
      <ProtectedRoute path="/dashboard" exact={true} authenticated={authenticated}>
        <Dashboard/>
      </ProtectedRoute>
      <ProtectedRoute path="/recipes" exact={true} authenticated={authenticated}>
        <Recipe />
      </ProtectedRoute>
      <ProtectedRoute path="/add" exact={true} authenticated={authenticated}>
        <AddGrocery />
      </ProtectedRoute>
      <ProtectedRoute path="/database" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute>
     
  
      <Route path="/" exact={true}  >
        <HomePage setAuthenticated={setAuthenticated} authenticated={authenticated}/>
      </Route>
      
      
    </BrowserRouter>
  );
}

export default App;
