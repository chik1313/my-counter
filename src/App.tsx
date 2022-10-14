import React, {useState} from 'react';
import './App.css';
import Counter from "./components/Counter";



function App() {
    let [count, setCount] = useState(0);

    const increment = () => {
        count < 5 && setCount(count + 1);
    }
    const decrement = () => {
        setCount(0)
    }
    return (
        <Counter increment={increment} decrement={decrement} count={count}/>
    );
}

export default App;
