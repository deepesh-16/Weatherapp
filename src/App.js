import React from 'react';
import Header from "./modules/header/Header"
import Home from "./modules/Home"
import Signup from "./modules/Signup"
import Login from "./modules/Login";
import Contactus from "./modules/Contactus";
import Homepage from "./modules/Homepage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div>
      <Header />
      <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/homepage" element={<Homepage />} />
        </Routes>
    </div>
  )
}

export default App