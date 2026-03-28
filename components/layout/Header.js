import BtnArrowIcon from "../icons/BtnArrowIcon";

export default function Header() {
  return (
    <header className="header-main sticky top-0 z-50 w-full border-b border-white/10 bg-black py-4 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-2">
        <div className="header-logo max-w-28 md:max-w-32 xl:max-w-36">
          <a href="#">
            <img src="/images/header-logo.svg" alt="Icecube Digital" />
          </a>
        </div>

        <nav className="hidden items-center gap-8 text-lg lg:flex">
          <a href="#" className="transition hover:text-primary">
            Company
          </a>
          <a href="#" className="transition hover:text-primary">
            Services
          </a>
          <a href="#" className="transition hover:text-primary">
            Industry
          </a>
          <a href="#" className="transition hover:text-primary">
            Our Work
          </a>
          <a href="#" className="transition hover:text-primary">
            Resources
          </a>
          <a href="#" className="transition hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="hidden lg:block">
          <a href="#" className="btn btn-primary">
            Get a Quote
            <BtnArrowIcon />
          </a>
        </div>

        <button type="button" id="menuBtn" className="text-2xl text-white lg:hidden" aria-label="Open menu">
          ☰
        </button>
      </div>

      <div id="mobileMenu" className="mt-4 hidden border-t border-white/50 lg:hidden">
        <div className="container inline-flex flex-col gap-3 pt-4 text-white">
          <a href="#" className="hover:text-primary">
            Company
          </a>
          <a href="#" className="hover:text-primary">
            Services
          </a>
          <a href="#" className="hover:text-primary">
            Industry
          </a>
          <a href="#" className="hover:text-primary">
            Our Work
          </a>
          <a href="#" className="hover:text-primary">
            Resources
          </a>
          <a href="#" className="hover:text-primary">
            Contact
          </a>

          <a href="#" className="btn btn-primary">
            Get a Quote
            <BtnArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
