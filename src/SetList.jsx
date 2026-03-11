import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { CardContext } from "./CardContext"
import Running from "./assets/running.gif"

export default function SetList() {
  const { setId } = useParams()
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [error, setError] = useState(null)
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`https://api.tcgdex.net/v2/en/sets/${setId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      })
      .then(data => {
        console.log('TCGdex response:', data)
        const cardList = data.cards || []
        setCards(cardList)
        setFilteredCards(cardList)
        setLoading(false)
      })
      .catch(err => {
        console.log('Error:', err)
        setError('Failed to load cards. Please try again.')
        setLoading(false)
      })
  }, [setId])

  const handleFilter = (searchTerm) => {
    setSearch(searchTerm)
    if (!searchTerm.trim()) {
      setFilteredCards(cards)
      return
    }
    const filtered = cards.filter(card => 
      card.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.localId?.includes(searchTerm)
    )
    setFilteredCards(filtered)
  }



  const { addCard, collection} = useContext(CardContext)
   const finishedCards = filteredCards.slice((pageNum - 1) * 20, (pageNum - 1) * 20 + 20)


    





  return (
<div className="set-list-wrapper">
      <div className="set-list-heading">
        <h2 className="set-name">{setId.toUpperCase()} Card List</h2>

        {loading && (
          <div className="set-list-loading">
            <h2>Catching Pokemon...</h2>
            <img className="loading-img" src={Running} alt="Loading" />
          </div>
        )}

        
        
      </div>

      <div className="set-grid">
        {finishedCards.length > 0 && finishedCards.map((card) => {
          return (
            <div className="set-card" key={card.id}>
              <img 
                src={`${card.image}/high.webp`}
                loading="lazy"
                alt={card.name}
              />
              <h4>{card.name}</h4>
              <p>#{card.localId}</p>

              <button 
                  className={collection.some(c => c.id === card.id) ? "add-card-btn added" : "add-card-btn"} 
                  onClick={() => addCard(card)}
                    >
                  {collection.some(c => c.id === card.id) ? "✓" : "+"}
              </button>
            </div>
          )
        })}
      </div>


       <div className="SL-NXTPREV-BTNS">
            <button className="SL-page-btn" onClick={() => setPageNum(pageNum - 1)} disabled={pageNum === 1}>
             Previous
            </button>
           <span className="SL-page-num">{pageNum}</span>
            <button className="SL-page-btn" onClick={() => setPageNum(pageNum + 1)} disabled={pageNum === Math.ceil(filteredCards.length / 20)}>
             Next
            </button>
        </div>


    </div>
  )
}










