const SLIDES = [1, 2, 3, 4, 5, 3];

export default function AboutOurCultureSection() {
  return (
    <section className="about-our-culture full-section">
      <div className="heading-wrap container animate fadeUp">
        <h3 className="font-48">Our</h3>
        <h2 className="main-title">Company Culture</h2>
        <p>Built On Success.</p>
      </div>
      <div className="owl-carousel about-our-culture-slider px-4">
        {SLIDES.map((n, i) => (
          <figure key={`${n}-${i}`} className="group flex items-center h-full">
            <img
              className="cursor-pointer grayscale group-hover:grayscale-0 transition duration-300"
              src={`/images/about-our-culture-${n}.png`}
              alt=""
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
