import PropTypes from "prop-types";

export default function ProjectCard({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
  description,
  featured = false,
}) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-2xl bg-zinc-800/80 p-4 ring-1 ring-inset ring-white/10 transition-[background-color,box-shadow] hover:bg-zinc-800 hover:shadow-[0_24px_50px_-28px_rgba(56,189,248,0.7)] " +
        (featured ? "md:p-5 " : "") +
        classes
      }
    >
      <div
        className={
          featured
            ? "md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-6"
            : ""
        }
      >
        <figure
          className={
            "img-box mb-4 rounded-xl " +
            (featured ? "aspect-[16/10] md:mb-0" : "aspect-square")
          }
        >
          <img
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="img-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </figure>

        <div className="flex items-center justify-between gap-4">
          <div>
            {featured ? (
              <p className="mb-2 text-xs font-medium tracking-[0.18em] text-sky-400 uppercase">
                Featured
              </p>
            ) : null}
            <h3 className={"title-1 mb-3 " + (featured ? "md:text-3xl" : "")}>
              {title}
            </h3>
            {description ? (
              <p className="mb-4 max-w-[46ch] text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            ) : null}
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((label, key) => (
                <span
                  key={key}
                  className="grid h-8 items-center rounded-lg bg-zinc-50/5 px-3 text-sm text-zinc-400"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-sky-400 text-zinc-950 transition-[background-color,transform] group-hover:bg-sky-300 group-hover:rotate-12">
            <span className="material-symbols-rounded" aria-hidden="true">
              arrow_outward
            </span>
          </div>
        </div>
      </div>

      <a
        href={projectLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title}`}
        className="absolute inset-0"
      ></a>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
  description: PropTypes.string,
  featured: PropTypes.bool,
};
