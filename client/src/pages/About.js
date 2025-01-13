import React from "react";
import Footer from "../Components/Footer/Footer";
import "./About.css";
import a1 from "../assets/images/aboutgrp.webp";
import { FlipWords } from "../Components/ui/flip-words";
import { FloatingDock } from "../Components/ui/floating-dock";
import {
  IconHome,
  IconTerminal2,
  IconNewSection,
  IconBrandGithub,
  IconBrandX,
} from "@tabler/icons-react";
import { AnimatedTestimonials } from "../Components/ui/animated-testimonials";

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
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have transformed our workflow. This is exactly what we have been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800"
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800"
    },
    {
      quote:
        "This solution has significantly improved our team productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=800"
    },
    {
      quote:
        "Outstanding support and robust features. It is rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?w=800"
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?w=800"
    }
  ];
  

  return (
    <div>
      <div className="about-div">
        <h2 className="about-title">
          About MIT-WPU <FlipWords words={flipWords} /> Summit 2025.
        </h2>
        <p className="about-subtitle">
          India's biggest Annual Inter-Engineering Sports event hosted by
          MIT-World Peace University committed towards the goal of 'Nation
          Building through Sports'.
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
      <div className="testimonials-container mt-16">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
      <Footer />
    </div>
  );
};

export default About;