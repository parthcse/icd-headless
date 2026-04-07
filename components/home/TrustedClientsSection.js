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
    <section className="home-out-client full-section xl:pt-28 xl:pb-36">
      <div className="container">
        <div className="header-wrap grid gap-[0.5em] pb-space-mini text-center animated wpb_animate wpb_fadeUp xl:pb-16 xl:text-lg">
          <h3 className="mb-0 font-48 font-normal">Our</h3>
          <h2 className="main-title mb-0">Trusted Clients</h2>
          <p>Clients who have worked with. They trust IceCube Digital for over 10 years.</p>
        </div>
        <div
          className="main-title animated wpb_animate wpb_fadeUp grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-6"
          style={{ animationDelay: "0.5s" }}
        >
          {CLIENT_LOGOS.map((src, index) => (
            <div
              key={src}
              className={"column flex items-center justify-center border border-black-light bg-black-light py-[0.3em] px-[0.2em] transition hover:border-primary wpb_animate wpb_fadeUp"}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <img className="mx-auto max-h-[1.2em] max-w-[2em]" src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
