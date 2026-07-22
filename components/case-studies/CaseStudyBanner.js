/**
 * Shared top banner for every case study single page — both the CMS-driven
 * template (app/(marketing)/case-studies/[slug]/page.js) and bespoke local
 * case studies (e.g. .../mahesh-eng-works/page.js) render this, so the banner
 * stays identical across all of them. Change it here, not in the pages.
 *
 * `title` is the case study heading (renders as the page <h1>).
 */
export default function CaseStudyBanner({ title }) {
  return (
    <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-44 xl:pb-20">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
        <span className="common-top-banner-overlay" />
      </div>
      <div className="container relative z-10 mx-auto max-w-3xl py-6 text-center animate fadeUp">
        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Case Study</p>
        <h1 className="font-48 font-semibold leading-tight">{title}</h1>
      </div>
    </section>
  );
}
