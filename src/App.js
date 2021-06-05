import React from "react";

// layouts
import Header from "./layout/Header";
import Home from "./layout/Home";
import Services from "./layout/Services";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home heading="Excellent Tree Service" id="Home" />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
