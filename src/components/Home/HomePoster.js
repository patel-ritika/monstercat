import React from 'react';
import "../../asset/styles/home/homeposter.css";
import uncaged from "../../asset/images/uncaged.jpg";
import instinct from "../../asset/images/instinct.webp";
import silk from "../../asset/images/silk.jpg";
import vir from "../../asset/images/vir.webp";
import flow from "../../asset/images/flow.jpg";
import gold from "../../asset/images/gold.jpg";
import dance from "../../asset/images/dance.webp";
import relax from "../../asset/images/relax.webp";
import deep from "../../asset/images/deep.webp";
import game from "../../asset/images/game.jpg";
import gold1 from "../../asset/images/gold.webp";
import sync from "../../asset/images/sync.webp";

const HomePoster = () => {
  return (
    <div className="home-poster">
    {/* Top section with h2, paragraph, and button */}
    <div className="top-section">
      <h2>Leading the movement towards artist sustainability</h2>
      <p>
      At Monstercat, we strive to create artist sustainability through novel partnerships, career flexibility and a global commuinity
      </p>
      <button className="learn-more-btn">
        Learn More <span className="arrow">→</span>
      </button>
    </div>

{/* Our Brands section */}
<h3 className="section-title">Our Brands</h3>
      <div className="image-row">
        {/* First Row */}
        <div className="image-box">
          <p className="image-overlay-top">Latest Release</p>
          <img src={uncaged} alt="Searched Earth" />
          <p className="image-overlay-bottom">Searched Earth</p>
        </div>
        <div className="image-box">
          <p className="image-overlay-top">Our Artists</p>
          <img src={instinct} alt="Hayve" />
          <p className="image-overlay-bottom">Hayve</p>
        </div>
        <div className="image-box">
          <p className="image-overlay-top">Featured News</p>
          <img src={silk} alt="Monstercat Insider" />
          <p className="image-overlay-bottom">
            Monstercat Insider: New Features for Monstercat Gold
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="image-row">
        <div className="image-box">
          <img src={vir} alt="Image 4" />
        </div>
        <div className="image-box">
          <img src={flow} alt="Image 5" />
        </div>
        <div className="image-box">
          <img src={gold} alt="Image 6" />
        </div>
      </div>

{/* Our Playlists section */}
<div className="playlists-section">
        <h3 className="section-title">Our Playlists</h3>
        <div className="listen-on">
          Listen on Monstercat Player <span className="arrow">→</span>
        </div>
      </div>

      {/* Playlist Images */}
      <div className="image-row">
        <div className="image-box">
          <img src={dance} alt="Playlist 1" />
        </div>
        <div className="image-box">
          <img src={relax} alt="Playlist 2" />
        </div>
        <div className="image-box">
          <img src={deep} alt="Playlist 3" />
        </div>
        <div className="image-box">
          <img src={game} alt="Playlist 4" />
        </div>
      </div>

{/* Use Our Music section */}
<div className="use-our-music-section">
        <h3 className="section-title">Use Our Music</h3>
        <hr />
        <div className="two-image-row">
          <div className="image-box">
            <p className="image-overlay-top">Unlock Gold Features</p>
            <img src={gold1} alt="Unlock Gold Features" />
            <p className="paragraph">
            Monstercat Gold is an individual music licensing subscription<br></br>
             that gives members access to thousands of high-quality<br></br>
              songs to use in their creative content.
            </p>
            <button className="learn-more-btn">
              Learn More <span className="arrow">→</span>
            </button>
          </div>
          <div className="image-box">
            <p className="image-overlay-top">Sync & Partnerships</p>
            <img src={sync} alt="Sync & Partnerships" />
            <p className="paragraph">
            Discover the unique partnerships and diverse audiences that<br></br>
             have embraced the Monstercat brand.
            </p>
            <button className="learn-more-btn">
              Learn More <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePoster;
