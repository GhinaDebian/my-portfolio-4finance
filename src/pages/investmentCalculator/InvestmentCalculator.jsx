import React, { useState } from "react";
import "./InvestmentCalculator.scss";
import Logo from "../../assets/moneybag.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import UserInputs from "../../components/userInputs/UserInputs";
import Results from "../../components/results/Results";

const InvestmentCalculator = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expextedReturn: 6,
    duration: 10,
  });
  const changeHandler = (e, inputIdentifier) => {
    setUserInput((prev) => ({ ...prev, [inputIdentifier]: +e.target.value }));
  };
  const isInputValid = userInput.duration >= 1;
  return (
    <div className="investmentCalculator">
      <Button component={Link} to="/">
        Back
      </Button>
      <InvestmentHeader />
      <UserInputs userInput={userInput} onChange={changeHandler} />
      {isInputValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">please enter a duration greater than zero</p>
      )}
    </div>
  );
};

export default InvestmentCalculator;

// we could also put this component in its own file
const InvestmentHeader = () => {
  return (
    <header id="header">
      <img src={Logo} alt="money bag" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};
