import React, { useState } from 'react';
import './counterApp.css';

export const CounterApp = ({valor}) => {
    const [counter, setCounter] = useState(valor);
//output {valor: 5}

const increment = () => {
    setCounter(counter + 1)
}
const decrement = () => {
    if(counter <= 0){
        alert("no se puede bajar mas")
    } else {
        setCounter(counter - 1)
    }
}

const resetCounter = () =>{
    setCounter(valor)
}

    return (
        <div className='container'>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <div className='button_container'>
                <button className='button_add' onClick={increment}>+1</button>
                <button onClick={resetCounter}>reset</button>
                <button onClick={decrement}>-1</button>
            </div>
            
        </div>
    );
};


export default CounterApp;