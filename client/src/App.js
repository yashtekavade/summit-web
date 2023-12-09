import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Sponsors from "./pages/Sponsors";
import Sports from "./pages/Sports";
import About from "./pages/About";
import Guests from "./pages/Guests";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
