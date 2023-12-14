import React from "react";
import { Link } from "react-router-dom";
import "./Sportslanding.css";
const Sportslanding = () => {
  return (
    <div className="sports-landing-container">
      <h2>Select a Sport:</h2>
      <ul className="sports-list">
        <li>
          <Link to="/register/Cricket(M)">Cricket (M)</Link>
        </li>
        <li>
          <Link to="/register/Football(M)">Football (M)</Link>
        </li>
        <li>
          <Link to="/register/Football(W)">Football (W)</Link>
        </li>
        <li>
          <Link to="/register/Basketball(M)">Basketball (M)</Link>
        </li>
        <li>
          <Link to="/register/Basketball(W)">Basketball (W)</Link>
        </li>
        <li>
          <Link to="/register/Volleyball(M)">Volleyball (M)</Link>
        </li>
        <li>
          <Link to="/register/Volleyball(W)">Volleyball (W)</Link>
        </li>
        <li>
          <Link to="/register/Kabaddi">Kabaddi (M)</Link>
        </li>
        <li>
          <Link to="/register/Badminton(M)">Badminton (M)</Link>
        </li>
        <li>
          <Link to="/register/Badminton(W)">Badminton (W)</Link>
        </li>
        <li>
          <Link to="/register/TableTennis(M)">Table Tennis (M)</Link>
        </li>
        <li>
          <Link to="/register/TableTennis(W)">Table Tennis (W)</Link>
        </li>
        <li>
          <Link to="/register/LawnTennis(M)">Lawn Tennis (M)</Link>
        </li>
        <li>
          <Link to="/register/LawnTennis(W)">Lawn Tennis (W)</Link>
        </li>
        <li>
          <Link to="/register/Chess(M)">Chess (M)</Link>
        </li>
        <li>
          <Link to="/register/Chess(W)">Chess (W)</Link>
        </li>
        <li>
          <Link to="/register/Swimming(M)">Swimming (M)</Link>
        </li>
        <li>
          <Link to="/register/Swimming(W)">Swimming (W)</Link>
        </li>
        <li>
          <Link to="/register/Esports_BGMI">Esports BGMI</Link>
        </li>
        <li>
          <Link to="/register/Esports_Valorant">Esports Valorant</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sportslanding;
