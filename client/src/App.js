import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Guests from "./pages/Guests";
import Register from "./pages/Register";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Home/About";

const App = () => {
  return (
    <Router>
      <div data-scroll className="myapp">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/guests" element={<Guests />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
