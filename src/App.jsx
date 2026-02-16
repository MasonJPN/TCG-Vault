import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Dashboard from "./Components/Dashboard"
import SetList from "./SetList"
import CardCollection from "./CollectionPage"
import CollectionPromo from "./Components/CollectionPromo"
import CreateAccount from "./Components/CreateAccount"


function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route 
          path="/"
          element={<><Hero /><Dashboard /> <CollectionPromo /></>}
          />

        <Route
        path="/set/:setId"
        element={<SetList />}
        />

        <Route 
          path="/create"
          element={<CreateAccount />}

        />
      
      <Route 
        path="/collection"
        element={<CardCollection />}
      />


     </Routes>

    </Router>
  )
}

export default App

