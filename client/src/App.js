import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FootballRegistration from "./pages/Registrationpages/FootballRegistration";
import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Guests from "./pages/Guests";
import Register from "./pages/Register";


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sports" element={<Sports />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
