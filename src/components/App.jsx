import Text from "./Text"
import Dicecontainer from "./Dicecontainer";
import { useState, useEffect } from "react"

function App() {

    const [text, setText] = useState([]);

    const fetchAdvice = async () => {
        const API_LINK = "https://api.adviceslip.com/advice";
        const response = await fetch(API_LINK);
        const advice = await response.json();
        setText(advice.slip)
    };

    useEffect(() => {
        fetchAdvice()
    }, [])

    return (
        <main>
            <div className="smallcontainer">
                <Text
                    Id={text.id}
                    adviceText={text.advice}
                />
                <Dicecontainer
                    setText={setText}
                />
            </div>
        </main>
    );
}

export default App;
