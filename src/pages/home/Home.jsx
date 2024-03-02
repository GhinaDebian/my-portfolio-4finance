import React, { useState } from "react";
import { Header } from "../../layout/header/Header";
import { Button } from "@mui/material";
import Footer from "../../layout/footer/Footer";
import Card from "../../components/card/Card";

const Home = () => {
  const names = ["Jane", "John", "Doe"];
  const name = "John";
  const middleName = "James";
  let lastName = "Doe";
  const age = 36;
  const persons = [
    {
      id: 1,
      name: "Jane",
      lastName: "Doe",
      age: 36,
      clothes: { jacket: "blue" },
    },
    { id: 2, name: "John", lastName: "Did", age: 20 },
    { id: 3, name: "gg", lastName: "Deb", age: 76 },
  ];

  const numbers = [5, 10, 90, 3, 9];
  const doubleNumbers = numbers.map((number) => number * 2);

  return (
    <>
      <main className="main-container">
        {persons.map((person) => (
          <Card
            id={person.id}
            firstName={person.name}
            lastName={person.lastName}
            age={person.age}
            color={person.clothes?.jacket}
          />
        ))}
      </main>
    </>
  );
};

export default Home;
