import React, { useState } from "react";
import { Header } from "../../layout/header/Header";
import { Button } from "@mui/material";
import Footer from "../../layout/footer/Footer";
import Card from "../../components/card/Card";
import {
  arrayOfNumbers,
  devs,
  devsArrayOfString,
  people,
} from "../../utils/dummyData";

const Home = () => {
  const numbers = [5, 10, 90, 3, 9];
  const doubleNumbers = numbers.map((number) => number * 2);

  const devWithId = devs.map((element, index) => {
    return { ...element, id: index + 1 };
  });

  const filterNumbers = arrayOfNumbers.filter((element) => element <= 15);

  const filterYoungDevs = devs.filter((element) => element.age <= 34);
  const findSpecificDevInfo = devs.find((element) => element.name === "Johnny");
  const findSpecificDevIndex = devs.findIndex((element) => {
    return element.name === "Johnny";
  });

  const fillWithOnes = [...arrayOfNumbers];
  fillWithOnes.fill(1, 6);
  const isManager = devs.some((element) => {
    return element.role.toLowerCase() === "frontend";
  });

  const frontendAbove30Devs = devs.filter((element) => {
    return element.role.toLowerCase() === "frontend" && element.age > 30;
  });
  console.log("frontend and above 30:", frontendAbove30Devs);
  console.log(arrayOfNumbers.filter((element) => element >= 0));
  console.log(arrayOfNumbers.map((element) => element * 3));
  console.log(devsArrayOfString.filter((element) => element.length >= 6));
  return (
    <>
      <main className="main-container">
        {people.map((person) => (
          <Card
            id={person.id}
            firstName={person.name}
            lastName={person.lastName}
            age={person.age}
            color={person.clothes?.jacket}
            onClick={() => alert(person?.id)}
          />
        ))}
      </main>
      {JSON.stringify(devWithId)}
      <br />
      <br />
      {JSON.stringify(filterNumbers)}
      <br />
      <br />
      {JSON.stringify(filterYoungDevs)}
      <br />
      {JSON.stringify(findSpecificDevInfo)}
      <br />
      {JSON.stringify(findSpecificDevIndex)}
      <br />
      {JSON.stringify(fillWithOnes)}
      <br />
      {JSON.stringify(isManager)}
    </>
  );
};

export default Home;
