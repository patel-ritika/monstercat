import React from 'react';
import "../../asset/styles/lostcivilaization/lost_civilaizationtop.css";
import bgImage from "../../asset/images/lost/bg.jpg"; // Import the image


const Lost_civilaizationTop = () => {
  return (
    <div
    className="lost-civilization-top"
    style={{ backgroundImage: `url(${bgImage})` }} // Inline style for background image
>
    {/* Text Content */}
    <div className="text-overlay">
        <h1>Lost Civilization</h1>
        <p>
            Long ago when the world was new and what we know had yet to manifest,
            three powerful forces protected balance. Together these forces living
            in harmony created powerful rhythms that could be felt across all the
            land. When in sync, all sounds thrive; when divided, we are doomed to
            fall into the silence.
        </p>
    </div>
    {/* Video Section */}
    <div className="video-section">
        <iframe
            className="video"
            src="https://player.vimeo.com/video/788121702?h=09ab026ca4&autoplay=1&muted=1" // Autoplay and mute
            width="100%"
            height="400"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Lost Civilization Video"
        ></iframe>
    </div>
    {/* Button Section
    <div className="button-section">
        <button className="instagram-button">Stay tuned on Instagram</button>
    </div> */}
</div>
  );
}

export default Lost_civilaizationTop;
