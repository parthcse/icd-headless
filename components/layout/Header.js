import Link from "next/link";

const NAV_LINKS = [
  {
    label: "Company",
    children: [{ label: "About", href: "/about" }],
  },
  { href: "#", label: "Services" },
  { href: "#", label: "Industry" },
  { href: "#", label: "Our Work" },
  { href: "#", label: "Resources" },
  { href: "#", label: "Contact" },
];

const quoteArrowPath =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

const chevronDown = (
  <svg
    className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

export default function Header() {
  return (
    <>
      <header className="header-main fixed left-0 top-0 z-[60] w-full py-4 transition-all duration-300 xl:py-6 animate fadeDown">
        <div className="container flex max-w-[1920px] items-center justify-between gap-2">
          {/* Logo */}
          <div className="header-logo max-w-28 md:max-w-32 xl:max-w-36">
            <Link href="/">
              <img src="/images/header-logo.svg" alt="" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:block" aria-label="Primary">
            <ul className="flex items-center gap-9 text-lg">
              {NAV_LINKS.map((item) =>
                item.children ? (
                  <li key={item.label} className="group relative">
                    <a
                      href="#"
                      className="flex items-center gap-1 transition group-hover:text-primary"
                      aria-haspopup="true"
                      aria-controls="submenu-company-desktop"
                      id="nav-company-trigger"
                    >
                      {item.label}
                      {chevronDown}
                    </a>
                    {/* pt-2 bridges the gap so hover is not lost between trigger and panel */}
                    <div className="absolute left-0 top-full z-[70] hidden pt-2 group-hover:block group-focus-within:block small">
                      <ul
                        id="submenu-company-desktop"
                        role="menu"
                        aria-labelledby="nav-company-trigger"
                        className="min-w-40 border border-white/10 bg-black-light"
                      >
                        {item.children.map((sub) => (
                          <li key={sub.href} role="none" className="border-b border-white/10 last:border-b-0">
                            <Link
                              role="menuitem"
                              href={sub.href}
                              className="block px-3 py-1.5 transition hover:bg-black-light hover:text-primary"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a href={item.href} className="transition hover:text-primary">
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
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
            <Link href="/" className="header-logo max-w-28 shrink-0">
              <img src="/images/header-logo.svg" alt="" />
            </Link>
          </div>

          <nav className="mt-6 flex flex-col gap-4 text-lg" aria-label="Mobile primary">
            {NAV_LINKS.map((item) =>
              item.children ? (
                <div key={item.label} className="flex flex-col gap-2 border-b border-white/10 pb-4">
                  <span className="text-sm font-medium uppercase tracking-wide text-white/50">{item.label}</span>
                  {item.children.map((sub) => (
                    <Link key={sub.href} href={sub.href} className="pl-2 hover:text-primary">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <a key={item.label} href={item.href} className="hover:text-primary">
                  {item.label}
                </a>
              )
            )}
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
