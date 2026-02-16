import heroImage from "../assets/extended-card-art-wallpapers-part-2-v0-m9rryk6yk0nb1.webp"
import { useNavigate } from "react-router-dom"


function Hero() {


const navigate = useNavigate()


  return (
    <section className="hero">
      
      <img
        className="pkmlogo"
        src={heroImage}
        alt="Pokémon Cards"
      />

      
      <div className="hero-content">
        <h2>Track Your Collection Here!</h2>

        <p>
          Keep track of your Pokémon card collection, with the quickest and most
          up to date card tracking prices. We constantly update and add the
          latest releases to our database. Create an account and start
          collecting today!
        </p>

        <button className="create-acct-btn">
          <a onClick={() => navigate("/create")}>Create Account</a>
        </button>
      </div>
    </section>
  )
}

export default Hero
