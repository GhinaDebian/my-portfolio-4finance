import React, { useState } from "react";
import { Header } from "../../layout/header/Header";
import { Button } from "@mui/material";
import Footer from "../../layout/footer/Footer";
import Card from "../../components/card/Card";
import { arrayOfNumbers, devs, people } from "../../utils/dummyData";

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
  const fillWithOnes = arrayOfNumbers.fill(1, 6);
  const isManager = devs.some((element) => {
    return element.role.toLowerCase() === "frontend";
  });

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
