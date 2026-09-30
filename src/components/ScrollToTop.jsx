import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={
        "scroll-top-btn fixed right-4 bottom-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-sky-400 text-zinc-950 shadow-[0_12px_30px_-12px_rgba(56,189,248,0.9)] ring-1 ring-white/20 transition-[opacity,transform,background-color] hover:bg-sky-300 md:right-6 md:bottom-6 " +
        (visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0")
      }
    >
      <span className="material-symbols-rounded" aria-hidden="true">
        arrow_upward
      </span>
    </a>
  );
}
