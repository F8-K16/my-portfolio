import SectionLabel from "./SectionLabel";

const aboutItems = [
  {
    label: "Project done",
    number: 3,
    icon: "rocket_launch",
  },
  {
    label: "Years of experience",
    number: 1,
    icon: "schedule",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-zinc-800/40 p-7 ring-1 ring-inset ring-white/10 md:p-12 reveal-up">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl"
          />
          <SectionLabel icon="person">01 — About</SectionLabel>
          <p className="relative text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Hao, an aspiring Full-Stack Developer with a
            strong interest in building modern web applications. My current
            focus is on Front-End development, where I enjoy creating
            responsive, intuitive, and user-friendly interfaces. At the same
            time, I am actively learning Back-End technologies to expand my
            skills and become a well-rounded Full-Stack Developer. I am
            passionate about continuous learning, problem solving, and building
            practical projects that improve my development skills.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number, icon }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="flex items-center gap-1.5 text-sm text-zinc-400">
                  <span className="material-symbols-rounded text-sky-400 text-[16px]">
                    {icon}
                  </span>
                  {label}
                </p>
              </div>
            ))}

            <img
              src="./images/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-10 md:h-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
