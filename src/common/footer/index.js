import React from "react";
import "./footer.scss";
import logo from "../../assets/logos/atlantis_the_palm_logo_white_400x97.webp";
import { AiOutlinePlus } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-main-padding">
          <div className="footer-flex-main">
            <div className="footer-flex-item">
              <img src={logo} alt="" />
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>What's on</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Atlantis Blog</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Culinary Month</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Festive Celebrations</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">New Year's Eve</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>Memberships</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Atlantis Member Rate</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">The Atlantis Circle</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>About</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Atlantis, The Palm</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Atlantis The Royal</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Travel Partners</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Sustainability</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Location</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Contact Us</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">FAQs</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>Terms & Conditions</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Atlantis Dubai Sitemap</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Resort Terms</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Privercy Policy</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Website Terms</a>
                </div>
              </div>
            </div>
            <div className="footer-flex-item">
              <div className="footer-border-top">
                <div className="topic-head">
                  <h4>Kerzner</h4>
                  <AiOutlinePlus className="icon-plus" />
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">One&Only</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Rare Finds</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Siro</a>
                </div>
                <div className="footer-hoveAfter">
                  <a href="dixit.com">Careers</a>
                </div>
              </div>
            </div>
          </div>
          <div className="center-icon">
            <div className="icons">
              <FiLinkedin
                style={{
                  color: "#0077b5",
                  background: "#fff",
                  borderRadius: "2px",
                }}
              />
              <CiTwitter style={{ color: "#00ddff" }} />
              <ImFacebook2
                style={{
                  color: "00f",
                  background: "#fff",
                  padding: "0px",
                  borderRadius: "2px",
                }}
              />
              <FaSquareInstagram style={{ color: "rgba(238,42,123,1)" }} />
              <FaYoutube
                style={{
                  color: "red",
                  background: "#fff",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
          <div className="terms ">
            <p>2023 © Kerzner International Limited. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
