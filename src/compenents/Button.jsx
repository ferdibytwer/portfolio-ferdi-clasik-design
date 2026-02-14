import { Link } from "wouter";

export default function Button({
  children,
  className = "",
  ariaLabel,
  disabled = false,
  href = "#",
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`relative z-10 overflow-hidden px-4 py-2 border bg-transparent group flex items-center justify-center transition-transform active:scale-95 ${className} ${
        disabled ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <span className="relative z-20 text-black md:group-hover:text-white transition-colors duration-300">
        {children}
      </span>

      <span className="absolute inset-0 bg-black transform scale-0 origin-bottom-left md:group-hover:scale-100 transition-transform duration-300 z-0 pointer-events-none"></span>
    </Link>
  );
}
