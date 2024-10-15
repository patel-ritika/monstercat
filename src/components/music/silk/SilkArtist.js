import React, {useState, useEffect, useRef } from 'react';
import "../../../asset/styles/music/silk/silkartist.css";
import artist1 from "../../../asset/images/ara1.webp";
import artist2 from "../../../asset/images/ara2.webp";
import artist3 from "../../../asset/images/ara3.webp";
import artist4 from "../../../asset/images/ara4.webp";
import artist5 from "../../../asset/images/ara5.webp";
import artist6 from "../../../asset/images/ara6.jpg";

const SilkArtist = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
	const cardWrapperRef = useRef(null);

	const images = [
		{ img: artist4, title: "Feed Me" },
		{ img: artist3, title: "Whales" },
		{ img: artist6, title: "Lights" },
		{ img: artist2, title: "Outwild" },
		{ img: artist1, title: "Outwild" },
		{ img: artist5, title: "Ehiorobo" },
	];

	const [cardsPerView, setCardsPerView] = useState(4);

	const updateCardsPerView = () => {
		const screenWidth = window.innerWidth;
		if (screenWidth >= 1024) {
			setCardsPerView(4);
		} else if (screenWidth >= 768) {
			setCardsPerView(3);
		} else if (screenWidth >= 480) {
			setCardsPerView(2);
		} else {
			setCardsPerView(1);
		}
	};

	useEffect(() => {
		updateCardsPerView();
		window.addEventListener("resize", updateCardsPerView);
		return () => window.removeEventListener("resize", updateCardsPerView);
	}, []);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex < images.length - cardsPerView ? prevIndex + 1 : 0
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex > 0 ? prevIndex - 1 : images.length - cardsPerView
		);
	};

	const calculateTranslateX = () => {
		if (cardWrapperRef.current) {
			const cardWidth =
				cardWrapperRef.current.querySelector(".card-silk").clientWidth;
			return `translateX(-${currentIndex * cardWidth}px)`;
		}
		return "translateX(0)";
	};


  return (
    <div className="artists-container-silk">
			<h1 className="section-title-artist-silk">Artists on Instinct</h1>
			<div className="card-container-silk">
				<button
					className="nav-button-silk left-button-silk"
					onClick={handlePrev}
					disabled={currentIndex === 0 && !currentIndex}
				>
					&#8592;
				</button>
				<div className="card-slider-silk">
					<div
						className="card-wrapper-silk"
						ref={cardWrapperRef}
						style={{
							transform: calculateTranslateX(),
							transition: "transform 0.3s ease-in-out",
						}}
					>
						{images.map((image, index) => (
							<div key={index} className="card-silk">
								<img src={image.img} alt={image.title} />
								<p className="card-title-silk">{image.title}</p>
							</div>
						))}
					</div>
				</div>
				<button
					className="nav-button-silk right-button-silk"
					onClick={handleNext}
					disabled={currentIndex >= images.length - cardsPerView}
				>
					&#8594;
				</button>
			</div>
		</div>

  );
}

export default SilkArtist;
