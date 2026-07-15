/**
 * Company culture carousel slides, in folder order (about-our-culture-1..9).
 * Add a new photo to /public/assets/photos/ and append it here to add a slide.
 * NOTE: 1-5 are .png, 6-9 are .jpg — extensions are mixed, so keep the full filename.
 */
const CULTURE_PHOTOS = [
  "/assets/photos/about-our-culture-1.png",
  "/assets/photos/about-our-culture-2.png",
  "/assets/photos/about-our-culture-3.png",
  "/assets/photos/about-our-culture-4.png",
  "/assets/photos/about-our-culture-5.png",
  "/assets/photos/about-our-culture-6.jpg",
  "/assets/photos/about-our-culture-7.jpg",
  "/assets/photos/about-our-culture-8.jpg",
  "/assets/photos/about-our-culture-9.jpg",
];

export default function AboutOurCultureSection() {
  return (
    <section className="about-our-culture full-section">
      <div className="heading-wrap container animate fadeUp">
        <h3 className="font-48">Our</h3>
        <h2 className="main-title">Company Culture</h2>
        <p>Built On Success.</p>
      </div>
      <div className="owl-carousel about-our-culture-slider px-4">
        {CULTURE_PHOTOS.map((src) => (
          <figure key={src} className="group flex items-center h-full">
            <img className="cursor-pointer grayscale group-hover:grayscale-0 transition duration-300" src={src} alt="" />
          </figure>
        ))}
      </div>
    </section>
  );
}
