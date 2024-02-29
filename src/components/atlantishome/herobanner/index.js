import React from "react";
import Slider from "react-slick";
import "./heroAtlantis.scss";
import slide1 from "../../../assets/images/slide1.webp";
import slide2 from "../../../assets/images/slide2.webp";
import slide3 from "../../../assets/images/slide3.webp";
import slide4 from "../../../assets/images/slide4.webp";
import slide5 from "../../../assets/images/slide5.webp";
import slide6 from "../../../assets/images/slide6.webp";
import slide7 from "../../../assets/images/slide7.webp";
import musicial from "../../../assets/videos/AtlantisVideo.mp4";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function HeroAtlantis() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 1000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="herobanner">
      <div className="container">
        <Slider {...settings}>
          <div className="slider-banner">
            <img src={slide1} alt="" />
            <div className="info-img">
              <h2>New Year's Gala Dinner</h2>
              <p>Ring in 2024 with a performance from musical icon Sting</p>
              <div className="button">
                <button className="button blue solid">
                  <BsFillPlayCircleFill className="icon" /> Play Video
                </button>
              </div>
            </div>
          </div>
          <div className="slider-banner">
            <img src={slide2} alt="" />
            <div className="info-img2">
              <h2>Unbox The Magic</h2>
              <p>
                Experience the gift of extraordinary this festive season at
                Dubai’s most iconic resort.
              </p>
              <div className="button">
                <button className="button blue solid">
                  FESTIVE AT ATLANTIS
                </button>
              </div>
            </div>
          </div>
          <div className="slider-banner">
            <video src={musicial} autoplay={"true"} controls muted loop></video>
          </div>
          <div className="slider-banner">
            <img src={slide3} alt="" />
            <div className="info-img2">
              <h2>Unbox The Magic</h2>
              <p>
                Experience the gift of extraordinary this festive season at
                Dubai’s most iconic resort.
              </p>
              <div className="button">
                <button className="button blue solid">
                  FESTIVE AT ATLANTIS
                </button>
              </div>
            </div>
          </div>
          <div className="slider-banner">
            <img src={slide4} alt="" />
            <div className="info-img2">
              <h2>Unbox The Magic</h2>
              <p>
                Experience the gift of extraordinary this festive season at
                Dubai’s most iconic resort.
              </p>
              <div className="button">
                <button className="blue">FESTIVE AT ATLANTIS</button>
              </div>
            </div>
          </div>
          <div className="slider-banner">
            <img src={slide5} alt="" />
            <div className="info-img2">
              <h2>Unbox The Magic</h2>
              <p>
                Experience the gift of extraordinary this festive season at
                Dubai’s most iconic resort.
              </p>
              <div className="button">
                <button className="blue">FESTIVE AT ATLANTIS</button>
              </div>
            </div>
          </div>
          <div className="slider-banner">
            <img src={slide6} alt="" />
            <div className="info-img2">
              <h2>Unbox The Magic</h2>
              <p>
                Experience the gift of extraordinary this festive season at
                Dubai’s most iconic resort.
              </p>
              <div className="button">
                <button className="blue">FESTIVE AT ATLANTIS</button>
              </div>
            </div>
          </div>
          <div className="slider-banner">
            <img src={slide7} alt="" />
            <div className="info-img2">
              <h2>Unbox The Magic</h2>
              <p>
                Experience the gift of extraordinary this festive season at
                Dubai’s most iconic resort.
              </p>
              <div className="button">
                <button className="blue">FESTIVE AT ATLANTIS</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
