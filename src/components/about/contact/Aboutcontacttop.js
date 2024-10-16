import React from 'react';
import "../../../asset/styles/about/aboutcontact/aboutcontacttop.css";

const Aboutcontacttop = () => {
  return (
    <div className="contact-demo-submission-container">
			<div className="contact-background-overlay">
				{/* Title Section */}
				<h1 className="contact-title">Contact Us</h1>

				{/* Content Section */}
				<div className="contact-content-section">
					{/* Left Side: Submit a Demo */}
					<div className="contact-left-side">
						<h2>Submit a Demo</h2>
					</div>

					{/* Right Side: Demo Information */}
					<div className="contact-right-side">
						<h3>Have a demo to submit?</h3>
						<p>
							We take the time to listen to every demo submitted. Please only
							submit your best and original work.
						</p>

						{/* Demo Categories */}
						<ul className="contact-demo-categories-contact">
							<li>Uncaged Demo</li>
							<li>Instinct Demo</li>
							<li>Silk Demo</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Aboutcontacttop;
