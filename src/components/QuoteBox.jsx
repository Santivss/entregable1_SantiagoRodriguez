import React from "react";
import Btn from "./Btn";
import QuoteRandom from "./QuoteRandom";

function QuoteBox({ quoteRandom, handleClick, colorRandom }) {
  const objStyle = {
    color: colorRandom,
  };

  const objStyleBtn = {
    backgroundColor: colorRandom,
  };

  return (
    <div>
      <article className="card" style={objStyle}>
        <i className="card_icon fa-solid fa-quote-left"></i>
        <p className="card_quote"> {quoteRandom.quote} </p>
        <Btn
          objStyleBtn = {objStyleBtn}
          handleClick = {handleClick}
        />
        <QuoteRandom
          quoteRandom = {quoteRandom.author}
        />
      </article>
    </div>
  );
}

export default QuoteBox;
