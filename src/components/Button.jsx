import PropTypes from "prop-types";

// Primary Button
function ButtonPrimary({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  download = false,
}) {
  const className = `btn btn-primary ${classes}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={className}
        download={download || undefined}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={className}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.bool,
};

// Outline Button
function ButtonOutline({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}) {
  const className = `btn btn-outline ${classes}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={className}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={className}>
        {label}
        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
