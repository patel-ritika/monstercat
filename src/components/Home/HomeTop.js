import React, {useEffect, useState} from 'react';
import "../../asset/styles/home/hometop.css";
import bgImage1 from "../../asset/images/flow1.webp"; // Import your images
import bgImage2 from "../../asset/images/diva.webp";
import bgImage3 from "../../asset/images/solace.jpg";
import smallImage1 from "../../asset/images/flow.jpg"; // Small images
import smallImage2 from "../../asset/images/diva1.webp";
import smallImage3 from "../../asset/images/solace.jpg";

const HomeTop = () => {

  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prevLine) => (prevLine + 1) % 3); // Loop between 3 lines
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-top">
    {/* First Section */}
    <div className={`loading-line ${activeLine === 0 ? "active" : ""}`}>
      <div className="content">
        <img src={bgImage1} alt="Background 1" className="background-image" />
        <img src={smallImage1} alt="Small 1" className="small-image" />
        <h1>FLOW (VIP)</h1>
        <h2>HAYVE</h2>
        <div className="buttons">
          <button>VIEW RELEASE</button>
          <button>LISTEN ON PLAYER</button>
        </div>
      </div>
    </div>

     {/* Second Section */}
     <div className={`loading-line ${activeLine === 1 ? "active" : ""}`}>
        <div className="content">
          <img src={bgImage2} alt="Background 2" className="background-image" />
          <img src={smallImage2} alt="Small 2" className="small-image" />
          <h1>DIVA (SQL<br></br> REMIX)</h1>
          <h2>BISHU & SQL</h2>
          <div className="buttons">
            <button>VIEW RELEASE</button>
            <button>LISTEN ON PLAYER</button>
          </div>
        </div>
      </div>

       {/* Third Section */}
       <div className={`loading-line ${activeLine === 2 ? "active" : ""}`}>
        <div className="content">
          <img src={bgImage3} alt="Background 3" className="background-image" />
          <img src={smallImage3} alt="Small 3" className="small-image" />
          <h1>SOLACE</h1>
          <h2>SHINGO NAKAMURA</h2>
          <div className="buttons">
            <button>VIEW RELEASE</button>
            <button>LISTEN ON PLAYER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
