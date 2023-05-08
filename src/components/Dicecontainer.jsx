import dice from "../images/icon-dice.svg";
import { useState } from "react"

function Dicecontainer(props) {
  const [disabled, setDisabled] = useState(false);

  const fetchAdviceClicked = async () => {
    const API_LINK = "https://api.adviceslip.com/advice";
    const response = await fetch(API_LINK);
    const advice = await response.json();
    props.setText(advice.slip)
    setDisabled(true)
    setTimeout(() => setDisabled(false), 2000);
  };

  console.log(disabled);
  return (
      <button 
      className="smallsubcontainer" 
        onClick={fetchAdviceClicked} 
      disabled={disabled} 
      >
        <img className="dice" src={dice} alt={"dice"} />
      </button>
  );
}

export default Dicecontainer;
