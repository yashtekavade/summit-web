import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import a1 from "../assets/images/aboutgrp.webp";
import { FlipWords } from "../Components/ui/flip-words";
import { FloatingDock } from "../Components/ui/floating-dock"; // Make sure you have the correct path to FloatingDock component
import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react"; 

const About = () => {
  const flipWords = ["unite", "inspire", "compete", "celebrate"];

  const dockItems = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Products",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Components",
      icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ];

  return (
    <div>
      <div className="about-div">
        <h2 className="about-title">
          About MIT-WPU <FlipWords words={flipWords} /> Summit 2025.
        </h2>
        <p className="about-subtitle">
          India’s biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University committed towards the goal of ‘Nation
          Building through Sports’.
        </p>
      </div>

      <div className="image-container">
        <img src={a1} alt="about" className="about-image" loading="lazy" />
      </div>

      <div className="flex items-center justify-center h-[35rem] w-full mt-16">
        <FloatingDock
          mobileClassName="translate-y-20"
          items={dockItems}
        />
      </div>

      <Footer />
    </div>
  );
};

export default About;
