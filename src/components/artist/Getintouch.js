import React from 'react';
import "../../asset/styles/artist/getintouch.css";
import sampleImage from "../../asset/images/artists/artistcenter/big.webp"; // Replace with the path to your image


const Getintouch = () => {
  return (
    <div className="artist-container">
    <div className="artist-content">
      <div className="artist-left">
        <h1>Want to be an artist on Monstercat?</h1>
        <p>Get in touch with us!</p>
        <button className="learn-more-btn-vision">Learn More</button>
      </div>
      <div className="artist-right">
        <img src={sampleImage} alt="Artist" />
      </div>
    </div>
  </div>
  );
}

export default Getintouch;
