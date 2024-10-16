import React from 'react';
import "../../../asset/styles/about/aboutcontact/contactfooter.css";
import gridImage1 from "../../../asset/images/about/aboutmonstercat/grid1.jpg";
import gridImage2 from "../../../asset/images/about/aboutmonstercat/grid2.webp";
import gridImage3 from "../../../asset/images/about/aboutmonstercat/grid3.webp";
import gridImage4 from "../../../asset/images/about/aboutmonstercat/grid5.jpg";
import gridImage5 from "../../../asset/images/about/aboutmonstercat/grid4.jpg";


const ContactFooter = () => {
  const gridImages = [
		gridImage1,
		gridImage2,
		gridImage3,
		gridImage4,
		gridImage5,
	];
	const buttonNames = [
		"Diversity",
		"Environmental",
		"Ethics",
		"About Us",
		"Contact Us",
	];

  return (
    <div className="contact-main-container">
    {/* Second Section: Logos and Image Grid */}
    <div className="contact-grid-section">
      <div className="contact-image-grid">
        {gridImages.map((image, index) => (
          <div key={index} className="contact-grid-item">
            <img src={image} alt={`Grid ${index + 1}`} />
            <button className="contact-image-button">
              {buttonNames[index]}
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default ContactFooter;
