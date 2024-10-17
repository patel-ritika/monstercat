import React from 'react';
import "../../asset/styles/partnership/logo_partnersection.css";
import logo1 from "../../asset/images/partnership/logo1.webp";
import logo2 from "../../asset/images/partnership/logo2.webp";
import logo3 from "../../asset/images/partnership/logo3.png";
import logo4 from "../../asset/images/partnership/logo4.webp";

const Logo_partnersection = () => {
  return (
    <div className="logo-partner-section">
			{/* Section 1: We've happily worked with */}
			<div className="logo-section">
				<h1>We've happily worked with</h1>
				<div className="logo-row">
					<img src={logo1} alt="Partner Logo 1" className="partner-logo" />
					<img src={logo2} alt="Partner Logo 2" className="partner-logo" />
					<img src={logo3} alt="Partner Logo 3" className="partner-logo" />
					<img src={logo4} alt="Partner Logo 4" className="partner-logo" />
				</div>
			</div>

			{/* Section 2: What Our Partners Think */}
			<div className="feedback-section">
				<h1>What Our Partners Think</h1>
				<div className="feedback-row">
					<div className="feedback-card">
						<p>
							“This collaboration really brings Monstercat's music and artists
							to life in SMITE, with authentic audio and special touches
							Monstercat fans will love. There's something magical about hearing
							a sick Slushii drop perfectly timed to a burst of damage.”
						</p>
					</div>
					<div className="feedback-card">
						<p>
							“Monstercat has become an intrinsic partner in the identity of
							Rocket League. We have grown as partners together and in their
							tenth year as a label, we are happy to celebrate all that they
							have become and what we have become together”
						</p>
					</div>
					<div className="feedback-card">
						<p>
							“Monstercat understands that games are the future and they’re one
							of the few labels that are making licensing easier for the gaming
							industry.”
						</p>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Logo_partnersection;
