// Components
import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 w-full h-20 flex items-center z-40 transition-[background-color,border-color,backdrop-filter] " +
        (scrolled
          ? "bg-zinc-900 border-b border-zinc-50/10"
          : "bg-linear-to-b from-zinc-900 to-zinc-900/0 border-b border-transparent")
      }
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1>
          <a href="#home" className="logo">
            <img
              src="./images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="menu-btn"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary contact-btn md:justify-self-end"
        >
          Contact Me
          <span className="material-symbols-rounded" aria-hidden="true">
            mail
          </span>
        </a>
      </div>
    </header>
  );
}
