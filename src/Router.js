/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.


Remember to export the component at the end
*/

import Home from "./components/Home";
import About from "./components/About";
import Car from "./components/Car";

import React from "react";
import { Routes, Route } from "react-router";
// Write component imports here //

// Start Router function here //
// You need to create a functional component called Router in this file. You will return a Routes wrapper container that wraps two individual Route's.
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars/:id" element={<Car />} />
    </Routes>
  );
};

export default Router;
