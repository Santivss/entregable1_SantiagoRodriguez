import React from 'react'

function Btn({objStyleBtn,handleClick}) {
  return (
    <button style={objStyleBtn} className="card_btn" onClick={handleClick}>
    &gt;
  </button>
)
}

export default Btn