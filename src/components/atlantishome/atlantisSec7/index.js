import React from "react";
import "./atlantisSec7.scss";
// import white from "../../../assets/images/WHITE-Beach-Lifestyle-LadyInfinityPool-Flipped.webp";
import card1 from "../../../assets/images/AquaventureWaterpark-Lifestyle-TridentTower-SplashersCove-unforget-1.webp";
import card2 from "../../../assets/images/ImperialClub-lifestyle-romantic-valentine-dinner-unforget2.webp";
import card3 from "../../../assets/images/WHITE-Beach-LadiesInPool-Portrait-unforget-3.webp";

export default function AtlantisSec7() {
  return (
    <div className="atlantisSec7">
      <div className="container">
        <div className="info-cards-on-bgImg">
          <div className="info-unforget-cards">
            <div className="unforgetMoment">
              <div className="center-head">
                <h2>Unforgettable Moments</h2>
              </div>
              <div className="underline">
                <span></span>
              </div>
              <div className="info-card">
                <p>
                  There's something entertaining for everyone at Atlantis, The
                  Palm. Get ready for non-stop fun at Dubai’s most iconic
                  resort.
                </p>
              </div>
            </div>
            <div className="cards">
              <div className="card">
                <img src={card1} alt="" />
                <div className="info-card">
                  <h2>Family Experince</h2>
                  <p>
                    Discover the best things to do with your family at Dubai's
                    top family-friendly hotel.
                  </p>
                </div>
                <div className="button">
                  <div className="btn">
                    <button>
                      <a href="dixit.com">KNOW MORE</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={card2} alt="" />
                <div className="info-card">
                  <h2>Couples Experince</h2>
                  <p>
                    Escape to a getaway full of magical activities for you and
                    your loved one.
                  </p>
                </div>
                <div className="button">
                  <div className="btn">
                    <button>
                      <a href="dixit.com">KNOW MORE</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={card3} alt="" />
                <div className="info-card">
                  <h2>Freinds Experince</h2>
                  <p>
                    From bucket-list activities to Instagrammable moments, you
                    and the squad will have a blast.
                  </p>
                </div>
                <div className="button">
                  <div className="btn">
                    <button>
                      <a href="dixit.com">KNOW MORE</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
