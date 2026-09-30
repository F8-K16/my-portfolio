import PropTypes from "prop-types";

export default function SkillCard({ imgSrc, label, desc, classes }) {
  return (
    <div
      className={
        "group flex items-center gap-3 rounded-2xl p-3 ring-2 ring-inset ring-zinc-50/10 transition-[background-color,box-shadow] hover:bg-zinc-800/80 hover:ring-sky-400/40 " +
        classes
      }
    >
      <figure className="grid h-12 w-12 place-items-center overflow-hidden rounded-lg bg-zinc-700/50 p-2 transition-[background-color,transform] group-hover:scale-105 group-hover:bg-zinc-900">
        <img
          src={imgSrc}
          alt={label}
          width={32}
          height={32}
          className="transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110"
        />
      </figure>

      <div>
        <h3>{label}</h3>

        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
