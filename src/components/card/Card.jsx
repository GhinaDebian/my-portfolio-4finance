import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";
import { Button } from "@mui/material";

const Card = (props) => {
  const { id, firstName, middleName, lastName, age, color, onClick } = props;
  return (
    <div className="appCard">
      <h1>#Person {id}</h1>
      <br />
      <div className="app-container">
        Hello my name is {`${firstName} ${middleName} ${lastName}`},{" "}
        <div>I am {age} years old</div>
        <div style={{ color: color }}>I am wearing {color} jacket</div>
      </div>
      <Button variant="outlined" onClick={onClick}>
        Click Me
      </Button>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
