import React from "react";
import "./atlantisSec11.scss";
import atlantis from "../../../assets/images/AmbassadorLagoon-AtlantisAtlasProject-symbol.webp";

export default function AtlantisProject() {
  return (
    <div className="atlantisProject">
      <div className="container project-info">
        <div className="img-project-info">
          <img src={atlantis} alt="" />
          <div className="info-project">
            <div className="foodieHeading">
              <div className="center-head">
                <h2>ATLANTIS ATLAS PROJECT</h2>
              </div>
              <div className="underline">
                <span></span>
              </div>
              <div className="info-center">
                <p>
                  Our commitment to do business in ways that are good for both
                  people and planet. We do this by focusing on Responsible
                  Operations, Conservation and Animal Welfare, Education and
                  Awareness, and Corporate Social Responsibility.
                </p>
              </div>
              <div className="button">
                <div className="btn">
                  <button>
                    <a href="dixit.com">LEARN MORE</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
