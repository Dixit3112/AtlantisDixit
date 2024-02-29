import React from "react";
import "./atlantisSec3.scss";
import sting from "../../../assets/images/slide1.webp";

export default function AtlanticSec3() {
  return (
    <div className="atlantisSec3">
      <div className="container">
        <div className="img-overLap">
          <div className="newYear-items">
            <div className="info-galaDinner">
              <h4>New Year’s Eve Gala Dinner</h4>
              <p>
                Celebrate the New Year in style with a performance from musical
                icon Sting. Ring in 2024 with entertainment from a 30-piece live
                band, a luxury buffet with free-flowing Champagne and the
                greatest fireworks show on earth!
              </p>
              <div className="button">
                <div className="btn">
                  <button className="button blue solid">BOOK NOW</button>
                </div>
                <div className="btn">
                  <button className="button blue solid ">EXPLORE</button>
                </div>
              </div>
            </div>
            <div className="image">
              <img src={sting} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
