import { useNavigate } from "react-router-dom"

import sv1 from "../assets/sv1.png";
import sv2 from "../assets/sv2.png";
import sv3 from "../assets/sv3.png";
import sv4 from "../assets/sv4.png";
import sv5 from "../assets/sv5.png";
import sv6 from "../assets/sv6.png";
import sv7 from "../assets/sv7.png";
import sv8 from "../assets/sv8.png";
import sv9 from "../assets/sv9.png";
import sv10 from "../assets/sv10.png";
import sv11 from "../assets/sv11.png";
import sv12 from "../assets/image-high-h7a1tw.webp";
import sv13 from "../assets/sv9-logo.png";
import sv14 from "../assets/sv10-logo.png";

function Dashboard() {

const navigate = useNavigate();

  const sets = [
    { id: "sv01", image: sv1, alt: "Scarlet & Violet" },
    { id: "sv02", image: sv2, alt: "Paldea Evolved" },
    { id: "sv03", image: sv3, alt: "Obsidian Flames" },
    { id: "sv04", image: sv5, alt: "Paradox Rift" },
    { id: "sv05", image: sv7, alt: "Temporal Forces" },
    { id: "sv06", image: sv8, alt: "Twilight Masquerade" },
    { id: "sv07", image: sv10, alt: "Stellar Crown" },
    { id: "sv08", image: sv11, alt: "Surging Sparks" },
    { id: "sv09", image: sv13, alt: "Journey Together" },
    { id: "sv10", image: sv14, alt: "Destined Rivals" },

  ];

  return (
    <section className="content">
      <div className="content-description">
      <h2>Search The Newest Sets</h2>
        <p>Choose a set and add any card to your collection!</p>
        </div>
      <div className="card-grid">
        {sets.map((set) => {
          return (
            <div 
              key={set.id} 
              className="card-loader"
              onClick={() => navigate(`/set/${set.id}`)}
              >
              <img src={set.image} alt={set.alt} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Dashboard;
