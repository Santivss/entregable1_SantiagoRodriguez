import React from 'react'

function QuoteBox({quoteRandom, handleClick, colorRandom}) {

  const objStyle = {
    color: colorRandom
  }

  const objStyleBtn = {
    backgroundColor: colorRandom
  }

  return (
    <div>
        <article className='card' style= {objStyle}>
            <i className="card_icon fa-solid fa-quote-left"></i>
            <p className='card_quote'>  {quoteRandom.quote} </p>
            <h1 className='card_author'> {quoteRandom.author} </h1>
            <button style={objStyleBtn} className='card_btn' onClick={handleClick} >&gt;</button>
        </article>
    </div>
  )
}

export default QuoteBox