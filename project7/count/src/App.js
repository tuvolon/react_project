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





// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import axios from 'axios';

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { apiResponse: "" , count : 50 };
//         if (window.performance) {
//         if (performance.navigation.type == 1) {
//           axios.post('https://localhost:9000/testAPI', this.state.count)
//          .then(response => this.setState({ count: response.data.id }));
//           this.callAPI();
//         } 

//       }
//     }

//     callAPI() {
//         fetch("http://localhost:9000/testAPI")
//             .then(res => res.text())
//             .then(res => this.setState({ count: res }))
//             .catch(err => err);
//     }

//     componentDidMount() {
//         this.callAPI();        
//     }

//     changeCounter(type){

//     }

//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Welcome to React</h1>
//                     <button onClick={() => this.changeCounter(1)}>COUNTER</button>

//                 </header>
//                 <p className="App-intro">{this.state.count}</p>
//             </div>
//         );
//     }
// }

// export default App;