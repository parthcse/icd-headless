export default function Header() {
  return (
    <header className="header-main w-full fixed top-0 left-0 z-50 py-4 xl:py-6 transition-all duration-300 wpb_animate animated wpb_fadeDown">
      <div className="container flex items-center justify-between gap-2 max-w-[1920px]">
        {/* Logo */}
        <div className="header-logo max-w-28 md:max-w-32 xl:max-w-36">
          <a href="#">
            <img src="/images/header-logo.svg" alt="" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-9 text-lg">
          <a href="#" className="hover:text-primary transition">Company</a>
          <a href="#" className="hover:text-primary transition">Services</a>
          <a href="#" className="hover:text-primary transition">Industry</a>
          <a href="#" className="hover:text-primary transition">Our Work</a>
          <a href="#" className="hover:text-primary transition">Resources</a>
          <a href="#" className="hover:text-primary transition">Contact</a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a href="#" className="btn btn-primary"> Get a Quote 
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <path d="M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z"></path>
            </svg>  
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button id="menuBtn" className="lg:hidden text-white text-2xl">☰</button>
      </div>

      {/* Mobile Menu */}
      <div id="mobileMenu" className="hidden border-t border-white/50 mt-4 lg:hidden">
        <div className="container inline-flex flex-col pt-4 gap-3 text-white">
          <a href="#" className="hover:text-primary">Company</a>
          <a href="#" className="hover:text-primary">Services</a>
          <a href="#" className="hover:text-primary">Industry</a>
          <a href="#" className="hover:text-primary">Our Work</a>
          <a href="#" className="hover:text-primary">Resources</a>
          <a href="#" className="hover:text-primary">Contact</a>

          <a href="#" className="btn btn-primary"> Get a Quote 
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
              <path d="M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z"></path>
            </svg> 
          </a>
        </div>
      </div>
    </header>
  );
}
