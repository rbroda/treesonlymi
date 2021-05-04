import React from "react";
// import { Switch, Route } from "react-router-dom";

// layouts
import Header from "./layout/Header";
import Home from "./layout/Home";
import Services from "./layout/Services";
import About from "./layout/About";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home heading="Excellent Tree Service" id="Home" />
      <Services />
      <About />
      <Footer />
    </div>
  );
};

export default App;
