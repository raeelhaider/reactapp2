
import React, {useState} from 'react';
import {Message} from './message.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
   return (
    <span className = {`box ${isMorning ? 'Daylight' : 'Night' }`}>
      <h1> Good {isMorning ? 'Morning' : 'Night'} </h1>
      <Message counter = {count} />
      <br/>
      <button onClick = { ()  => setCount(++count)
       } > 
      Update Counter</button>

      <button onClick = {() => setMorning (!isMorning)} > 
      Update Day </button>
    </span>
  );
}

export default App;
