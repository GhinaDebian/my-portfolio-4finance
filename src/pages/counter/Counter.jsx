import { Button } from "@mui/material";
import React, { useState } from "react";

const Counter = () => {
  const [color, setColor] = useState("blue");
  const [number, setNumber] = useState(0);
  const incrementHandler = () => setNumber((prevNum) => prevNum + 1); //better to use this way than the one used in line below
  const decrementHandler = () => setNumber(number - 1);
  const inputHandler = (e) => {
    setNumber(+e.target.value);
  };
  const colorHandler = (e) => {
    console.log("e:", e.target.value);
    setColor(e.target.value);
  };

  const [value, setValue] = useState(true);
  const buttonHandler = () => setValue((previousValue) => !previousValue);
  return (
    <>
      <div>The number is: {number}</div>
      <Button variant="container" onClick={incrementHandler}>
        +
      </Button>
      <Button onClick={decrementHandler}>-</Button>
      <input type="number" onChange={inputHandler} value={number} />

      <input type="color" onChange={colorHandler} value={color} />

      <Button
        color={value ? "error" : "success"}
        variant="contained"
        onClick={buttonHandler}
      >
        {value ? "error" : "success"} button
      </Button>
    </>
  );
};

export default Counter;
