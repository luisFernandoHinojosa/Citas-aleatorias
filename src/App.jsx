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
      <div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur error minus vel natus ullam quaerat sit eligendi possimus, animi hic delectus molestiae magnam facere exercitationem, corrupti enim. Impedit, cupiditate accusamus!</p>
      </div>
      <section>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nemo alias, non perferendis placeat velit similique, assumenda, reiciendis modi quibusdam dolor excepturi. Laboriosam ducimus nisi, quasi porro aperiam facilis quo.</p>
        </div>
      </section>
    </main>
  )
}

export default App
