import { useContext, useState } from "react"
import { createContext } from "react"



export const CardContext = createContext()


export default function CardProvider({children}){
    
    const [collection, setCollection] = useState([])


    const removeCard =(id) => {
        setCollection(prev => prev.filter(c => c.id !== id))
    }

    const addCard = (card) => {
        setCollection((prev) => {
            if (prev.some(c => c.id === card.id)) return prev;
            return [...prev, card];
        })
    }
    
    



    return (
        <CardContext.Provider value={{collection, addCard, removeCard}}>
            {children}
        </CardContext.Provider>

        
    )
}

