import SkillCard from "./SkillCard";
import SectionLabel from "./SectionLabel";
import TechTicker from "./TechTicker";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/express.svg",
    label: "Express.js",
    desc: "Web framework",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/nextjs.svg",
    label: "Next.js",
    desc: "React framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/docker.svg",
    label: "Docker",
    desc: "Containers",
  },
  {
    imgSrc: "/images/github.svg",
    label: "GitHub",
    desc: "Version control",
  },
];

export default function Skill() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionLabel icon="handyman" className="reveal-up">
          02 — Toolkit
        </SectionLabel>
        <h2 className="headline-2 reveal-up">Essential tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-6 max-w-[50ch] reveal-up">
          The stack I use to design interfaces and ship full-stack
          applications.
        </p>

        <TechTicker />

        <div className="mt-8 grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
