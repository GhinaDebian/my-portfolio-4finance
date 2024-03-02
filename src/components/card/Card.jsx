import React from "react";
import "./Card.scss";
import PropTypes from "prop-types";

const Card = (props) => {
  const { id, firstName, middleName, lastName, age, color } = props;
  return (
    <div className="appCard">
      <h1>#Person {id}</h1>
      <br />
      <div className="app-container">
        Hello my name is {`${firstName} ${middleName} ${lastName}`},{" "}
        <div>I am {age} years old</div>
        <div style={{ color: color }}>I am wearing {color} jacket</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  age: PropTypes.string,
  color: PropTypes.string,
};

export default Card;
