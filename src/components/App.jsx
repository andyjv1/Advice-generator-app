import Text from "./Text"
import Dicecontainer from "./Dicecontainer";
import { useState, useEffect } from "react"

function App() {

    const [text, setText] = useState({});
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(false);
    
  const fetchAdvice = async () => {
      try {
          setDisabled(true)
          const API_LINK = "https://api.adviceslip.com/advice";
          const response = await fetch(API_LINK);
          const advice = await response.json();
          setText(advice.slip)
          setTimeout(() => setDisabled(false), 2000);
      } catch (ex) {
          setError("Something went wrong...");
      }
  };

    useEffect(() => {
        fetchAdvice()
    }, [])

    return (
        <main>
            <div className="small-container" aria-live="polite">
                <Text
                    Id={text.id}
                    adviceText={text.advice}
                    error={error}
                />
                <Dicecontainer
                    disabled={disabled}
                    fetchAdvice={fetchAdvice}
                />
            </div>
        </main>
    );
}

export default App;
