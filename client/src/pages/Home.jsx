import React from "react";
import Poster from "../Components/Home/Poster.js";
import About from "../Components/Home/About";
import ExecutiveMessage from "../Components/Home/ExecutiveMessage";
import Footer from "../Components/Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <Poster />
      <About />
      <ExecutiveMessage />
      {/* Add Events section if needed */}
      <Footer />
    </div>
  );
}

export default Home;
