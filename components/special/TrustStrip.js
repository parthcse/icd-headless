import CheckPrimaryIcon from "@/components/icons/CheckPrimaryIcon";

/** Thin "certified / trusted" strip below the hero: label + checkmarked creds. */
export default function TrustStrip({ label, items = [] }) {
  return (
    <section className="border-y border-white/10 bg-black-light py-5">
      <div className="container flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        {label && <p className="mb-0 shrink-0 text-sm font-semibold uppercase tracking-[0.15em] text-muted">{label}</p>}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-2 font-semibold">
              <CheckPrimaryIcon className="w-[1.1em] shrink-0" /> {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
