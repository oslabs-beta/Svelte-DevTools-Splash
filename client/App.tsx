import React from "react";
import Navbar from "./components/NavBar";
import MainHeader from "./components/MainHeader";
import Features from "./components/Features";
import Press from "./components/Press";
import Contributor from "./components/Contributor";
import Particles from "./components/Particles";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainHeader />
      <Features />
      <Press />
      <Contributor />
      <Particles />
    </div>
  );
};

export default App;
