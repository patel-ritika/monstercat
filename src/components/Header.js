import React, {useState} from 'react';
import "../asset/styles/header.css";
import logo from "../asset/images/logo.jpg";
import logo1 from "../asset/images/logo.jpg";
import {
	FaBars,
	FaAngleDown,
	FaAngleUp,
	FaTimes,
	FaInstagram,
	FaFacebookF,
	FaWhatsapp,
	FaTwitter,
	FaTiktok,
} from "react-icons/fa"; // FontAwesome icons
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controls sidebar visibility
	const [activeSubmenu, setActiveSubmenu] = useState(""); // Tracks active submenu

	// Toggle the sidebar menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	// Toggle the visibility of submenus
	const toggleSubmenu = (section) => {
		setActiveSubmenu(activeSubmenu === section ? "" : section);
	};

  return (
    <div className="header">
			{/* Menu Icon (FaBars) */}
			<div className="menu-btn">
				{" "}
				<Link to="/">
					{" "}
					<img src={logo} className="logo-img" />{" "}
				</Link>
				<button onClick={toggleMenu}>
					<FaBars />
				</button>{" "}
				<button
					onClick={() =>
						(window.location.href = "https://www.facebook.com/yourusername")
					}
				>
					<FaFacebookF />
				</button>
				<button
					onClick={() =>
						(window.location.href = "https://www.instagram.com/yourusername")
					}
				>
					<FaInstagram />
				</button>
				<button
					onClick={() =>
						(window.location.href = "https://twitter.com/yourusername")
					}
				>
					<FaTwitter />
				</button>
				<button
					onClick={() => (window.location.href = "https://wa.me/1234567890")}
				>
					<FaWhatsapp />
				</button>
				<button
					onClick={() =>
						(window.location.href = "https://www.tiktok.com/@yourusername")
					}
				>
					<FaTiktok />
				</button>
				<div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
					<button className="close-btn" onClick={toggleMenu}>
						<FaTimes />
					</button>

					<div className="menu-content">
						{/* Logo */}
						<div className="logo">
							{" "}
							<Link to="/">
								<img src={logo1} className="header-logo" />
							</Link>
						</div>

						{/* Menu List */}
						<ul className="menu-list">
							<li>
								<span>Music</span>
								<button onClick={() => toggleSubmenu("music")}>
									{activeSubmenu === "music" ? <FaAngleUp /> : <FaAngleDown />}
								</button>
								{activeSubmenu === "music" && (
									<ul className="submenu">
										<Link
											to="/ourmusic"
											style={{ color: "white", textDecoration: "none" }}
											onClick={() => setIsMenuOpen(false)}
										>
											<li>Our Music</li>
										</Link>{" "}
										<Link
											to="/instinct"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Instinct</li>
										</Link>
										<Link
											to="/uncaged"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Uncaged</li>
										</Link>
										<Link
											to="/silk"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Silk</li>
										</Link>
									</ul>
								)}
							</li>
							<Link
								to="/artists"
								style={{ color: "white", textDecoration: "none" }}
							>
								<li onClick={() => setIsMenuOpen(false)}>Artists</li>
							</Link>
							<li>
								<span>About</span>
								<button onClick={() => toggleSubmenu("about")}>
									{activeSubmenu === "about" ? <FaAngleUp /> : <FaAngleDown />}
								</button>
								{activeSubmenu === "about" && (
									<ul className="submenu">
										<Link
											to="/aboutmonstercat"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>About Monstercat</li>
										</Link>
										<Link
											to="/diversity"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Diversity & Inclusion</li>
										</Link>
										<Link
											to="/ethics"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Code of Ethics</li>
										</Link>
										<Link
											to="/environment"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Environmental</li>
										</Link>
										<Link
											to="/contact"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Contact Us</li>
										</Link>
									</ul>
								)}
							</li>
							<li>
								<Link
									to="/news"
									onClick={() => setIsMenuOpen(false)}
									style={{ color: "white", textDecoration: "none" }}
								>
									News
								</Link>
							</li>
							<li>
								<span>Events</span>
								<button onClick={() => toggleSubmenu("events")}>
									{activeSubmenu === "events" ? <FaAngleUp /> : <FaAngleDown />}
								</button>
								{activeSubmenu === "events" && (
									<ul className="submenu">
										<Link
											to="/events"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Monstercat Events Experience</li>
										</Link>{" "}
										<Link
											to="/upcomming-events"
											onClick={() => setIsMenuOpen(false)}
											style={{ color: "white", textDecoration: "none" }}
										>
											<li>Upcoming Events</li>
										</Link>{" "}
									</ul>
								)}
							</li>
							{/* Additional Menu Items */}
							<Link
								to="/gold"
								onClick={() => setIsMenuOpen(false)}
								style={{ color: "white", textDecoration: "none" }}
							>
								<li>Gold</li>
							</Link>
							<Link
								to="/partnership"
								onClick={() => setIsMenuOpen(false)}
								style={{ color: "white", textDecoration: "none" }}
							>
								{" "}
								<li>Partners</li>
							</Link>
							<Link
								to="/press"
								onClick={() => setIsMenuOpen(false)}
								style={{ color: "white", textDecoration: "none" }}
							>
								{" "}
								<li>Press</li>
							</Link>
							<Link
								to="/shop"
								onClick={() => setIsMenuOpen(false)}
								style={{ color: "white", textDecoration: "none" }}
							>
								{" "}
								<li>Shop</li>
							</Link>
							<Link
								to="/lostcivilaization"
								onClick={() => setIsMenuOpen(false)}
								style={{ color: "white", textDecoration: "none" }}
							>
								<li>Lost Civilization</li>
							</Link>
						</ul>

						{/* Social Media Icons */}
						<div className="social-icons">
							<a
								href="https://www.instagram.com/yourusername"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<FaInstagram />
							</a>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Facebook"
							>
								<FaFacebookF />
							</a>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<FaTwitter />
							</a>
							<a
								href="https://whatsapp.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="WhatsApp"
							>
								<FaWhatsapp />
							</a>
							<a
								href="https://tiktok.com"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="TikTok"
							>
								<FaTiktok />
							</a>
						</div>
						{/* Sign In/Sign Up Buttons */}
						<div className="auth-buttons">
							<button>Sign In</button>
							<button>Sign Up</button>
						</div>
					</div>
				</div>
			</div>
		</div>

  );
}

export default Header;
