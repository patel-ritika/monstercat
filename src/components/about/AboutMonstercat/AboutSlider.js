import React, {useState, useEffect} from 'react';
import "../../../asset/styles/about/aboutmonstercat/aboutslider.css";
import sliderImage1 from "../../../asset/images/about/aboutmonstercat/sliderimg1.jpg";
import sliderImage2 from "../../../asset/images/about/aboutmonstercat/sliderimg2.jpg";
import sliderImage3 from "../../../asset/images/about/aboutmonstercat/sliderimg3.webp";
import sliderImage4 from "../../../asset/images/about/aboutmonstercat/sliderimg4.jpg";
import logo1 from "../../../asset/images/about/aboutmonstercat/logo1.png";
import logo2 from "../../../asset/images/about/aboutmonstercat/logo2.png";
import logo3 from "../../../asset/images/about/aboutmonstercat/logo3.png";
import logo4 from "../../../asset/images/about/aboutmonstercat/logo4.webp";
import gridImage1 from "../../../asset/images/about/aboutmonstercat/grid1.jpg";
import gridImage2 from "../../../asset/images/about/aboutmonstercat/grid2.webp";
import gridImage3 from "../../../asset/images/about/aboutmonstercat/grid3.webp";
import gridImage4 from "../../../asset/images/about/aboutmonstercat/grid5.jpg";
import gridImage5 from "../../../asset/images/about/aboutmonstercat/grid4.jpg";

const AboutSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

	const sliderImages = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];
	const logos = [logo1, logo2, logo3, logo4];
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

	// Automatically change slides every 1 second
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
		}, 2000);
    
		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId);
	}, [sliderImages.length]);


  return (
    <div className="about-main-container">
			{/* First Section: Image Slider */}
			<div className="about-slider-section">
				{/* Image Display */}
				<div className="about-slider-image-container">
					<img
						src={sliderImages[currentSlide]}
						alt={`Slide ${currentSlide + 1}`}
						className="about-slider-image"
					/>
				</div>

				{/* Progress Bar (Navigation) */}
				<div className="about-progress-bar">
					{sliderImages.map((_, index) => (
						<span
							key={index}
							className={`about-progress-step ${
								currentSlide === index ? "active" : ""
							}`}
							onClick={() => setCurrentSlide(index)}
						></span>
					))}
				</div>
			</div>

			{/* Second Section: Logos and Image Grid */}
			<div className="about-grid-section">
				{/* 2x2 Logo Grid */}
				<div className="about-logo-grid">
					{logos.map((logo, index) => (
						<div key={index} className="about-logo-item">
							<img src={logo} alt={`Logo ${index + 1}`} />
						</div>
					))}
				</div>

				{/* Single Row with 5 Columns */}
				<div className="about-image-grid">
					{gridImages.map((image, index) => (
						<div key={index} className="about-grid-item">
							<img src={image} alt={`Grid ${index + 1}`} />
							<button className="about-image-button">
								{buttonNames[index]}
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
  );
}

export default AboutSlider;
