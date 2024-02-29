import React from "react";
import "./atlantisSec10.scss";
import masag from "../../../assets/images/AWAKEN-Spa-FaceMassage-Lady.webp";

export default function AwakenWelness() {
  return (
    <div className="awakenWelness">
      <div className="container imgOverlap">
        <div className="awaken-info">
          <div className="center-head">
            <h2>AWAKEN Wellness</h2>
          </div>
          <div className="underline">
            <span></span>
          </div>
          <div className="info-center">
            <p>
              Find serenity and improve your well-being with holistic therapies
              through a bespoke selection of body treatments and facials. AWAKEN
              Spa fuses modern technologies with globally renowned products to
              give you the results you've been dreaming of.
            </p>
          </div>
          <div className="button">
            <div className="btn">
              <button>
                <a href="dixit.com">EXPLORE</a>
              </button>
            </div>
          </div>
        </div>
        <div className="img-video">
          <img src={masag} alt="" />
        </div>
      </div>
    </div>
  );
}
