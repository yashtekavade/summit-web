import React from "react";
import Footer from "../Components/Footer/Footer.jsx";
//import post from "../../assets/images/post.jpg";

function Home() {
  return (
    <div>
      <section className="landscape-section">
        {/*<img src={post} alt="Landscape" />*/}
        <div>
          <p>11 Events</p>
          <p>1,500 Colleges</p>
          <p>40,000 Participants</p>
          <p>800,000 Visitors</p>
        </div>
      </section>
      <section>
        <h2>MIT WPU SUMMIT</h2>
        <p>
          India’s biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University committed towards the goal of ‘Nation
          Building through Sports’.
        </p>
        <p>
          MIT World Peace University (MIT-WPU) has been organizing the National
          Level Inter-Engineering Sports “SUMMIT” since 2004. Every year Summit
          attracts over 5,000 students with participation of more than 150
          Engineering and Technological Institutions across the country.
        </p>
      </section>
      <section>
        <h2>Executive President’s Message</h2>
        <p>Dear Students,</p>
        <p>
          MIT World Peace University, the Flagship University of MAEER’s MIT
          Group of Institutions, is carrying forward the legacy of four decades
          of Educational Excellence...
          {/* (Add the rest of the message) */}
        </p>
      </section>
      {/* Add Events section if needed */}
      <Footer />
    </div>
  );
}

export default Home;
