import { Button } from "@mui/material";
import React, { useState } from "react";

let index = 3;
const AboutUs = () => {
  const colorArray = ["success", "warning", "error"];

  const [color, setColor] = useState(colorArray[0]);
  const changeColor = () => {
    setColor(colorArray[++index % 3]);
    console.log("index", index);
    // setColor((prevColor) =>
    //   prevColor === "success"
    //     ? "warning"
    //     : prevColor === "warning"
    //     ? "error"
    //     : "success"
    // );
  };

  return (
    <Button variant="contained" color={color} onClick={changeColor}>
      {color}
    </Button>
  );
};

export default AboutUs;
