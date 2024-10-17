import React from 'react';
import "../../asset/styles/partnership/musicform.css";

const MusicForm = () => {
  return (
   
		<div className="music-license-section">
			{/* Section Heading and Description */}
			<div className="text-content">
				<h1>Looking to License Music?</h1>
				<p>
					Whether you need a music license for your non-profit organization or
					for a AAA video game development, our Sync and Partnerships team is
					ready to help! Email us at:
					<a href="mailto:licensing@monstercat.com" className="email-link">
						{" "}
						licensing@monstercat.com
					</a>
				</p>
			</div>

			{/* Bordered Form Container */}
			<div className="form-container">
				<form className="license-form">
					{/* First Row */}
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="fullName">Full Name*</label>
							<input type="text" id="fullName" name="fullName" required />
						</div>
						<div className="form-group">
							<label htmlFor="email">Email*</label>
							<input type="email" id="email" name="email" required />
						</div>
					</div>

					{/* Second Row */}
					<div className="form-row">
						<div className="form-group">
							<label htmlFor="organization">
								Content Creator or Organization?*
							</label>
							<input
								type="text"
								id="organization"
								name="organization"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="typeOfUse">Type of Use*</label>
							<input type="text" id="typeOfUse" name="typeOfUse" required />
						</div>
					</div>

					{/* Submit Button */}
					<button type="submit" className="submit-btn">
						Submit
					</button>
				</form>
			</div>
		</div>
  );
}

export default MusicForm;
