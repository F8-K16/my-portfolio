const tickerItems = [
  { icon: "/images/react.svg", label: "React" },
  { icon: "/images/nextjs.svg", label: "Next.js" },
  { icon: "/images/nodejs.svg", label: "Node.js" },
  { icon: "/images/express.svg", label: "Express.js" },
  { icon: "/images/typescript.svg", label: "TypeScript" },
  { icon: "/images/tailwindcss.svg", label: "Tailwind" },
  { icon: "/images/docker.svg", label: "Docker" },
  { icon: "/images/github.svg", label: "GitHub" },
];

export default function TechTicker() {
  const loop = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker-mask reveal-up" aria-hidden="true">
      <div className="ticker-track">
        {loop.map(({ icon, label }, index) => (
          <span key={`${label}-${index}`} className="ticker-item">
            <img src={icon} alt="" width={20} height={20} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
