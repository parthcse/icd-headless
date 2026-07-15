const ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

import { getTeamMembers } from "@/lib/team";

/**
 * Roster comes from the CMS (`personnel` CPT), ordered by publish date (newest
 * first) — reorder the team by editing dates in WordPress, not this file.
 * See lib/team.js for the field mapping and the transitional local-image fallback.
 */
export default async function AboutTeamSection() {
  const team = await getTeamMembers();
  if (team.length === 0) return null;

  return (
    <section className="about-team full-section">
      <div className="container md:grid grid-cols-2 md:pb-[6%]">
        {/* self-start (not my-auto) keeps this at the TOP of the row at its natural height:
            my-auto vertically centred it, which left the left column blank until you scrolled
            halfway down the now-much-taller roster. Natural height is also what lets sticky
            work — a stretched, full-height grid item has no room to stick. */}
        <div className="heading-wrap md:self-start md:pb-0 md:text-left animate fadeUp md:sticky md:top-40">
          <h3 className="font-48">Your</h3>
          <h2 className="main-title">Trusted Team</h2>
          <p>
            Meet the team of experts. They work with <br /> IceCube Digital for over 10 years.
          </p>
          {/* Real href (not "#") so CtaPopupDelegator leaves it alone and it navigates
              to the contact page instead of opening the quote popup. */}
          <a href="/contact-us/" className="btn btn-primary mx-auto mt-3 md:ml-0">
            Join Our Team
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
              <path d={ARROW} />
            </svg>
          </a>
        </div>
        {/* Right-hand (even) cards sit 20% lower for the staggered look — applies to every
            even card so the effect continues down the full roster. */}
        <div className="text-center grid grid-cols-2 gap-4 lg:gap-6 xl:gap-8 md:[&>*:nth-child(even)]:top-[20%]">
          {team.map((m) => (
            /* The whole card is the link. `relative` is load-bearing — the even-child
               stagger above positions against it. */
            <a
              key={m.slug}
              href={m.href}
              aria-label={`Read more about ${m.name}`}
              className="column bg-black-light mb-auto py-space-small px-4 group relative block no-underline"
            >
              <h3 className="mb-0">{m.shortName}</h3>
              <p>{m.role}</p>
              {/* aspect-[214/300] is the ratio of the original team photos, so every card keeps the
                  same tall oval. Source images differ (originals are 214x300 portrait, newer ones are
                  square 600/1080/1500), so object-cover crops them to fit instead of letting each
                  image's own ratio dictate the shape (which turned the square ones into circles). */}
              <figure className="mx-auto w-3/4 aspect-[214/300] overflow-hidden rounded-full my-4 lg:my-5 lg:mb-6 xl:mb-7">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-300" src={m.img} alt={m.imgAlt || ""} loading="lazy" decoding="async" />
              </figure>
              {/* Decorative only — the card itself is the <a>, and an <a> inside an <a> is
                  invalid HTML. group-hover keeps it inverting when you hover anywhere on the card. */}
              <span
                aria-hidden="true"
                className="btn btn-primary p-2 rounded-full aspect-square group-hover:bg-transparent group-hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor">
                  <path d={ARROW} />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
