import React, {useState, useEffect, useRef} from 'react';
import "../../../asset/styles/music/instinct/instinctartist.css";
import artist1 from "../../../asset//images/artist1.webp";
import artist2 from "../../../asset/images/artist2.webp";
import artist3 from "../../../asset/images/artist3.webp";
import artist4 from "../../../asset/images/artist4.webp";
import artist5 from "../../../asset/images/artist5.jpg";
import artist6 from "../../../asset/images/artist6.webp";

const InstinctArtist = () => {
// State to track the current index of the slider
const [currentIndex, setCurrentIndex] = useState(0);

// Reference to the card container to measure width dynamically
const cardWrapperRef = useRef(null);

// Array of image URLs and artist titles
const images = [
  { img: artist1, title: "Feed Me" },
  { img: artist2, title: "Whales" },
  { img: artist3, title: "Lights" },
  { img: artist4, title: "Outwild" },
  { img: artist5, title: "Outwild" },
  { img: artist6, title: "Ehiorobo" },
];

// State to store the number of visible cards
const [cardsPerView, setCardsPerView] = useState(4);

// Calculate number of cards to display based on screen size
const updateCardsPerView = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    setCardsPerView(4); // Show 4 cards on large screens
  } else if (screenWidth >= 768) {
    setCardsPerView(3); // Show 3 cards on tablets
  } else if (screenWidth >= 480) {
    setCardsPerView(2); // Show 2 cards on smaller screens
  } else {
    setCardsPerView(1); // Show 1 card on very small screens
  }
};

useEffect(() => {
  // Set the initial number of cards based on screen size
  updateCardsPerView();

  // Add event listener to update cards per view on window resize
  window.addEventListener("resize", updateCardsPerView);

  // Clean up the event listener on component unmount
  return () => window.removeEventListener("resize", updateCardsPerView);
}, []);

// Handler for moving to the next set of cards
const handleNext = () => {
  if (currentIndex < images.length - cardsPerView) {
    setCurrentIndex(currentIndex + 1);
  }
};

// Handler for moving to the previous set of cards
const handlePrev = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

// Calculate the width of a single card and move slider by that width
const calculateTranslateX = () => {
  if (cardWrapperRef.current) {
    const cardWidth =
      cardWrapperRef.current.querySelector(".card-instinct").clientWidth;
    return `translateX(-${currentIndex * (cardWidth + 16)}px)`; // Include 16px as margin between cards
  }
  return "translateX(0)";
};


  return (
    <div className="artists-container-instinct">
			{/* Section Title */}
			<h1 className="section-title-artist-instinct">Artists on Instinct</h1>

			{/* Card Slider Container */}
			<div className="card-container-instinct">
				{/* Previous Button */}
				<button
					className="nav-button-instinct left-button-instinct"
					onClick={handlePrev}
					disabled={currentIndex === 0}
				>
					&#8592;
				</button>

				{/* Card Slider */}
				<div className="card-sliderv-instinct">
					<div
						className="card-wrapper-instinct"
						ref={cardWrapperRef}
						style={{
							transform: calculateTranslateX(),
							transition: "transform 0.3s ease-in-out",
						}}
					>
						{images.map((image, index) => (
							<div key={index} className="card-instinct">
								<img src={image.img} alt={image.title} />
								<p className="card-title-instinct">{image.title}</p>
							</div>
						))}
					</div>
				</div>

				{/* Next Button */}
				<button
					className="nav-button-instinct right-button-instinct"
					onClick={handleNext}
					disabled={currentIndex >= images.length - cardsPerView}
				>
					&#8594;
				</button>
			</div>
		</div>
  );
}

export default InstinctArtist;
