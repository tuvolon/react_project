import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";
import axios from "axios";

function App() {
    const [count, setCount] = useState(0);
    
    var counter = 0;

    const Button = styled.button`
    padding: 12px;
    background-color: blue;
    font-size: 24px;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    &:hover {
      color: white;
    }
  `;

  const sendRequest = async () => {
    axios.post('/post', {}, {params : {
        count: counter
      }}).then(
        res => {        
        }
      );
  }
  useState(() => {
    
    axios('/get').then(res => {
      setCount(parseInt(res.data));
    });


  });

                    

  function changeCounter(type) {
    counter = Math.max(count + type, 0);
    setCount(counter);   
    sendRequest();
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p> Count: {count} </p>
        <p>
        <button onClick={() => changeCounter(1)}>+</button>
        <button onClick={() => changeCounter(-1)}>-</button>
        </p>
           <Button onClick={() => changeCounter(-1 * count)}>Reset</Button>
        
      </header>
    </div>
  );
}

export default App;
