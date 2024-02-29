import React from "react";
import "./atlantisSec5.scss";
import beach from "../../../assets/images/membership beach.webp";

export default function AtlantisSec5() {
  return (
    <div className="atlantisSec5">
      <div className="container register-benefits">
        <div className="imgWith-bookbtn">
          <div className="slider-banner">
            <img src={beach} alt="" />
            <div className="info-img">
              <h2>Atlantis Unlocked Is Your Key To Instant Benefits</h2>
              <div className="underline">
                <span></span>
              </div>
              <p>
                Sign up for free to unlock an Atlantis, The Palm holiday you'll
                always remember.
              </p>
              <div className="button">
                <a href="dixit.com">
                  <button>REGISTER NOW</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
