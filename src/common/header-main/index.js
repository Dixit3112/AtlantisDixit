import React from "react";
import "./head-main.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import logo from "../../assets/logos/atlantis_the_palm_logo_white_400x97.webp";
import hotOffer from "../../assets/images/hottest offer.webp";
import unbox from "../../assets/images/unbox magic.webp";
import benefit from "../../assets/images/extra benefits.webp";
import beach from "../../assets/images/membership beach.webp";
import img1 from "../../assets/images/Aquavent-img1.webp";
import img2 from "../../assets/images/aquavent-img2.webp";
import img3 from "../../assets/images/aquavent-img3.webp";
import img4 from "../../assets/images/aquavent-img4.webp";

export default function Headerhovermain() {
  return (
    <div className="head-main">
      <div className="container">
        <div className="head">
          <div className="top-head">
            <div className="topLeft-head">
              <div className="icon-list">
                <AiOutlineMenu />
              </div>
              <div className="langSelect">
                <select name="Language">
                  <option value="English">English</option>
                  <option value="English">Deutsch</option>
                  <option value="English">Francais</option>
                  <option value="English">Espanol</option>
                  <option value="English">Japanese</option>
                </select>
              </div>
              <div className="icon-hover">
                <BsTelephone className="icon-topLeft" />
                <div className="number">
                  <a href="dixit.com">
                    <BsTelephone className="icon-topLeft" />
                    <p>+971 4 426 0000</p>
                  </a>
                </div>
              </div>
              <GoMail className="icon-topLeft" />
              <div className="destination-hover">
                <a href="dixit.com">EXPLORE THE DESTINATION</a>
                <div className="hover-location">
                  <p className="topArrow"></p>
                  <p>LOCATIONS:</p>
                  <a href="dixit.com">
                    <span>ATLANTIS DUBAI</span>
                  </a>
                  <a href="dixit.com">
                    <span>ATLANTIS, THE PALM</span>
                  </a>
                  <a href="dixit.com">
                    <span>ATLANTIS THE ROYAL</span>
                  </a>
                  <a href="dixit.com">
                    <span>ATLANTIS AQUAVENTURE</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mid-head">
              <img src={logo} alt="" />
            </div>
            <div className="right-head button">
              <button className="button blue solid">BOOK NOW</button>
            </div>
          </div>
          <div className="bot-head">
            <nav>
              <div className="infoAtlantis">
                <a href="dixit.com" target="_blank">
                  offer
                </a>
                <div className="atlantis-menu">
                  <div className="menuBox">
                    <div className="offer-menu">
                      <p>SPECIAL OFFERS</p>
                      <div className="img-info">
                        <img src={hotOffer} alt="" />
                        <div className="menuOffer">
                          <h4>Hottest Offers</h4>
                          <p>Top offer you don't want to miss.</p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={unbox} alt="" />
                        <div className="menuOffer">
                          <h4>UNBOX THE MAGIC</h4>
                          <p>
                            Book 5 nights over the festive season and enkjoy
                            complimentary benefits and inclusions.
                          </p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={benefit} alt="" />
                        <div className="menuOffer">
                          <h4>Hottest Offers</h4>
                          <p>
                            Book 5 nights over the festive season and enkjoy
                            complimentary benefits and inclusions.
                          </p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={beach} alt="" />
                        <div className="menuOffer">
                          <h4>Hottest Offers</h4>
                          <p>Top offer you don't want to miss.</p>
                        </div>
                      </div>
                    </div>
                    <div className="img-menu">
                      <div className="img1">
                        <img src={unbox} alt="" />
                        <div className="txt-img">
                          <h5>UNBOX THE MAGIC</h5>
                          <p>
                            Exeperience the gift of extraordinary this festive
                            season
                          </p>
                          <h4>FESTIVE AT ATLANTIS</h4>
                        </div>
                      </div>
                      <div className="img2">
                        <img src={beach} alt="" />
                        <div className="txt-img">
                          <h5>SIGN UP AS ATLANTIS MEMBER</h5>
                          <p>
                            Enjoy an extra 10% off Rooms & Suites, free
                            experiences and more
                          </p>
                          <h4>UNLOCK MEMBER BENEFITS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoAtlantis">
                <a href="dixit.com" target="_blank">
                  stays
                </a>
                <div className="atlantis-menu">
                  <div className="menuBox">
                    <div className="offer-menu">
                      <p>VIEW OUR ROOMS</p>
                      <div className="img-info">
                        <img src={hotOffer} alt="" />
                        <div className="menuOffer">
                          <h4>Hottest Offers</h4>
                          <p>Top offer you don't want to miss.</p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={unbox} alt="" />
                        <div className="menuOffer">
                          <h4>UNBOX THE MAGIC</h4>
                          <p>
                            Book 5 nights over the festive season and enkjoy
                            complimentary benefits and inclusions.
                          </p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={benefit} alt="" />
                        <div className="menuOffer">
                          <h4>Hottest Offers</h4>
                          <p>
                            Book 5 nights over the festive season and enkjoy
                            complimentary benefits and inclusions.
                          </p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={beach} alt="" />
                        <div className="menuOffer">
                          <h4>Hottest Offers</h4>
                          <p>Top offer you don't want to miss.</p>
                        </div>
                      </div>
                    </div>
                    <div className="img-menu">
                      <div className="img1">
                        <img src={unbox} alt="" />
                        <div className="txt-img">
                          <h5>UNBOX THE MAGIC</h5>
                          <p>
                            Exeperience the gift of extraordinary this festive
                            season
                          </p>
                          <h4>FESTIVE AT ATLANTIS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoAtlantis">
                <a href="dixit.com" target="_blank">
                  dining
                </a>
                <div className="atlantis-menu">
                  <div className="fourBlock-grid">
                    <div className="diningBlocks">
                      <h5>CELEBRITY</h5>
                      <a href="dixit.com">ATLANTIS THE PALM</a>
                      <p>NOBU</p>
                      <p>HAKKASAN</p>
                      <p>GORDON RAMSAY'S BREAD STREET KITCHEN</p>
                      <a href="dixit.com">ATLANTIS THE ROYAL</a>
                      <p>DINNER BY HESTON BLUMENTHAL</p>
                      <p>MILOS</p>
                      <p>LA MAR BY GESTON ACURIO</p>
                      <p>JALEO BY JOSE ANDRES</p>
                      <p>ARIANA'S PERSIAN KITCHEN</p>
                      <p>LITTLE VANICE CAKE COMPANY</p>
                      <p>LING LING</p>
                      <p>NOBU BY THE BEACH</p>
                    </div>
                    <div className="diningBlocks">
                      <h5>SIGNATURE</h5>
                      <a href="dixit.com">ATLANTIS THE PALM</a>
                      <p>NOBU</p>
                      <p>HAKKASAN</p>
                      <p>GORDON RAMSAY'S BREAD STREET KITCHEN</p>
                    </div>
                    <div className="diningBlocks">
                      <h5>CASUAL</h5>
                      <a href="dixit.com">ATLANTIS THE PALM</a>
                      <p>NOBU</p>
                      <p>HAKKASAN</p>
                      <p>GORDON RAMSAY'S BREAD STREET KITCHEN</p>
                      <a href="dixit.com">ATLANTIS THE ROYAL</a>
                      <p>DINNER BY HESTON BLUMENTHAL</p>
                      <p>MILOS</p>
                    </div>
                    <div className="diningBlocks">
                      <h5>VIEW ALL RESTAURANTS</h5>
                      <h6>VIEW ATLANTIS THE PALM RESTAURANTS</h6>
                      <h6>VIEW ATLANTIS THE ROYAL RESTAURANTS</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoAtlantis">
                <a href="dixit.com" target="_blank">
                  entertainment
                </a>
                <div className="atlantis-menu">
                  <div className="menuBox">
                    <div className="entertainBlocks">
                      <h5>CLUB, BARS AND ENTERTAINMENT</h5>
                      <a href="dixit.com">ATLANTIS THE PALM</a>
                      <p>ENFUEGO</p>
                      <p>WHITE BEACH</p>
                      <p>WAVWHOUSE</p>
                      <p>BARS</p>
                      <a href="dixit.com">ATLANTIS THE ROYAL</a>
                      <p>LING LING</p>
                      <p>NOBU BY THE BEACH</p>
                      <p>CLOUD 22</p>
                    </div>
                    <div className="img-menu">
                      <div className="img1">
                        <img src={unbox} alt="" />
                        <div className="txt-img">
                          <h5>UNBOX THE MAGIC</h5>
                          <p>
                            Exeperience the gift of extraordinary this festive
                            season
                          </p>
                          <h4>FESTIVE AT ATLANTIS</h4>
                        </div>
                      </div>
                      <div className="img2">
                        <img src={beach} alt="" />
                        <div className="txt-img">
                          <h5>SIGN UP AS ATLANTIS MEMBER</h5>
                          <p>
                            Enjoy an extra 10% off Rooms & Suites, free
                            experiences and more
                          </p>
                          <h4>UNLOCK MEMBER BENEFITS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoAtlantis">
                <a href="dixit.com" target="_blank">
                  aquaventure
                </a>
                <div className="atlantis-menu">
                  <div className="menuBox">
                    <div className="aquaventure-menu">
                      <p>DISCOVER ATLANTIS WATER AQUAVENTURE</p>
                      <div className="img-info">
                        <img src={img1} alt="" />
                        <div className="menuOffer">
                          <h4>AQUAVENTURE WATERPARK</h4>
                          <p>Conquer the World’s Largest Waterpark</p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={img2} alt="" />
                        <div className="menuOffer">
                          <h4>ATLAS VILLAGE</h4>
                          <p>Dolphin and sea lion experiences</p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={img3} alt="" />
                        <div className="menuOffer">
                          <h4>The Lost Chambers Aquarium</h4>
                          <p>
                            Journey to our underwater world, home to 65,000
                            marine animals
                          </p>
                        </div>
                      </div>
                      <div className="img-info">
                        <img src={img4} alt="" />
                        <div className="menuOffer">
                          <h4>Aquarium Experiences</h4>
                          <p>
                            Incredible dives, ultimate snorkels and Aquatrek
                            Xtreme
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="img-menu">
                      <div className="img1">
                        <img src={unbox} alt="" />
                        <div className="txt-img">
                          <h5>UNBOX THE MAGIC</h5>
                          <p>
                            Exeperience the gift of extraordinary this festive
                            season
                          </p>
                          <h4>FESTIVE AT ATLANTIS</h4>
                        </div>
                      </div>
                      <div className="img2">
                        <img src={beach} alt="" />
                        <div className="txt-img">
                          <h5>SIGN UP AS ATLANTIS MEMBER</h5>
                          <p>
                            Enjoy an extra 10% off Rooms & Suites, free
                            experiences and more
                          </p>
                          <h4>UNLOCK MEMBER BENEFITS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoAtlantis">
                <a href="dixit.com" target="_blank">
                  experinces
                </a>
                <div className="atlantis-menu">
                  <div className="menuBox">
                    <div className="twoBlocks-grid">
                      <div className="diningBlocks">
                        <h5>CELEBRITY</h5>
                        <a href="dixit.com">ATLANTIS EXPERINCE</a>
                        <a href="dixit.com">BUCKET LIST ACTIVITY</a>
                        <a href="dixit.com">FAMILY EXPERINCE</a>
                        <a href="dixit.com">COUPLES EXPERINCE</a>
                        <a href="dixit.com">INSTAGRAMMABLE MOMENTS</a>
                        <a href="dixit.com">BIRTHDAY CELEBRATION</a>
                        <a href="dixit.com">INFLUENCER INSPO</a>
                        <a href="dixit.com">PARTY PEOPLE</a>
                        <a href="dixit.com">FOODIES</a>
                        <a href="dixit.com">TOURS & EXCURSIONS</a>
                        <h4>SHOPPING</h4>
                      </div>
                      <div className="diningBlocks">
                        <h5>SIGNATURE</h5>
                        <a href="dixit.com">ATLANTIS THE PALM</a>
                        <a href="dixit.com">AWAKEN SPA</a>
                        <a href="dixit.com">AWAKEN FITNESS</a>
                        <a href="dixit.com">UNDERWATER WELLNESS</a>
                        <a href="dixit.com">ALKEMY SALON</a>
                        <a href="dixit.com">AEON CLINIC</a>
                        <h5>NAILOLOGY</h5>
                        <a href="dixit.com">SPACIAL OCCASIONS</a>
                        <h5>KIDS & TEENS ACTIVITIES</h5>
                        <a href="dixit.com">ATLANTIS EXPOLRERS CLUB</a>
                        <a href="dixit.com">THE ZONE FOR TEENS</a>
                      </div>
                    </div>
                    <div className="img-menu">
                      <div className="img1">
                        <img src={unbox} alt="" />
                        <div className="txt-img">
                          <h5>INFLUENCER INSPO</h5>
                          <p>
                            Experience Atlantis, The Palm like an influencer
                          </p>
                          <h4>EXPLORE</h4>
                        </div>
                      </div>
                      <div className="img2">
                        <img src={beach} alt="" />
                        <div className="txt-img">
                          <h5>ATLANTIS BUCKET LIST</h5>
                          <p>Unique and memorable experiences</p>
                          <h4>EXPLORE</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="infoAtlantis">
                <a href="dixit.com" target="_blank">
                  events
                </a>
                <div className="atlantis-menu">
                  <div className="eventBox">
                    <div className="event-menu">
                      <div className="img-box1">
                        <h5>CORPORATE EVENTS</h5>
                        <div className="img-info">
                          <img src={hotOffer} alt="" />
                          <div className="menuOffer">
                            <a href="dixit.com">MEETINGS AND EVENTS</a>
                          </div>
                        </div>
                        <div className="img-info">
                          <img src={unbox} alt="" />
                          <div className="menuOffer">
                            <a href="dixit.com">VENUES</a>
                          </div>
                        </div>
                      </div>
                      <div className="img-box1">
                        <h5>WEDDINGS</h5>
                        <div className="img-info">
                          <img src={benefit} alt="" />
                          <div className="menuOffer">
                            <a href="dixit.com">WEDDINGS</a>
                          </div>
                        </div>
                        <div className="img-info">
                          <img src={beach} alt="" />
                          <div className="menuOffer">
                            <a href="dixit.com">WEDDINGS SPECIALIST</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="img-menu">
                      <div className="img1">
                        <img src={unbox} alt="" />
                        <div className="txt-img">
                          <h5>MEETINGS & EVENTS</h5>
                          <p>REQUEST FOR PROPOSOL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
