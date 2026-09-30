import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { ButtonPrimary, ButtonOutline } from "./Button";

const heroFloats = [
  { icon: "terminal", className: "left-[6%] top-[22%]", delay: "0s" },
  { icon: "deployed_code", className: "left-[4%] top-[48%]", delay: "1.4s" },
  { icon: "palette", className: "right-[7%] top-[30%]", delay: "0.7s" },
  { icon: "database", className: "right-[5%] top-[56%]", delay: "2s" },
];

export default function Hero() {
  const root = useRef(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduced) return;

      gsap.from(".hero-enter", {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.11,
        ease: "power3.out",
        delay: 0.12,
      });

      gsap.from(".hero-float", {
        scale: 0.75,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "back.out(1.7)",
        delay: 0.45,
      });
    },
    { scope: root },
  );

  return (
    <section
      id="home"
      ref={root}
      className="relative overflow-hidden pt-28 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]"
      />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {heroFloats.map(({ icon, className, delay }) => (
          <span
            key={icon}
            className={`hero-float hero-float-badge absolute ${className}`}
            style={{ animationDelay: delay }}
            aria-hidden="true"
          >
            <span className="material-symbols-rounded">{icon}</span>
          </span>
        ))}
      </div>

      <div className="container relative lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <p className="section-index hero-enter flex items-center gap-2">
            <span className="icon-chip">
              <span className="material-symbols-rounded">auto_awesome</span>
            </span>
            Hao Vo — Web developer
          </p>
          <div className="hero-enter flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="./images/avatar.png"
                alt="Hao Vo portrait"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              <span className="material-symbols-rounded text-emerald-400 text-[16px]">
                bolt
              </span>
              Available for work
            </div>
          </div>

          <h2 className="headline-1 hero-enter max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building modern web apps from UI to{" "}
            <span className="headline-accent">full-stack</span>
          </h2>
          <div className="hero-enter flex flex-wrap items-center gap-3">
            <ButtonPrimary
              href="/cv/VoAnhHao-CV.pdf"
              label="Download CV"
              icon="download"
              target="_blank"
              download
            />
            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div
            aria-hidden="true"
            className="absolute inset-8 rounded-full bg-sky-400/25 blur-3xl hero-glow"
          />
          <figure className="hero-enter relative ml-auto w-full max-w-[480px] overflow-hidden rounded-[60px] bg-linear-to-t from-sky-400 via-25% via-sky-400/40 to-65% ring-1 ring-white/15">
            <img
              src="./images/avatar.png"
              alt="Hao Vo"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
          <div className="hero-enter absolute bottom-8 left-4 flex items-center gap-3 rounded-2xl bg-zinc-950/80 px-4 py-3 ring-1 ring-white/10 backdrop-blur-md">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-sky-400/15 text-sky-300 icon-wiggle">
              <span className="material-symbols-rounded text-[20px]">
                rocket_launch
              </span>
            </span>
            <div>
              <p className="text-xs tracking-wide text-zinc-400">
                Currently building
              </p>
              <p className="font-medium">TopCV</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
