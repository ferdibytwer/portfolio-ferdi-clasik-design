import { Link } from "wouter";

export default function Button({
  children,
  className = "",
  ariaLabel,
  disabled = false,
  href = "#",
}) {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  const baseStyle = `
    relative z-10 overflow-hidden
    px-4 py-2 border
    bg-transparent
    group flex items-center justify-center
    transition-transform active:scale-95
    ${disabled ? "pointer-events-none opacity-50" : ""}
    ${className}
  `;

  const content = (
    <>
      <span className="relative z-20 text-black md:group-hover:text-white transition-colors duration-300">
        {children}
      </span>

      <span className="absolute inset-0 bg-black transform scale-0 origin-bottom-left md:group-hover:scale-100 transition-transform duration-300 z-0 pointer-events-none"></span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={baseStyle}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={baseStyle}>
      {content}
    </Link>
  );
}
