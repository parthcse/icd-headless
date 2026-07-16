import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

/** Thin "certified / trusted" strip below the hero: label + checkmarked creds. */
export default function TrustStrip({ label, items = [] }) {
  return (
    <section className="special-trust-strip border-y border-white/10 bg-black-light py-5">
      <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left lg:gap-8">
        {label && <p className="mb-0 shrink-0 text-sm font-semibold uppercase tracking-[0.15em] text-muted">{label}</p>}
        {/* whitespace-nowrap keeps each cred intact (no mid-phrase breaks), and
            lg:flex-nowrap holds the whole row on one line on desktop — they used to
            wrap onto a second line. Slightly tighter type at lg so all four fit. */}
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:flex-nowrap lg:justify-end xl:gap-x-6">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-2 whitespace-nowrap font-semibold lg:text-[0.95rem] xl:text-base">
              <CheckPrimaryIcon className="w-[1.1em] shrink-0" /> {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
