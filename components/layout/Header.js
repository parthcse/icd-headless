const MOBILE_NAV_LINKS = [
  { href: "#", label: "Company" },
  { href: "#", label: "Services" },
  { href: "#", label: "Industry" },
  { href: "#", label: "Our Work" },
  { href: "#", label: "Resources" },
  { href: "#", label: "Contact" },
];

const quoteArrowPath =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

export default function Header() {
  return (
    <>
      <header className="header-main fixed left-0 top-0 z-[60] w-full py-4 transition-all duration-300 xl:py-6 wpb_animate animated wpb_fadeDown">
        <div className="container flex max-w-[1920px] items-center justify-between gap-2">
          {/* Logo */}
          <div className="header-logo max-w-28 md:max-w-32 xl:max-w-36">
            <a href="#">
              <img src="/images/header-logo.svg" alt="" />
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-9 text-lg lg:flex">
            {MOBILE_NAV_LINKS.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="#" className="btn btn-primary">
              {" "}
              Get a Quote
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
                <path d={quoteArrowPath} />
              </svg>
            </a>
          </div>

          {/* Mobile: animated hamburger */}
          <button
            type="button"
            id="menuBtn"
            className="mobile-menu-btn lg:hidden"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mobileMenuPanel"
          >
            <span className="mobile-menu-btn-bar mobile-menu-btn-bar-1" aria-hidden />
            <span className="mobile-menu-btn-bar mobile-menu-btn-bar-2" aria-hidden />
            <span className="mobile-menu-btn-bar mobile-menu-btn-bar-3" aria-hidden />
          </button>
        </div>
      </header>

      {/* Mobile drawer + backdrop */}
      <div
        id="mobileMenuBackdrop"
        className="pointer-events-none invisible fixed inset-0 z-50 bg-black/60 opacity-0 transition-opacity duration-300 ease-out lg:hidden"
        aria-hidden="true"
      />

      <aside
        id="mobileMenuPanel"
        className="fixed left-0 top-0 z-[999] flex h-full w-[min(85vw,20rem)] max-w-sm -translate-x-full flex-col bg-black shadow-2xl transition-transform duration-300 ease-out lg:hidden"
        aria-hidden="true"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-1 flex-col overflow-y-auto px-5 pb-8 pt-space-mini">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
            <a href="#" className="header-logo max-w-28 shrink-0">
              <img src="/images/header-logo.svg" alt="" />
            </a>
          </div>

          <nav className="mt-6 flex flex-col gap-4 text-lg">
            {MOBILE_NAV_LINKS.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#" className="btn btn-primary mt-8 inline-flex w-full max-w-none justify-center sm:w-auto">
            Get a Quote
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <path d={quoteArrowPath} />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
