import { useState } from 'react'
import './App.css'
import quotes from './db/quotes.json'
import { getRandomElement } from './utils/random'
import QuoteCard  from './components/QuoteCard'

const backgrounds = ["bg1", "bg2", "bg3", "bg4", "bg5", "bg6"]
function App() {
  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))



  const handleChangeQuote = ()=>{
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(backgrounds))
  }
  return (
    <main className={`app ${currentBg}`}>
      <QuoteCard quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App
