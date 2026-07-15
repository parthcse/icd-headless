import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import { getTeamMember, getTeamMembers } from "@/lib/team";
import { stripHtml, truncateWords } from "@/lib/wp-text";

export const revalidate = 600;

export async function generateStaticParams() {
  const members = await getTeamMembers();
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = await getTeamMember(slug);
  if (!m) return { title: "Team | Icecube Digital" };
  const title = m.role ? `${m.name} — ${m.role} | Icecube Digital` : `${m.name} | Icecube Digital`;
  return {
    title,
    description:
      truncateWords(stripHtml(m.bioHtml), 30) ||
      `Meet ${m.name}${m.role ? `, ${m.role}` : ""} at Icecube Digital.`,
  };
}

const BackArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default async function TeamMemberPage({ params }) {
  const { slug } = await params;
  const member = await getTeamMember(slug);
  if (!member) notFound();

  const others = (await getTeamMembers()).filter((m) => m.slug !== member.slug);
  const hasAside = Boolean(member.quote || member.skillsHtml);

  return (
    <>
      <Header />
      <main>
        {/* Standard site banner — same markup as /meta-length-checker/, /career/, etc. */}
        <section className="common-top-banner full-section relative border-t-0 pt-28 pb-16 xl:pt-40 xl:pb-28">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              aria-hidden="true"
              src="/assets/photos/home-banner-bg.png"
              alt=""
              fetchPriority="high"
            />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            {member.role && (
              <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">{member.role}</p>
            )}
            <h1 className="font-48 font-semibold leading-tight">{member.name}</h1>
          </div>
        </section>

        {/* Member — photo + bio */}
        <section className="team-member full-section">
          <div className="container grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-start lg:gap-12">
            {member.img && (
              <figure className="animate fadeUp overflow-hidden rounded-2xl bg-black-light md:sticky md:top-40">
                <img
                  className="h-full w-full object-cover"
                  src={member.img}
                  alt={member.imgAlt || member.name}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            )}

            <div className="animate fadeUp">
              <h2 className="font-36 font-semibold">About {member.name.split(" ")[0]}</h2>
              {member.role && <p className="mt-1 font-semibold text-primary">{member.role}</p>}

              {member.bioHtml && (
                <div className="blog-content mt-5" dangerouslySetInnerHTML={{ __html: member.bioHtml }} />
              )}

              <div className="mt-8">
                <a href="/about-us/" className="btn btn-secondary inline-flex">
                  <BackArrow /> Back to Team
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quote + Skills */}
        {hasAside && (
          /* border-t-0: .full-section adds a top border, which reads as a stray line
             directly under the pt-0 section above it. */
          <section className="team-aside full-section border-t-0 pt-0">
            <div className="container grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-8">
              {member.quote && (
                <blockquote className="animate fadeUp flex items-center rounded-2xl border border-primary/30 bg-black-light p-8 text-center lg:p-10">
                  <p className="font-30 italic leading-snug">&ldquo;{member.quote}&rdquo;</p>
                </blockquote>
              )}
              {member.skillsHtml && (
                <div className="animate fadeUp rounded-2xl bg-black-light p-8 lg:p-10">
                  <h2 className="font-36 font-semibold">Skills</h2>
                  <div
                    className="blog-content mt-4 [&_ul]:pl-5 [&_li]:mb-2"
                    dangerouslySetInnerHTML={{ __html: member.skillsHtml }}
                  />
                </div>
              )}
            </div>
          </section>
        )}

        {/* Rest of the team */}
        {others.length > 0 && (
          <section className="team-others full-section border-t-0 pt-0">
            <div className="container">
              <div className="heading-wrap animate fadeUp">
                <h3 className="font-48">Meet the</h3>
                <h2 className="main-title">Rest of the Team</h2>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:gap-6">
                {others.map((m) => (
                  <a
                    key={m.slug}
                    href={m.href}
                    aria-label={`Read more about ${m.name}`}
                    className="column group block bg-black-light px-4 py-space-small no-underline"
                  >
                    {/* shortName falls back to the full name when member_short_name is blank */}
                    <h3 className="mb-1 text-lg xl:text-xl">{m.shortName}</h3>
                    <p className="text-sm text-white/70">{m.role}</p>
                    {m.img && (
                      <figure className="mx-auto mt-5 aspect-[214/300] w-3/4 overflow-hidden rounded-full lg:mt-6">
                        <img
                          className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                          src={m.img}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </figure>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
