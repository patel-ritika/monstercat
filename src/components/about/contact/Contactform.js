import React from 'react';
import "../../../asset/styles/about/aboutcontact/contactform.css";

const Contactform = () => {
  return (
    <div className="contact-container">
			{/* Left Section */}
			<div className="contact-left">
				<h2>Want to Connect?</h2>
				<h3>Support Inquiries</h3>
				<p>
					<a href="mailto:support@monstercat.com">support@monstercat.com</a>
				</p>

				<h3>Press Inquiries</h3>
				<p>
					<a href="mailto:press@monstercat.com">press@monstercat.com</a>
				</p>

				<h3>Event Inquiries</h3>
				<p>
					<a href="mailto:events@monstercat.com">events@monstercat.com</a>
				</p>
			</div>

			{/* Right Section with Form */}
			<div className="contact-right">
				<div className="form-container">
					<h2>Contact Us</h2>
					<form>
						<div className="form-group">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your name"
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Your email"
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								placeholder="Your message"
								rows="5"
								required
							></textarea>
						</div>

						<button type="submit" className="submit-btn">
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
  );
}

export default Contactform;
