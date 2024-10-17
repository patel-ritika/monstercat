import React from 'react';
import "../../asset/styles/partnership/partnershiptop.css";
import img1 from "../../asset/images/partnership/img1.webp";
import img2 from "../../asset/images/partnership/img2.webp";
import img3 from "../../asset/images/partnership/img3.webp";
import img4 from "../../asset/images/partnership/img4.webp";
import img5 from "../../asset/images/partnership/img5.webp";
import img6 from "../../asset/images/partnership/img6.webp";

const PartnershipTop = () => {
  return (
    <div className="partnership-container">
    {/* Existing Partnership Section */}
    <div className="partnership-top">
        <div className="content">
            <h1>Sync & Partnerships</h1>
            <p>
                To further our mission of creating artist sustainability, we thrive
                on developing forward-thinking opportunities for our roster to
                expand their audience with partners that build impactful narratives
                around their music.
            </p>
            <div className="buttons">
                <button className="btn partner-btn">Partner with us</button>
                <button className="btn license-btn">License Music</button>
            </div>
        </div>
    </div>

    {/* New Recent Collaborations Section */}
    <div className="recent-collaborations">
        <h2>Recent Collaborations</h2>
        <p>
            Explore some of our latest partnerships and activations with
            innovative platforms and games such as Rocket League, Fortnite, and
            SMITE.
        </p>

        {/* Grid Container */}
        <div className="collaborations-grid">
            {/* Sample grid items with hover effects */}
            <div className="collab-item">
                <img src={img1} alt="Collab 1" />
                <div className="overlay">
                    <p>Monstercat Joins Fortnite with Yonder Radio</p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
            <div className="collab-item">
                <img src={img2} alt="Collab 2" />
                <div className="overlay">
                    <p>Smite Monstercat Battle Pass</p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
            <div className="collab-item">
                <img src={img3} alt="Collab 3" />
                <div className="overlay">
                    <p>Monstercat Announces Roblox Partnership Read More</p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
            <div className="collab-item">
                <img src={img4} alt="Collab 4" />
                <div className="overlay">
                    <p>The Skin-spiration Behind SMITEs Monstercat Battle Pass</p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
            <div className="collab-item">
                <img src={img5} alt="Collab 5" />
                <div className="overlay">
                    <p>Inside Kaskades Visceral Fortnite Concert Tonight</p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
            <div className="collab-item">
                <img src={img6} alt="Collab 6" />
                <div className="overlay">
                    <p>THE GAMING LOUNGE: BEAT SABER</p>
                    <button className="read-more-btn">Read More</button>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default PartnershipTop;
