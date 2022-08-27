import React from 'react';
import Biografi from './biografi';
import Register from './register';
import Navbars from './navbar';
import Clock from './clock';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function Routing(props) {
  return (
    <div>
      <Router>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Biografi />} />
          <Route path="/register" element={<Register />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;