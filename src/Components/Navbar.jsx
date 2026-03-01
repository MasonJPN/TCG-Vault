import { useNavigate } from "react-router-dom"
import vaultIcon from "../assets/vault.png"

export default function Navbar() {

const Navigate = useNavigate()


  return (
  
    <section className="navbar">
      <h1 onClick={() => Navigate('/')}>
        <img src={vaultIcon} className="icon1" onClick={() => Navigate('/')} />
        TCG Vault
      </h1>

      <div className="nav-search">
        <input
          type="text"
          placeholder="Search Pokémon cards..."
        />
      </div>

      <div className="nav-actions">
            <button className="nav-btn login">Log In</button>
        <button className="nav-btn signup">Sign Up</button>
      </div>
    </section>
  )
}


