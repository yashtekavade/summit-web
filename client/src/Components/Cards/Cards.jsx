import React from "react";
import { Link } from "react-scroll";
import "./Cards.css";
import Cricket from "../../assets/ICONS/Artboard1.png";
import Football from "../../assets/ICONS/Artboard2.png";
import TabbleTennis from "../../assets/ICONS/Artboard3.png";
import Chess from "../../assets/ICONS/Artboard4.png";
import Basketball from "../../assets/ICONS/Artboard5.png";
import Tennis from "../../assets/ICONS/Artboard6.png";
import Volleyball from "../../assets/ICONS/Artboard7.png";
import Badminton from "../../assets/ICONS/Artboard8.png";
import Swimming from "../../assets/ICONS/Artboard9.png";
import Esports from "../../assets/ICONS/Artboard10.png";
import Kabaddi from "../../assets/ICONS/Artboard11.png";

const Cards = () => {
  return (
    <div data-scroll className="cardbody">
      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Cricket} alt="Cricket" />
          </div>
          <div className="sportscard contentBx">
            <h2>Cricket</h2>
            <Link to="cricket-heading" className="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Football} alt="Football" />
          </div>
          <div className="sportscard contentBx">
            <h2>Football</h2>
            <Link to="football-heading" className="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={TabbleTennis} alt="TabbleTennis" />
          </div>
          <div className="sportscard contentBx">
            <h2>Tabble Tennis</h2>
            <Link to="tabbletennis-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Chess} alt="Chess" />
          </div>
          <div className="sportscard contentBx">
            <h2>Chess</h2>
            <Link to="chess-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Basketball} alt="BasketBall" />
          </div>
          <div className="sportscard contentBx">
            <h2>BasketBall</h2>
            <Link to="basketball-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Tennis} alt="Tennis" />
          </div>
          <div className="sportscard contentBx">
            <h2>Tennis</h2>
            <Link to="tennis-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Volleyball} alt="VolleyBall" />
          </div>
          <div className="sportscard contentBx">
            <h2>VolleyBall</h2>
            <Link to="volleyball-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Badminton} alt="Badminton" />
          </div>
          <div className="sportscard contentBx">
            <h2>Badminton</h2>
            <Link to="badminton-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Swimming} alt="Swimming" />
          </div>
          <div className="sportscard contentBx">
            <h2>Swimming</h2>
            <Link to="swimming-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Esports} alt="Esports" />
          </div>
          <div className="sportscard contentBx">
            <h2>Esports</h2>
            <Link to="esports-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>

      <div className="sportscard container">
        <div className="sportscard card">
          <div className="sportscard imgBx">
            <img src={Kabaddi} alt="Kabaddi" />
          </div>
          <div className="sportscard contentBx">
            <h2>Kabaddi</h2>
            <Link to="kabaddi-heading" class="sportscard-link">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
