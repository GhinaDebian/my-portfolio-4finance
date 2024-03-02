// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import MainRoutes from "./Routes";

const App = () => {
  // const paragraph = React.createElement(
  //   "div",
  //   {className: "App-container"},
  //   "this is a paragraph without using JSX"
  // );

  // console.log("numbers", numbers);

  return (
    <>
      {/* {paragraph} */}
      <MainRoutes />
    </>
  );
};

export default App;

// Homework to-do:
// 1- Create a new link in the navbar called 'Counter'
// 2- also create a folder and a component for this counter
// 3- move the code of the counter from 'Home' page to the 'Counter' page
// 4- Connect all the Links in the navbar to there routes respectively.
