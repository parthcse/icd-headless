const GUIDE = [
  {
    title: "Ideal Length of a Meta Title",
    intro:
      "Your title is the first thing searchers read. Keep it within these limits so Google shows it in full instead of cutting it with an ellipsis.",
    points: [
      {
        label: "Desktop",
        text: "Aim for 50-60 characters (about 600 pixels). This guarantees your whole title is displayed without truncation.",
      },
      {
        label: "Mobile",
        text: "Titles should be no more than 50 characters (about 500 pixels) to prevent being chopped off.",
      },
    ],
    note: "There's no hard character limit, but surpassing these lengths increases the chance Google truncates your title and adds an ellipsis (…), which looks unprofessional and lowers click-through.",
  },
  {
    title: "Ideal Length of a Meta Description",
    intro:
      "Descriptions are more flexible than titles, but still need to fall within a range that presents well across devices.",
    points: [
      {
        label: "Pixel Perfect",
        text: "Google measures pixels, not characters. The suggested range is 120-158 characters (about 920 pixels).",
      },
      {
        label: "Mobile Matters",
        text: "On mobile the description area is much smaller — around 680 pixels, or roughly 120 characters.",
      },
    ],
    note: "Our meta description length checker helps you confirm your description falls within the ideal length criteria for both desktop and mobile.",
  },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F76724"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mt-1 h-4 w-4 shrink-0"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function MetaGuideSection() {
  return (
    <section className="full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48 font-normal">The Quick Guide</h3>
          <h2 className="main-title">How Long Should Titles &amp; Descriptions Be?</h2>
        </div>

        <div className="grid animate fadeUp gap-4 md:grid-cols-2 lg:gap-6">
          {GUIDE.map((card) => (
            <div key={card.title} className="border border-[#272727] bg-black-light p-6 lg:p-8">
              <h3 className="font-30 mb-3 font-semibold">{card.title}</h3>
              <p className="leading-relaxed text-muted">{card.intro}</p>
              <ul className="mt-5 grid gap-3">
                {card.points.map((p) => (
                  <li key={p.label} className="flex gap-3 leading-relaxed">
                    <CheckIcon />
                    <span>
                      <strong className="font-semibold">{p.label}:</strong> {p.text}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-white/10 pt-4 leading-relaxed text-muted">{card.note}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 max-w-4xl border border-[#272727] bg-black-light p-6 text-center leading-relaxed animate fadeUp lg:p-8">
          <h3 className="font-30 mb-3 font-semibold">Why Following These Guidelines Matters</h3>
          <p className="text-muted">
            Creating great content is only half the game — you also have to persuade searchers to click. A
            well-written meta title is your storefront in search results: a brief, effective statement that
            captures attention and represents your content. Staying within the ideal title and description
            lengths keeps that storefront looking sharp, avoids awkward truncation, and improves click-through
            from the search results page.
          </p>
        </div>
      </div>
    </section>
  );
}
