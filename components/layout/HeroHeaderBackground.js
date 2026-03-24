import Image from "next/image";

export default function HeroHeaderBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      {/* placeholder: replace /images/hero-bg.png with actual Figma export */}
      <Image src="/images/hero-bg.png" alt="" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_0%,rgba(241,126,63,0.14),transparent_55%)]" />
    </div>
  );
}
