import PropTypes from "prop-types";

export default function SectionLabel({ icon, children, className = "" }) {
  return (
    <p className={`section-index flex items-center gap-2 ${className}`.trim()}>
      <span className="icon-chip" aria-hidden="true">
        <span className="material-symbols-rounded">{icon}</span>
      </span>
      {children}
    </p>
  );
}

SectionLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
