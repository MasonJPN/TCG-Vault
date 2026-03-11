import { useNavigate } from "react-router-dom"
import vaultIcon from "../assets/vault.png"
import {useState, useEffect} from "react"
export default function Navbar() {

const Navigate = useNavigate()
const [input, setInput] = useState("")
const [results, setResults] = useState([])
  useEffect(() => {

 async function SearchBar(){
  const res = await fetch(`https://api.tcgdex.net/v2/en/cards?name=${input}`)
  const data = await res.json()
  setResults(data.slice(0, 5))
 }

 SearchBar()
 

  }, [input])




  return (
  
    <section className="navbar">
      <h1 onClick={() => Navigate('/')}>
        <img src={vaultIcon} className="icon1" onClick={() => Navigate('/')} />
        TCG Vault
      </h1>

      <div className="nav-search">
        <input
          value={input}
          onChange={((e) => setInput(e.target.value))}
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


