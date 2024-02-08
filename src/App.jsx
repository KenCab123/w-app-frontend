import React from "react";
import StrainDisplay from "./Components/StrainDisplay"
import About from "./Components/About"
import NavBar from "./Components/NavBar";
import SearchBar from "./SearchBar"
import {Routes, Route} from "react-router-dom"
import StrainView from "./Components/StrainView";
import { useState, useEffect } from "react";

const App = () => {
  const [strain, setStrain] = useState(() => {
    // Check if strain data exists in localStorage
    const savedStrain = localStorage.getItem("strain");
    return savedStrain ? JSON.parse(savedStrain) : [];
  });

  // Save strain data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("strain", JSON.stringify(strain));
  }, [strain]);
  return (
    <>
    <NavBar />
    <SearchBar />
      <Routes>
        <Route path="/" element={<StrainDisplay  setStrain={setStrain} />} />
        <Route path=":name" element={<StrainView strain={strain}/>} />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
};

export default App;
