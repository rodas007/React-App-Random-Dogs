import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate,NavLink, Route, Routes } from "react-router-dom";
import './App.scss';
import AuthButton from './components/AuthButton/AuthButton';
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { JwtContext } from './contexts/JwtContext';
import RequireAuth from './components/RequireAuth/RequireAuth';
function App() {

  
    const [jwt, setJwt] = useState(localStorage.getItem('token') || null);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>


    <Router>
    
    <AuthButton/>

    <div className="container">
    <nav className= "nav">
                 
                            
                            
                            {jwt && <NavLink className="b-btn" to="/home">🐶Home</NavLink>}
                        </nav>

        <Routes>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
          <Route path="/home" element={<RequireAuth><HomePage/></RequireAuth>}/>
          <Route path="/*" element={<Navigate to="/login"/>}/>
        </Routes>
     
    </div>
  </Router>
  </JwtContext.Provider>
  );
}

export default App;
