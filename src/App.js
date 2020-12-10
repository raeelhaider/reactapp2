
import React, {useState} from 'react';
import {Message} from './message.js';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);

   return (
    <div className = {`box ${isMorning ? 'Daylight' : 'Night' }`}>
      <h1> Good {isMorning ? 'Morning' : 'Night'} </h1>
       <h2> You are welcome in GulAhmed</h2> 
      <Message counter = {count} />
      <br/>
      <button onClick = { ()  => setCount(++count)
      } >
      Update Counter</button>
       
       
      <button onClick = { () => setCount (count>0 ? --count : 0)
      } > 
        Reverse Counter 
      </button>
    <button onClick = {() => setMorning (!isMorning)} > 
      Update Day </button>

    </div>
  );
}

export default App;
