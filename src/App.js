import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
function App() {
  const [searchData, setSearchData] = useState(); // Fix: Use setSearchData instead of useSearchData
  return (
    <>
      <Navbar searchData={searchData} />
      <Hero />
    </>
  );
}

export default App;
