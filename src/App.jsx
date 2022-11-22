import "./App.css";
import quotes from "./json/quotes.json";
import QuoteBox from "./components/QuoteBox";
import { useState } from "react";
import colors from "./json/colors.json";

function App() {
  const getRandomFromArray = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  };

  const [quoteRandom, setquoteRandom] = useState(getRandomFromArray(quotes));
  const [colorRandom, setcolorRandom] = useState(getRandomFromArray(colors));

  const handleClick = () => {
    setquoteRandom(getRandomFromArray(quotes));
    setcolorRandom(getRandomFromArray(colors));
  };

  const objStyle = {
    backgroundColor: colorRandom,
  };

  return (
    <div className="App" style={objStyle}>
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />
    </div>
  );
}

export default App;
