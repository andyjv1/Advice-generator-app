import dice from "../images/icon-dice.svg";

function Dicecontainer({ disabled, fetchAdvice }) {
  return (
      <button 
      onClick={fetchAdvice} 
      disabled={disabled} 
    >
      
        <img className="dice" src={dice} alt="" />
      </button>
  );
}

export default Dicecontainer;
