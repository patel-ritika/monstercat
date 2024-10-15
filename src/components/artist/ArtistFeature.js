import React, {useState} from 'react';
import "../../asset/styles/artist/artistfeature.css";
import img1 from "../../asset/images/artists/artistfeature/img1.webp";
import img2 from "../../asset/images/artists/artistfeature/img2.webp";
import img3 from "../../asset/images/artists/artistfeature/img3.webp";
import img4 from "../../asset/images/artists/artistfeature/img4.jpg";
import img5 from "../../asset/images/artists/artistfeature/img5.jpg";
import img6 from "../../asset/images/artists/artistfeature/img6.webp";
import img7 from "../../asset/images/artists/artistfeature/img7.jpg";
import img8 from "../../asset/images/artists/artistfeature/img8.webp";
import img9 from "../../asset/images/artists/artistfeature/img9.webp";
import img10 from "../../asset/images/artists/artistfeature/img10.webp";
import img11 from "../../asset/images/artists/artistfeature/img11.jpg";
import img12 from "../../asset/images/artists/artistfeature/img12.webp";
import img13 from "../../asset/images/artists/artistfeature/img13.webp";
import img14 from "../../asset/images/artists/artistfeature/img14.jpg";
import img15 from "../../asset/images/artists/artistfeature/img15.jpg";
import img16 from "../../asset/images/artists/artistfeature/img16.webp";
import img17 from "../../asset/images/artists/artistfeature/img17.webp";
import img18 from "../../asset/images/artists/artistfeature/img18.webp";
import img19 from "../../asset/images/artists/artistfeature/img19.webp";
import img20 from "../../asset/images/artists/artistfeature/img20.webp";


const ArtistFeature = () => {
  // State to keep track of the current index of the displayed images
	const [currentIndex, setCurrentIndex] = useState(0);

	// Array of all 20 images
	const images = [
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
		img8,
		img9,
		img10,
		img11,
		img12,
		img13,
		img14,
		img15,
		img16,
		img17,
		img18,
		img19,
		img20,
	];
  return (
    <div className="slider-container-artists">
    {/* Left Content */}
    <div className="left-content-artists">
      <h1>Monstercat</h1>
      <p>Artists</p>
      <p>Featured</p>
    </div>

    {/* Image Slider */}
    <div className="slider-artists">
      <div className="image-container-artists">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  </div>
  );
}

export default ArtistFeature;
