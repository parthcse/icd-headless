import Image from "next/image";

/**
 * Shared background for the fixed header + hero (Figma: one continuous image).
 * Use hero-bg.png or hero-bg.jpg in public/images/ (same basename works).
 */
export default function HeroHeaderBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Readability overlays — image stays visible underneath */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(241,126,63,0.16),transparent_55%)]" />
    </div>
  );
}
