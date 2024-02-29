import React from "react";
import "./atlantisSec9.scss";
import foodie1 from "../../../assets/images/foodie-1.webp";
import foodie2 from "../../../assets/images/foodie-2.webp";
import foodie3 from "../../../assets/images/foodie-3.webp";
import logo1 from "../../../assets/logos/Ossiano-Logo-White-foodie.webp";
import logo2 from "../../../assets/logos/Hakkasan-Logo-White-foodie2.webp";
import logo3 from "../../../assets/logos/En-Fuego-Logo-foodie3.webp";

export default function FoodieSec9() {
  return (
    <div className="atlantisSec9">
      <div className="container foodieSec">
        <div className="foodieHeading">
          <div className="center-head">
            <h2>Foodie Heaven</h2>
          </div>
          <div className="underline">
            <span></span>
          </div>
          <div className="info-center">
            <p>
              Atlantis, The Palm is a foodie’s paradise. Where else can you dine
              underwater, feast on dishes by Gordon Ramsay and taste cuisines
              from all over the world under one roof? Have a look at some of our
              top picks.
            </p>
          </div>
          <div className="button">
            <div className="btn">
              <button>
                <a href="dixit.com">DISCOVER</a>
              </button>
            </div>
          </div>
        </div>
        <div className="three-foodie-cards">
          <div className="img-flx">
            <img src={foodie1} alt="" />
            <div className="abs-log">
              <img src={logo1} alt="" />
            </div>
          </div>
          <div className="img-flx">
            <img src={foodie2} alt="" />
            <div className="abs-log">
              <img src={logo2} alt="" />
            </div>
          </div>
          <div className="img-flx">
            <img src={foodie3} alt="" />
            <div className="abs-log">
              <img src={logo3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
