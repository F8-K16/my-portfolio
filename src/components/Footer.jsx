import SectionLabel from "./SectionLabel";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "#!",
  },
  {
    label: "LinkedIn",
    href: "#!",
  },
  {
    label: "Twitter X",
    href: "#!",
  },
  {
    label: "Instagram",
    href: "#!",
  },
  {
    label: "CodePen",
    href: "#!",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="relative mb-12 overflow-hidden rounded-3xl bg-zinc-800/50 p-7 ring-1 ring-inset ring-white/10 md:p-10 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-12 reveal-up">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-sky-400/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl"
          />

          <div className="relative mb-8 lg:mb-0">
            <SectionLabel icon="celebration">Next step</SectionLabel>
            <h2 className="headline-1 mb-4 max-w-[14ch]">
              Let&apos;s build something{" "}
              <span className="headline-accent">together</span>
            </h2>
            <p className="max-w-[42ch] text-sm leading-relaxed text-zinc-400 md:text-base">
              Tell me about your idea, and we can start from a short message or
              a quick email.
            </p>
          </div>

          <div className="relative flex flex-col items-start gap-4 lg:items-end">
            <a href="#contact" className="btn-cta group">
              <span className="btn-cta-glow" aria-hidden="true" />
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-zinc-950/15">
                <span className="material-symbols-rounded text-[22px]">
                  mail
                </span>
              </span>
              <span className="relative">Start a project</span>
              <span
                className="material-symbols-rounded relative transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                arrow_outward
              </span>
            </a>

            <a
              href="mailto:haovo.2606@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-sky-300"
            >
              <span className="material-symbols-rounded text-[18px]">
                alternate_email
              </span>
              haovo.2606@gmail.com
            </a>
          </div>
        </div>

        <div className="reveal-up mb-10 overflow-hidden rounded-2xl bg-zinc-800/40 ring-1 ring-inset ring-white/10">
          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/5 p-6 md:border-b-0 md:border-r md:p-8">
              <p className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-200">
                <span className="icon-chip">
                  <span className="material-symbols-rounded">map</span>
                </span>
                Sitemap
              </p>
              <ul className="grid gap-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 lg:gap-x-6">
                {sitemap.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="group flex items-center gap-2 rounded-lg py-2 text-sm text-zinc-400 transition-colors hover:text-sky-300"
                    >
                      <span
                        className="material-symbols-rounded text-[16px] text-zinc-600 transition-colors group-hover:text-sky-400"
                        aria-hidden="true"
                      >
                        chevron_right
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-4 flex items-center gap-2 text-sm font-medium text-zinc-200">
                <span className="icon-chip">
                  <span className="material-symbols-rounded">share</span>
                </span>
                Socials
              </p>
              <ul className="grid gap-1 sm:grid-cols-2">
                {socials.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 rounded-lg py-2 text-sm text-zinc-400 transition-colors hover:text-sky-300"
                    >
                      <span
                        className="material-symbols-rounded text-[16px] text-zinc-600 transition-colors group-hover:text-sky-400"
                        aria-hidden="true"
                      >
                        open_in_new
                      </span>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between border-t border-white/5 pt-8">
          <a href="#home" className="logo reveal-up">
            <img
              src="images/logo.png"
              width={40}
              height={40}
              alt="Logo"
              className="rounded-full"
            />
          </a>

          <p className="text-sm text-zinc-500 reveal-up">
            &copy; 2026 <span className="text-zinc-200">Hao Vo</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
