import "./QuoteCard.css"
import CopyText from "../utils/CopyText"

 // eslint-disable-next-line react/prop-types
 const QuoteCard = ({quote, handleChangeQuote}) => {

  return (
    <section className="quoteCard">
         <article className="quoteCard__container">
            <h1 className="quoteCard__title">Infogalax</h1>
            <CopyText textCopy={quote.phrase}/>
            <div className="container__phrase">
            <p className="quoteCard__phrase">{quote.phrase}</p>
            </div>
            <button className="quoteCard__btn" onClick={handleChangeQuote}><i class='bx bx-reset'></i></button>
         </article>

        <footer className="quoteCard__footer">
            <p> <strong className="author">Autor:</strong> {quote.author}</p>
        </footer>
    </section>
  )
}

export default QuoteCard