import React from "react";
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
    <div className="cardbody">
      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Cricket} alt="Cricket" />
          </div>
          <div class="sportscard contentBx">
            <h2>Cricket</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Football} alt="Football" />
          </div>
          <div class="sportscard contentBx">
            <h2>Football</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={TabbleTennis} alt="TabbleTennis" />
          </div>
          <div class="sportscard contentBx">
            <h2>Tabble Tennis</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Chess} alt="Chess" />
          </div>
          <div class="sportscard contentBx">
            <h2>Chess</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Basketball} alt="BasketBall" />
          </div>
          <div class="sportscard contentBx">
            <h2>BasketBall</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Tennis} alt="Tennis" />
          </div>
          <div class="sportscard contentBx">
            <h2>Tennis</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Volleyball} alt="VolleyBall" />
          </div>
          <div class="sportscard contentBx">
            <h2>VolleyBall</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Badminton} alt="Badminton" />
          </div>
          <div class="sportscard contentBx">
            <h2>Badminton</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Swimming} alt="Swimming" />
          </div>
          <div class="sportscard contentBx">
            <h2>Swimming</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Esports} alt="Esports" />
          </div>
          <div class="sportscard contentBx">
            <h2>Esports</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>

      <div class="sportscard container">
        <div class="sportscard card">
          <div class="sportscard imgBx">
            <img src={Kabaddi} alt="Kabaddi" />
          </div>
          <div class="sportscard contentBx">
            <h2>Kabaddi</h2>
            <a href="#" class="sportscard-link">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
