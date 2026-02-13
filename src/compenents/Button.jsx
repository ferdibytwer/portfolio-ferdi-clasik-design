import { Link, Route } from "wouter";

export default function Button({
  children,
  className = "",
  ariaLabel,
  onClick,
  disabled = false,
  type = "button",
  href = "#",
}) {
  return (
    <button
      className={`relative overflow-hidden px-4 py-2 border bg-transparent group flex items-center justify-center ${className}`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <Link href={href}>
        <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
          {children}
        </span>
        <span className="absolute left-0 bottom-0 w-full h-full bg-black transform scale-0 origin-bottom-left group-hover:scale-100 transition-transform duration-300 z-0"></span>
      </Link>
    </button>
  );
}
