import promo from "../assets/promo.png"
import {useNavigate} from "react-router-dom"

export default function CollectionPromo(){


    const navigate = useNavigate()

    return (
        <section className="collection-promo">
  <div className="promo-container">
    <div className="promo-text">
      <h2>View Your Collection</h2>
      <p>Add cards you own, track their value, and see your entire collection in one place.</p>

      <button 
      onClick={() => navigate(`/collection`)}
      className="promo-btn">View Collection</button>
    </div>

    <div className="promo-preview">
      <div className="preview-header">
        <span>My Collection</span>
        <span className="value">$1,248.32</span>
      </div>

      <div className="preview-grid">
        <img  onClick={() => navigate("/collection")}src={promo} alt="promo picture">
        </img>
      </div>
    </div>
  </div>
</section>

    )
}