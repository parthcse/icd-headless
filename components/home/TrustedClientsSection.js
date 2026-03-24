import Reveal from "../animations/Reveal";

const TOTAL_SLOTS = 15;
const HIGHLIGHT_INDEX = 7;

export default function TrustedClientsSection() {
  return (
    <Reveal>
      <section className="section-pad border-b border-[#202020]">
        <div className="site-gutter">
          <div className="site-container">
          <div className="mb-10 lg:mb-14">
            <h2 className="flex flex-col">
              <span className="section-heading-light">Our</span>
              <span className="section-heading-bold">Trusted Clients</span>
            </h2>
            <p className="section-desc mt-6 max-w-none text-[clamp(1rem,1.5vw,1.5rem)] text-zinc-300">
              Clients who have worked with. They trust IceCube Digital for over 10 years.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[30px] sm:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: TOTAL_SLOTS }, (_, i) => {
              const highlighted = i === HIGHLIGHT_INDEX;
              return (
                <div
                  key={i}
                  className={`flex h-[170px] items-center justify-center p-[60px] ${
                    highlighted
                      ? "border border-[#f17e3f] bg-black"
                      : "bg-[#151515]"
                  }`}
                >
                  <div className="h-[50px] w-[120px] rounded bg-[#2a2a2a]" aria-hidden />
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </section>
    </Reveal>
  );
}
