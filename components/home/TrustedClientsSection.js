import Reveal from "../animations/Reveal";
import Image from "next/image";

/**
 * Add your client logo image paths here.
 * Place logo files in /public/images/clients/ and reference them like:
 *   "/images/clients/client-name.png"
 *
 * Or use full external URLs if hosted elsewhere.
 */
const clients = [
  { name: "Client 1", logo: "/images/clients/client-1.png" },
  { name: "Client 2", logo: "/images/clients/client-2.png" },
  { name: "Client 3", logo: "/images/clients/client-3.png" },
  { name: "Client 4", logo: "/images/clients/client-4.png" },
  { name: "Client 5", logo: "/images/clients/client-5.png" },
  { name: "Client 6", logo: "/images/clients/client-6.png" },
  { name: "Client 7", logo: "/images/clients/client-7.png" },
  { name: "Client 8", logo: "/images/clients/client-8.png" },
  { name: "Client 9", logo: "/images/clients/client-9.png" },
  { name: "Client 10", logo: "/images/clients/client-10.png" },
];

export default function TrustedClientsSection() {
  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
            Brands That Trust Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
            Trusted Clients
          </h2>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 px-6 py-10 sm:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center h-16 sm:h-20 px-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="relative w-full h-8 sm:h-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="120px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
