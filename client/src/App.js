import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import FootballRegistration from "./pages/Registrationpages/FootballRegistration";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import Sports from "./pages/Sports";

import Register from "./pages/Register";
import ChessMenRegistration from "./pages/Registrationpages/ChessMenRegistration";

const App = () => {
  return (
    <Router>
      <div data-scroll className="myapp">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Cricket(M)" element={<Register sport="Cricket(M)" />} />
          <Route
            path="register/Football(M)"
            element={<FootballRegistration sport="Football(M)" />}
          />
          <Route
            path="register/Football(W)"
            element={<Register sport="Football(W)" />}
          />
          <Route
            path="register/Basketball(M)"
            element={<Register sport="Basketball(M)" />}
          />
          <Route
            path="register/Basketball(W)"
            element={<Register sport="Basketball(W)" />}
          />
          <Route
            path="register/Volleyball(M)"
            element={<Register sport="Volleyball(M)" />}
          />
          <Route
            path="register/Volleyball(W)"
            element={<Register sport="Volleyball(W)" />}
          />
          <Route
            path="register/Kabaddi"
            element={<Register sport="Kabaddi" />}
          />
          <Route
            path="register/Badminton(M)"
            element={<Register sport="Badminton(M)" />}
          />
          <Route
            path="register/Badminton(W)"
            element={<Register sport="Badminton(W)" />}
          />
          <Route
            path="register/TableTennis(M)"
            element={<Register sport="Table Tennis(M)" />}
          />
          <Route
            path="register/TableTennis(W)"
            element={<Register sport="Table Tennis(W)" />}
          />
          <Route
            path="register/LawnTennis(M)"
            element={<Register sport="Lawn Tennis(M)" />}
          />
          <Route
            path="register/LawnTennis(W)"
            element={<Register sport="Lawn Tennis(W)" />}
          />
          <Route
            path="register/Chess(M)"
            element={<ChessMenRegistration sport="Chess(M)" />}
          />
          <Route
            path="register/Chess(W)"
            element={<Register sport="Chess(W)" />}
          />
          <Route
            path="register/Swimming(M)"
            element={<Register sport="Swimming(M)" />}
          />
          <Route
            path="register/Swimming(W)"
            element={<Register sport="Swimming(W)" />}
          />
          <Route
            path="register/Esports_BGMI"
            element={<Register sport="Esports_BGMI" />}
          />
          <Route
            path="register/Esports_Valorant"
            element={<Register sport="Esports_Valorant" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
