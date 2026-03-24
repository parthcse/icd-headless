import Link from "next/link";

export default function QuoteCTAButton({ href = "/contact", children, className = "", onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`btn ${className}`}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span className="btn-icon">
        <svg viewBox="0 0 24 24" fill="none" className="icon-default" aria-hidden>
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" className="icon-hover" aria-hidden>
          <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
