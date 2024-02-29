import React from "react";
import "./atlantisSec2.scss";
import card1 from "../../../assets/images/card1.webp";
import card2 from "../../../assets/images/card2.webp";
import card3 from "../../../assets/images/card3.webp";
import card4 from "../../../assets/images/card4.webp";
import card5 from "../../../assets/images/card5.webp";

export default function AtlantisSec2() {
  return (
    <div className="atlantis-sec2">
      <div className="container">
        <div className="cards">
          <div className="card">
            <img src={card1} alt="" />
            <div className="info-card">
              <h2>Stay In Style</h2>
              <p>
                Our Rooms and Suites offer the perfect balance of comfort,
                luxury and mesmerising views of Palm Island or the Arabian Sea.
                For a once-in-a-lifetime holiday, stay in an iconic Signature
                Suite that will take your breath away.
              </p>
            </div>
            <div className="button">
              <div className="btn">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={card2} alt="" />
            <div className="info-card">
              <h2>Atlantis Aquaventure</h2>
              <p>
                Slide down the world’s largest waterpark, meet our friendly
                dolphins and playful sea lions, explore Dubai’s favourite
                aquarium or enjoy thrilling watersports. There’s so much to do
                at Atlantis Aquaventure.
              </p>
            </div>
            <div className="button">
              <div className="btn">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={card3} alt="" />
            <div className="info-card">
              <h2>World-Class Dining</h2>
              <p>
                Atlantis, The Palm brings together some of the most famous
                celebrity chef and Michelin-Star restaurants, lavish
                international buffets and experiential dining.
              </p>
            </div>
            <div className="button">
              <div className="btn">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={card4} alt="" />
            <div className="info-card">
              <h2>Non-Stop Entertainment</h2>
              <p>
                Feel the rush at our vibrant entertainment spots where the fun
                never ends! Check out our trendy bars and beach clubs or head
                over to Wavehouse for bowling, arcades, live music and great
                food.
              </p>
            </div>
            <div className="button">
              <div className="btn">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={card5} alt="" />
            <div className="info-card">
              <h2>AWAKEN Wellness</h2>
              <p>
                Ignite your inner flame in a truly different holistic spa
                designed to cleanse your body, clear your mind, lift your
                emotions and stir your spirit. AWAKEN invites you to recharge
                yourself with energy therapies and curated treatments.
              </p>
            </div>
            <div className="button">
              <div className="btn">
                <button>EXPLORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
