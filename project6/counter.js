import "./styles.css";

import React, { useState } from "react";
import styled from "@emotion/styled";
import { css, jsx } from "@emotion/react";

export default function Counter() {
  const [count, setCount] = useState(0);

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
  function changeCounter(type) {
    if (type === 1) {
      setCount(count + 1);
    } else if (type === -1 && count > 0) {
      setCount(count - 1);
    } else if (type === 0) {
      setCount(0);
    }
  }

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={() => changeCounter(1)}>+</button>
      <button onClick={() => changeCounter(-1)}>-</button>
      <Button onClick={() => changeCounter(0)}>Reset</Button>
    </div>
  );
}
