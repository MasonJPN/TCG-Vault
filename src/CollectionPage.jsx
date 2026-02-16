import {useState, useContext } from "react"
import { CardContext } from "./CardContext"






export default function CardCollection(){


const {collection, removeCard} = useContext(CardContext)

    return (
       <div className="collection-container">
        <div className="collection-heading">
            <h2>My Collection:</h2>
                <p>{collection.length} Cards Collected</p>
         </div>
            <div className="set-grid">
        {collection.map((card) => {
          return (
            <div className="set-card" key={card.id}>
              <img
                  src={card.image ? `${card.image}/high.webp` : card.images?.small}
                  loading="lazy"
                  alt={card.name}

               />
              <h4>{card.name}</h4>
              <p>#{card.number}</p>

              <button className="remove-card-btn" onClick={() => removeCard(card.id)}>
                x
              </button>
            </div>
          )
        })}
      </div>


       </div>
    )
}