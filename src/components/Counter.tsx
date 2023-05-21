import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [counter, setCount]  = useState(0)

    const increment = () => {
        setCount(counter + 1)
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button className={classes.btn} onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;