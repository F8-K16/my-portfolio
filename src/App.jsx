// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  useGSAP(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const elements = gsap.utils.toArray(".reveal-up");
    if (reduced) {
      gsap.set(elements, { y: 0, opacity: 1 });
      return;
    }

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  });

  return (
    <ReactLenis root>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-sky-400/15 blur-3xl orb" />
        <div className="absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl orb-alt" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/5 blur-3xl orb-slow" />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ReactLenis>
  );
}

export default App;
