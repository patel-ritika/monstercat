import React, {useState} from 'react';
import "../../../asset/styles/music/ourmusic/latestrelease.css";
import releaseImage1 from "../../../asset/images/release1.jpg";
import releaseImage2 from "../../../asset/images/release2.jpg";
import releaseImage3 from "../../../asset/images/release3.webp";
import releaseImage4 from "../../../asset/images/release4.webp";
import releaseImage5 from "../../../asset/images/release5.webp";
import releaseImage6 from "../../../asset/images/release6.jpg";
import releaseImage7 from "../../../asset/images/release7.jpg";
import releaseImage8 from "../../../asset/images/release8.jpg";
import releaseImage9 from "../../../asset/images/release9.jpg";
import releaseImage10 from "../../../asset/images/release10.jpg";
import releaseImage11 from "../../../asset/images/release11.jpg";
import releaseImage12 from "../../../asset/images/release12.webp";
import releaseImage13 from "../../../asset//images/release13.jpg";
import releaseImage14 from "../../../asset/images//release14.webp";
import releaseImage15 from "../../../asset/images/release15.jpg";
import releaseImage16 from "../../../asset/images/release16.webp";
import releaseImage18 from "../../../asset/images/release18.webp";
import releaseImage19 from "../../../asset/images/release19.webp";
import releaseImage20 from "../../../asset/images/release20.jpg";
import releaseImage21 from "../../../asset/images/release21.jpg";
import releaseImage22 from "../../../asset/images/release22.jpg";
import releaseImage23 from "../../../asset/images/release23.jpg";
import releaseImage24 from "../../../asset/images/release24.jpg";
import releaseImage25 from "../../../asset/images/release25.jpg";
import releaseImage26 from "../../../asset/images/release26.jpg";
import releaseImage27 from "../../../asset/images/release27.jpg";
import releaseImage28 from "../../../asset/images/release28.jpg";
import releaseImage29 from "../../../asset/images/release29.jpg";
import releaseImage30 from "../../../asset/images/release30.jpg";
import releaseImage31 from "../../../asset/images/release31.jpg";
import releaseImage32 from "../../../asset/images/release32.jpg";
import releaseImage33 from "../../../asset/images/release33.jpg";
import releaseImage34 from "../../../asset/images/release34.jpg";
import releaseImage35 from "../../../asset/images/release35.jpg";
import releaseImage36 from "../../../asset/images/release36.webp";


const LatestRelease = () => {
// Array to hold the image and content data for all pages
const itemsPerPage = 12;
const totalItems = 36; // Assuming 36 items to display across 3 pages

// Create an array with the imported images and their descriptions
const images = [
    { src: releaseImage1, content: "Koven & Steve Aoki" },
    { src: releaseImage2, content: "Just Kiddin & Ayda Rose" },
    { src: releaseImage3, content: "THIRST" },
    { src: releaseImage4, content: "A.M.R" },
    { src: releaseImage5, content: "WHIPPED CREAM & Fourfive" },
    { src: releaseImage6, content: "Nitro Fun" },
    { src: releaseImage7, content: "Jason Ross" },
    { src: releaseImage8, content: "ATLiens feat. GG Magree" },
    { src: releaseImage9, content: "birø & ALLKNIGHT" },
    { src: releaseImage10, content: "Whales, Soltan & Nat James" },
    { src: releaseImage11, content: "Rezz & Virtual Riot feat. One True God" },
    { src: releaseImage12, content: "Bishu" },
    { src: releaseImage13, content: "Fairlane, No Etiquette & Tima Dee" },
    { src: releaseImage14, content: "Various Artists" },
    { src: releaseImage15, content: "Skybreak & SpaceYeti" },

    {
        src: releaseImage16,
        content: "Sullivan King, Kompany & DIESEL feat. Shaquille O'Neal",
    },
    { src: releaseImage18, content: "Alan Walker, Joe Jonas & Julia Michaels" },
    { src: releaseImage19, content: "RAIZHELL" },
    { src: releaseImage20, content: "Flexible Fire & Dias Ridge" },
    { src: releaseImage21, content: "More Plastic" },
    { src: releaseImage22, content: "SABAI & Kermode" },
    { src: releaseImage23, content: "Punctual & Lewis Thompson" },
    { src: releaseImage24, content: "VØJ & Asketa" },
    { src: releaseImage25, content: "Sound Quelle" },
    { src: releaseImage26, content: "SampliFire" },
    { src: releaseImage27, content: "Codd Dubz" },
    { src: releaseImage28, content: "yetep & Marlhy" },
    { src: releaseImage29, content: "WHIPPED CREAM & Nostalgix" },
    { src: releaseImage30, content: "ORACLE" },
    { src: releaseImage31, content: "AC Slater & Curbi feat. No/Me" },
    { src: releaseImage32, content: "Vikkstar, RetroVision & DYSON" },
    { src: releaseImage33, content: "Jason Ross & Fairlane" },
    { src: releaseImage34, content: "CHYL & Skybreak" },
    {
        src: releaseImage35,
        content: "Shingo Nakamura x Misc.Inc x Oliver River",
    },
    { src: releaseImage36, content: "hayve & Laminar feat. PVC" },
    { src: releaseImage23, content: "Arcando feat. Felix Samuel" },
];

// State to handle the current page
const [currentPage, setCurrentPage] = useState(1);

// Function to handle page changes
const handlePageChange = (page) => {
    setCurrentPage(page);
};

// Calculate items to display based on the current page
const startIndex = (currentPage - 1) * itemsPerPage;
const displayedItems = images.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="latest-releases-container">
    <h1>Latest Releases</h1>
    <p className="explore-text">Explore the latest in this content</p>
    <div className="latest-releases-grid">
        {displayedItems.map((item, index) => (
            <div className="release-item" key={startIndex + index}>
                <img src={item.src} alt={`Release ${startIndex + index + 1}`} />
                <p>{item.content}</p>
            </div>
        ))}
    </div>
    <div className="pagination">
        {Array.from(
            { length: Math.ceil(totalItems / itemsPerPage) },
            (_, index) => (
                <button
                    key={index + 1}
                    className={`pagination-button ${
                        index + 1 === currentPage ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
            )
        )}
    </div>
</div>
  );
}

export default LatestRelease;
