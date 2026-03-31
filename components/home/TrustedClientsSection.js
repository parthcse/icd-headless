export default function TrustedClientsSection() {
  const logos = Array.from({ length: 15 }, (_, i) => ({
    id: `out-client-${i + 1}`,
    src: "/images/client-logo-placeholder.svg",
  }));

  return (
    <section className="home-out-client full-section">
              <div className="container">
                <div className="header-wrap pb-space-mini text-center grid gap-[0.5em] animate-init" data-anim="animate__fadeInUp animate__delay-0.4s">
                  <h3 className="font-30 font-normal mb-0">Our</h3>
                  <h2 className="main-title mb-0">Trusted Clients</h2>
                  <p>Clients who have worked with. They trust IceCube Digital for over 10 years.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 main-title text-center gap-4 lg:gap-6 animate-init" data-anim="animate__fadeInUp animate__delay-0.6s">
                  {logos.map((logo) => (
                    <div
                      key={logo.id}
                      className="column flex items-center justify-center bg-white/5 border border-white/5 hover:border-primary transition py-[0.3em] px-[0.2em]"
                    >
                      <img className="mx-auto max-w-[2em] max-h-[1.2em]" src={logo.src} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
  );
}
