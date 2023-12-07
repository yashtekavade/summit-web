import React from "react";
import "./scroll.css";

const Scroll = () => {
  window.addEventListener("scroll", function () {
    const scroll = document.querySelector(".scroll");
    // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scroll.classList.add("show-scroll");
    else scroll.classList.remove("scroll-top");
  });

  return (
    <a href="javascript:void(0)" className="scroll">
      <i className="uil uil-arrow-up scroll__icon"></i>
    </a>
  );
};

export default Scroll;
