const CLIENT_LOGOS = [
  "/images/out-client-1.png",
  "/images/out-client-2.png",
  "/images/out-client-3.png",
  "/images/out-client-4.png",
  "/images/out-client-5.png",
  "/images/out-client-6.png",
  "/images/out-client-7.png",
  "/images/out-client-8.png",
  "/images/out-client-9.png",
  "/images/out-client-10.png",
  "/images/out-client-11.png",
  "/images/out-client-12.png",
  "/images/out-client-13.png",
  "/images/out-client-14.png",
  "/images/out-client-15.png",
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
        <div className="main-title animate fadeUp grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6">
          {CLIENT_LOGOS.map((src) => (
            <div
              key={src}
              className="column aspect-[260/170] bg-black-light hover:bg-transparent flex items-center justify-center border border-black-light hover:border-primary transition py-[0.3em] px-[0.2em]"
            >
              <img className="mx-auto h-full w-full object-contain" src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
