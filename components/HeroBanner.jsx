import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { IoIosArrowForward } from "react-icons/io";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h3>{heroBanner.midText}</h3>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h1>{heroBanner.largeText1}</h1>
        <h2>{heroBanner.largeText2}</h2>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        />
      </div>
      <div className="button-container">
        <Link href="https://www.instagram.com/_kicksthetic/" target="_blank">
          <button type="button">
            {heroBanner.buttonText}
            <IoIosArrowForward />
          </button>
        </Link>
      </div>
      <div className="hero-banner-description">
        <div className="description-title">
          <p>MODEL</p>
          <p>BRAND</p>
          <p>DESIGN</p>


          <div className="description-detail">
            <p className="modelName">Airforce 1</p>
            <p className="brandName">Nike</p>
            <p className="designName">Cartoonic Pastel Black </p>
          </div>
        </div>
      </div>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,69.3C960,64,1200,32,1320,16L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg> */}
    </div>
  );
};

export default HeroBanner;
