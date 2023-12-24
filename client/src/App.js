import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Guests from "./pages/Guests.jsx";
import Home from "./pages/Home";
import Result from "./pages/Result";
//import Sports from "./pages/Sports";

//import About from "./Components/about/About.jsx";
//import Message from "./Components/about/Message.jsx";
//import Org from "./Components/about/org-team.jsx";
//import Head from "./Components/about/EventHead.jsx";

import Register from "./pages/Register";
import Admin from "./pages/Admin";

import CricketMRegistration from "./pages/Registrationpages/CricketMRegistration";
import FootballMRegistration from "./pages/Registrationpages/FootballMRegistration";
import FootballWRegistration from "./pages/Registrationpages/FootballWRegistration";
import BasketballMRegistration from "./pages/Registrationpages/BasketballMRegistration";
import BasketballWRegistration from "./pages/Registrationpages/BasketballWRegistration";
import VolleyballMRegistration from "./pages/Registrationpages/VolleyballMRegistration";
import VolleyballWRegistration from "./pages/Registrationpages/VolleyballWRegistration";
import KabaddiMRegistration from "./pages/Registrationpages/KabaddiMRegistration";
import SwimmingMRegistration from "./pages/Registrationpages/SwimmingMRegistration";
import SwimmingWRegistration from "./pages/Registrationpages/SwimmingWRegistration";
import BadmintonMRegistration from "./pages/Registrationpages/BadmintonMRegistration";
import BadmintonWRegistration from "./pages/Registrationpages/BadmintonWRegistration";
import TableTennisMRegistration from "./pages/Registrationpages/TableTennisMRegistration";
import TableTennisWRegistration from "./pages/Registrationpages/TableTennisWRegistration";
import LawnTennisMRegistration from "./pages/Registrationpages/LawnTennisMRegistration";
import LawnTennisWRegistration from "./pages/Registrationpages/LawnTennisWRegistration";
import ChessMRegistration from "./pages/Registrationpages/ChessMRegistration";
import ChessWRegistration from "./pages/Registrationpages/ChessWRegistration";
import EsportsBGMIRegistration from "./pages/Registrationpages/EsportsBGMIRegistration";
import EsportsValorantRegistration from "./pages/Registrationpages/EsportsValorantRegistration";
import Registrationfees from "./pages/Registrationfees";

const App = () => {
  return (
    <Router>
      <div data-scroll className="myapp">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/about" element={<About />} />
          <Route path="/executive-message" element={<Message />} />
          <Route path="/organising-team" element={<Org />} />
          <Route path="/event-head" element={<Head />} />


          
          <Route path="/sports" element={<Sports />} />*/}
          <Route path="/register" element={<Register />} />
          <Route path="/guest" element={<Guests />} />
          <Route path="/registration-fees" element={<Registrationfees />} />
          <Route
            path="register/Cricket(M)"
            element={<CricketMRegistration sport="Cricket(M)" />}
          />
          <Route
            path="register/Football(M)"
            element={<FootballMRegistration sport="Football(M)" />}
          />
          <Route
            path="register/Football(W)"
            element={<FootballWRegistration sport="Football(W)" />}
          />
          <Route
            path="register/Basketball(M)"
            element={<BasketballMRegistration sport="Basketball(M)" />}
          />
          <Route
            path="register/Basketball(W)"
            element={<BasketballWRegistration sport="Basketball(W)" />}
          />
          <Route
            path="register/Volleyball(M)"
            element={<VolleyballMRegistration sport="Volleyball(M)" />}
          />
          <Route
            path="register/Volleyball(W)"
            element={<VolleyballWRegistration sport="Volleyball(W)" />}
          />
          <Route
            path="register/Kabaddi"
            element={<KabaddiMRegistration sport="Kabaddi(M)" />}
          />
          <Route
            path="register/Badminton(M)"
            element={<BadmintonMRegistration sport="Badminton(M)" />}
          />
          <Route
            path="register/Badminton(W)"
            element={<BadmintonWRegistration sport="Badminton(W)" />}
          />
          <Route
            path="register/TableTennis(M)"
            element={<TableTennisMRegistration sport="Table Tennis(M)" />}
          />
          <Route
            path="register/TableTennis(W)"
            element={<TableTennisWRegistration sport="Table Tennis(W)" />}
          />
          <Route
            path="register/LawnTennis(M)"
            element={<LawnTennisMRegistration sport="Lawn Tennis(M)" />}
          />
          <Route
            path="register/LawnTennis(W)"
            element={<LawnTennisWRegistration sport="Lawn Tennis(W)" />}
          />
          <Route
            path="register/Chess(M)"
            element={<ChessMRegistration sport="Chess(M)" />}
          />
          <Route
            path="register/Chess(W)"
            element={<ChessWRegistration sport="Chess(W)" />}
          />
          <Route
            path="register/Swimming(M)"
            element={<SwimmingMRegistration sport="Swimming(M)" />}
          />
          <Route
            path="register/Swimming(W)"
            element={<SwimmingWRegistration sport="Swimming(W)" />}
          />
          <Route
            path="register/Esports_BGMI"
            element={<EsportsBGMIRegistration sport="Esports_BGMI" />}
          />
          <Route
            path="register/Esports_Valorant"
            element={<EsportsValorantRegistration sport="Esports_Valorant" />}
          />
          <Route path="/admin/result" element={<Result />} />{" "}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
