import React, {useState} from 'react';
import "../../../asset/styles/about/aboutcontact/accordion.css";

const Accordion = () => {
// State to track which panel is active
const [activeIndex, setActiveIndex] = useState(null);

// Data for the accordion items
const accordionData = [
  {
    title: "Where can I get more information on Monstercat Gold?",
    content: "You can get more info about our Gold Program here.",
  },
  {
    title: "Where can I get music for my YouTube/Twitch channel?",
    content: "Visit our YouTube and Twitch section for more details.",
  },
  {
    title: "Sync and Partnership Info and Inquiry",
    content:
      "For partnerships and sync licensing, please reach out to our support team.",
  },
  {
    title: "I'm having payment issues with my Gold membership.",
    content: "Please visit our payment help section or contact support.",
  },
  {
    title: "I'm having issues with my user login.",
    content:
      "Try resetting your password or contact support if the issue persists.",
  },
];

// Function to handle the accordion click
const handleAccordionClick = (index) => {
  setActiveIndex(activeIndex === index ? null : index); // Toggle active state
};



  return (
    <div className="accordion-container">
			<h1>Need More Info</h1>
			{accordionData.map((item, index) => (
				<div key={index} className="accordion-item">
					<div
						className="accordion-title"
						onClick={() => handleAccordionClick(index)}
					>
						{item.title}
						<span className="accordion-icon">
							{activeIndex === index ? "-" : "+"}
						</span>
					</div>
					{activeIndex === index && (
						<div className="accordion-content">{item.content}</div>
					)}
				</div>
			))}
			<hr />
		</div>
  );
}

export default Accordion;
