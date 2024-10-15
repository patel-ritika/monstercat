import React, {useState, useEffect} from 'react';
import "../../../asset/styles/music/ourmusic/featuretop.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import sliderImage1 from "../../../asset/images/feature1.webp";
import sliderImage2 from "../../../asset/images/feature2.webp";
import sliderImage3 from "../../../asset/images/feature3.webp";
import sliderImage4 from "../../../asset/images/feature4.webp";
import sliderImage5 from "../../../asset/images/feature5.webp";

const FeatureTop = () => {
    const slides = [
		{
			bgImage: sliderImage1,
			overlayImage: sliderImage1,
			content: "Heal",
			subcontent: "Diesel & Crankdat",
			buttonLabel: "View Release",
		},
		{
			bgImage: sliderImage2,
			overlayImage: sliderImage2,
			content: "Eat Sleep Rage",
			subcontent: "Ray Volpe",
			buttonLabel: "View Release",
		},
		{
			bgImage: sliderImage3,
			overlayImage: sliderImage3,
			content: "The Secret Language of Trees",
			subcontent: "BT",
			buttonLabel: "View Release",
		},
		{
			bgImage: sliderImage4,
			overlayImage: sliderImage4,
			content: "Fever",
			subcontent: "Lewis Capaldi",
			buttonLabel: "View Release",
		},
		{
			bgImage: sliderImage5,
			overlayImage: sliderImage5,
			content: "Full Me",
			subcontent: "Chyl",
			buttonLabel: "View Release",
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === slides.length - 1 ? 0 : prevIndex + 1
			);
		}, 2000);
		return () => clearInterval(interval);
	}, [slides.length]);

	const goToNextSlide = () => {
		setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
	};

	const goToPreviousSlide = () => {
		setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
	};

  return (
    <div className="monstercat-section">
			{/* Header Title */}
			<h1 className="main-title">Monstercat</h1>
			<h2 className="main-title-sub-title">Music</h2>
			<hr className="title-divider" />
			<p className="sub-title">Featured Releases</p>

			{/* Slider Container */}
			<div className="slider-container-music">
				{/* Slide */}
				<div
					className="slide-music"
					style={{
						backgroundImage: `url(${slides[currentIndex].bgImage})`,
					}}
				>
					{/* Dark and Blur Overlay */}
					<div className="dark-blur-overlay"></div>

					{/* Inner Content - Image and Text */}
					<div className="slide-content-music">
						<img
							src={slides[currentIndex].overlayImage}
							alt="Overlay"
							className="overlay-image"
						/>
						<div className="slide-text-music">
							<h2>{slides[currentIndex].content}</h2>
							<p>{slides[currentIndex].subcontent}</p>
							<button className="slide-button-music">
								{slides[currentIndex].buttonLabel}
							</button>
						</div>
					</div>
				</div>

				{/* Navigation Buttons */}
				<button className="nav-button prev" onClick={goToPreviousSlide}>
					<FaArrowLeft />
				</button>
				<button className="nav-button next" onClick={goToNextSlide}>
					<FaArrowRight />
				</button>

				{/* Progress Bar */}
				<div className="progress-bar">
					{slides.map((_, index) => (
						<div
							key={index}
							className={`progress-bar-item ${
								index === currentIndex ? "active" : ""
							}`}
							onClick={() => setCurrentIndex(index)}
						></div>
					))}
				</div>
			</div>
		</div>
  );
}

export default FeatureTop;
