import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
//import Work from "./components/Work/Work";
import Contact from "./components/contact/Contact";
import Inprogress from "./components/inprogress/inprogress";
import Footer from "./components/footer/Footer";
import Scroll from "./components/scroll/Scroll";

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Inprogress />
        <Contact />
      </main>

      <Footer />
      <Scroll />
    </>
  );
};

export default App;
