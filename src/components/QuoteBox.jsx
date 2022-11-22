import React from "react";
import Btn from "./Btn";

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
        <h1 className="card_author"> {quoteRandom.author} </h1>
        <Btn
          objStyleBtn = {objStyleBtn}
          handleClick = {handleClick}
        />
      </article>
    </div>
  );
}

export default QuoteBox;
