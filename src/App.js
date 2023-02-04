import './index.css'
import React from "react";
import {Routes, Route,  BrowserRouter as Router} from 'react-router-dom'  
import Navbar from './components/Navbar';
import Patient from './components/Patient';
import Side from './components/Side';
function App() {
  return (
    <Router >
       
      <Side/>
      <Navbar/>
      <Routes>
      <Route path="/patient" element={<Patient/>}/>  
      </Routes>
     
    </Router>
  );
}

export default App;
