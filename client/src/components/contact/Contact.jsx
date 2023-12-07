import React from "react";
import "./contact.css";
import In from "./fo";
import Out from "./go";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Don't be shy! Hit me up! 👇</span>
      <In />
      <Out />
    </section>
  );
};

export default Contact;
