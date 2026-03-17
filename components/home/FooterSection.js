export default function FooterSection() {
  return (
    <footer className="border-t border-zinc-900 bg-black/95">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-zinc-200">Icecube Digital Creative</p>
          <p className="mt-1 text-[11px]">
            A digital‑first agency building high‑performing experiences for modern brands.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Icecube Digital. All rights reserved.</p>
          <div className="hidden h-3 w-px bg-zinc-700 sm:block" />
          <nav className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-orange-300">
              Privacy
            </a>
            <a href="#" className="hover:text-orange-300">
              Terms
            </a>
            <a href="#" className="hover:text-orange-300">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

