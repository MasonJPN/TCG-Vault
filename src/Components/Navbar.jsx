import { useNavigate } from "react-router-dom"
import vaultIcon from "../assets/vault.png"
import {useState, useEffect, useContext} from "react"
import { CardContext } from "../CardContext"




export default function Navbar() {


const {collection, addCard} = useContext(CardContext)
const Navigate = useNavigate()
const [input, setInput] = useState("")
const [results, setResults] = useState([])
const [selectedCard, setSelectedCard] = useState(null)



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
          onBlur={() => setResults([])}
          type="text"
          placeholder="Search Pokémon cards..."
        />

      {results.length > 0 && (
        <div className="drop-down-results">
        {results.map((result, index) => {
        return (
            <div
                onMouseDown={() => setSelectedCard(result)}
                key={index}
                 >
                {result.name}
            </div>
                 )
                 })}
        </div>
        )}


     </div>


    <div className="nav-actions">
        <button  
            onClick={() => Navigate('/collection')}
            className="nav-btn signup"> View Collection</button>
        </div>

    {selectedCard !== null &&(
    <div className="modal-overlay">
        
          
      

      <div className="modal-card">
          <img src={`${selectedCard.image}/high.webp`} alt={selectedCard.name} />
          <h4>{selectedCard.name}</h4>
           <p>#{selectedCard.localId}</p>
           <button
               className={collection.some(c => c.id === selectedCard.id) ? "add-card-btn added" : "add-card-btn"}
               onClick={() => addCard(selectedCard)}
              >
        {collection.some(c => c.id === selectedCard.id) ? "✓" : "+"}
          </button>
          <button
        className="modal-close-btn"
        onClick={() => setSelectedCard(null)}>Close
          </button>
      </div>

     



    </div>
    )}





      









    </section>
  )
}


