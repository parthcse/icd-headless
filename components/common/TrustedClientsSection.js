/**
 * Site-wide "Our Trusted Clients" logo grid.
 *
 * Global section — rendered on the home page and on every service/company page
 * (via the `ourClients` / `trustedClients` keys in SECTION_RENDERERS). It replaced
 * the old 5-logo `ServicesOurClientSection` strip. Edit CLIENT_LOGOS here to
 * change the logos everywhere.
 */
const CLIENT_LOGOS = [
  "/assets/photos/out-client-1.png",
  "/assets/photos/out-client-2.png",
  "/assets/photos/out-client-3.png",
  "/assets/photos/out-client-4.png",
  "/assets/photos/out-client-5.png",
  "/assets/photos/out-client-6.png",
  "/assets/photos/out-client-7.png",
  "/assets/photos/out-client-8.png",
  "/assets/photos/out-client-9.png",
  "/assets/photos/out-client-10.png",
  "/assets/photos/out-client-11.png",
  "/assets/photos/out-client-12.png",
  "/assets/photos/out-client-13.png",
  "/assets/photos/out-client-14.png",
  "/assets/photos/out-client-15.png",
];

export default function TrustedClientsSection() {
  return (
    <section className="home-out-client full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp xl:pb-16">
          <h3 className="font-48">Our</h3>
          <h2 className="main-title">Trusted Clients</h2>
          <p>Clients who have worked with. They trust IceCube Digital for over 10 years.</p>
        </div>
        <div className="main-title animate fadeUp grid grid-cols-4 gap-2 text-center md:gap-4 lg:grid-cols-5 lg:gap-6">
          {CLIENT_LOGOS.map((src) => (
            <div
              key={src}
              className="column aspect-[260/170] bg-black-light hover:bg-transparent flex items-center justify-center border border-black-light hover:border-primary transition py-[0.3em] px-[0.2em]"
            >
              <img className="mx-auto h-full w-full object-contain" src={src} alt="" loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
