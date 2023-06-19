import React from "react";
import BannerBackground from "../../Assets/home-banner-background.png";
import BannerImage from "../../Assets/a.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container" >
          <img src={BannerBackground} alt=""  />
        </div>
        <div className="home-text-section" style={{alignContent:"center",marginLeft:"70px"}}>
          <h1 className="primary-heading">
            Lorem ipsum, dolor
          </h1>
          <p className="primary-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, magnam voluptatem nulla sequi corrupti, 
          </p>
          <button className="secondary-button">
           Sign Up <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section" >
          <img src={BannerImage} alt="" style={{height:"500px",width:"500px",borderRadius:"50%",objectFit:"cover"}}/>
        </div>
      </div>
    </div>
  );
};

export default Home;