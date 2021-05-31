import "./styles.css";
import React, { useState } from "react";



export default function Counter() {
  const [count, setCount] = useState(0);

  function changeCounter(type) {
  	if (type === 1){
  		setCount(count + 1);
  	}
  	else if (type === -1 && count > 0){
  		setCount(count - 1);
  	}
  	else if (type === 0){
  		setCount(0);
  	}
  }

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={() => changeCounter(1)}>+</button>
      <button onClick={() => changeCounter(-1)}>-</button>
      <button onClick={() => changeCounter(0)}>Reset</button>
    </div>
  );
}
