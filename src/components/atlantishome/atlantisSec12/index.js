import React from "react";
import "./atlantisSec12.scss";
import topImg from "../../../assets/images/ATP-Exterior-Pool-At-Night-Banner-Gradient-last-sec.webp";

export default function PromotionView() {
  return (
    <div className="promotionView">
      <div className="container atlantisProj">
        <div className="info-spec-Promotions">
          <img src={topImg} alt="" />
          <div className="foodieHeading">
            <div className="center-head">
              <h2>Be The First To Know</h2>
            </div>
            <div className="underline">
              <span></span>
            </div>
            <div className="info-center">
              <p>
                Atlantis, The Palm view of the pool at night Be The First To
                Know
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
  );
}
