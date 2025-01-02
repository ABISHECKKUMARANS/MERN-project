import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Aboutus from './Aboutus.jsx';
import Contactus from './Contactus.jsx';

function Abi() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
    </Router>

    
  );
}
export default Abi;