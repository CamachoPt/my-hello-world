import { createRoot } from 'react-dom/client';
import {useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    function IncreaseCounter() {
        setCounter(counter+1);
    }
    return(<div>
        <button onClick={() => IncreaseCounter()}>Increase Hello World</button><br/><br/>
        Hello World Counter : {counter}
    </div>)
}

createRoot(document.getElementById('root')).render(<App />);