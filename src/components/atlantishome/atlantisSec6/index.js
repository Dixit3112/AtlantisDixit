import React from "react";
import "./atlantisSec6.scss";
import card1 from "../../../assets/images/unbox magic.webp";
import card2 from "../../../assets/images/extra benefits.webp";
import card3 from "../../../assets/images/hottest offer.webp";

export default function AtlantisSec6() {
  return (
    <div className="atlantisSec6">
      <div className="container">
        <div className="offer-cards">
          <div className="center-head">
            <h2>Choose The Perfect Room</h2>
          </div>
          <div className="underline">
            <span></span>
          </div>
          <div className="info-center">
            <p>
              All stays include complimentary access to Aquaventure Waterpark,
              the world’s largest waterpark, and The Lost Chambers Aquarium,
              home to 65,000 marine animals.
            </p>
          </div>
          <div className="center-cards">
            <div className="cards">
              <div className="card">
                <img src={card1} alt="" />
                <div className="info-card">
                  <h2>Unbox the Magic</h2>
                  <p>
                    Book 5 nights or more over Christmas Eve to get a
                    complimentary Christmas Eve Dinner or book 10 nights or more
                    over Christmas and New Year’s Eve and get a complimentary
                    Christmas Eve Dinner and a New Year’s Eve package included
                    in your stay.
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
                  <h2>Hello Extraordinary</h2>
                  <p>
                    <strong>Book 3 nights</strong> or more for a host of
                    <strong> extraordinary benefits</strong> across fine dining,
                    spa, marine experiences and more!
                  </p>
                </div>
                <div className="button">
                  <div className="btn">
                    <button>
                      <a href="dixit.com">KNOW MORE</a>
                    </button>
                    <button className="blue">
                      <a href="dixit.com">BOOK NOW</a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card">
                <img src={card3} alt="" />
                <div className="info-card">
                  <h2>Hottest Offers</h2>
                  <p>
                    Our Rooms and Suites offer the perfect balance of comfort,
                    luxury and mesmerising views of Palm Island or the Arabian
                    Sea. For a once-in-a-lifetime holiday, stay in an iconic
                    Signature Suite that will take your breath away.
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
                  <h2>Hottest Offers</h2>
                  <p>
                    Our Rooms and Suites offer the perfect balance of comfort,
                    luxury and mesmerising views of Palm Island or the Arabian
                    Sea. For a once-in-a-lifetime holiday, stay in an iconic
                    Signature Suite that will take your breath away.
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
