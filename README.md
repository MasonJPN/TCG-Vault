# TCG Vault 
 
A Pokemon Trading Card Game collection tracker for collectors who want to browse real card sets, track what they own, and see their collection grow — all in one place.
 
**Live Site:** [https://tcg-vault.netlify.app/]
 
---
 
## How It's Made
 
**Tech used:** React, React Router, Vite, CSS, TCGdex API, Firebase Firestore
 
TCG Vault is built around the **TCGdex API**, an open Pokémon TCG database that provides real card data including artwork, names, card numbers, HP, and move descriptions. The homepage displays the full Scarlet & Violet series as a set grid — clicking any set fetches that set's complete card list from the API and renders it as a paginated card gallery.
 
Each card displays its real artwork pulled directly from TCGdex, with a `+` button to add it to your personal collection. Once added, the button turns green with a checkmark so you always know which cards you own. Cards are persisted to **Firebase Firestore**, meaning your collection is saved across sessions and survives a page refresh. A React Context provider keeps the collection state in sync across the entire app without prop drilling.
 
The collection page shows every card you've added with a live count of how many you've collected, and a remove button on each card to manage your collection. A global search bar in the navbar lets you filter cards by name across any set in real time.
 
---
 
## Optimizations
 
Future improvements I'd like to add:
 
- Expand beyond Scarlet & Violet to include all TCG sets
- Add a card detail modal with full move descriptions and stats
- Filter the collection view by set or card type
---
 
## Lessons Learned
 
This project gave me a strong foundation in working with external REST APIs — fetching data, handling loading and error states, and mapping over nested JSON to build a dynamic UI. Implementing pagination from scratch on the card list taught me how to slice arrays and manage page state cleanly in React.
 
Using Context API to share collection state across multiple pages showed me when global state is the right tool over local component state. Integrating Firebase Firestore as the persistence layer also taught me how to structure a real-time database and keep client-side state in sync with remote data.
