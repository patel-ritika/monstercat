import React from 'react';
import "../../asset/styles/home/homeget.css";
import img1 from "../../asset/images/event.jpg";
import img2 from "../../asset/images/shop.webp";
import img3 from "../../asset/images/show.jpg";
import img4 from "../../asset/images/tv.webp";
import img5 from "../../asset/images/wild.jpg";
import img6 from "../../asset/images/press.jpg";

const HomeGet = () => {
    const images = [
        { src: img1, heading: 'EVENTS', text: 'Find out where you can experience Monstercat artists performing live around the world' },
        { src: img2, heading: 'SHOP', text: 'Cop the latest looks from our apparel collections and dig through our vinyl offerings' },
        { src: img3, heading: 'SILK SHOWCASE', text: 'Enjoy Monstercat Silks weekly radio show&podcast, featuring the best in progressive house, trance, and more' },
        { src: img4, heading: 'MonstercatTV', text: 'Tune in to our weekly Twich broadcast for livestreamed sets, artist residencies, original content and more' },
        { src: img5, heading: 'CALL OF THE WILD', text: 'Dive into an unbound exploration of sound with Monstercats weekly radio show&podcast' },
        { src: img6, heading: 'PRESS', text: 'Catch up on breaking news, interviews, and Monstercat announcements in the media' }
      ];

  return (
    <div className="home-get-container">
      <h2>GET INVOLVED</h2>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image.src} alt={`Image ${index + 1}`} />
            <h3>{image.heading}</h3>
            <p>{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeGet;
