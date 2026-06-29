export default function ContactBannerSection() {
  return (
    <section className="services-banner full-section relative border-t-0 xl:py-28">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          aria-hidden="true"
          src="/assets/photos/home-banner-bg.png"
          alt=""
          fetchPriority="high"
        />
        <span className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="container relative z-10 mx-auto max-w-3xl py-10 text-center animate fadeUp">
        <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Get in Touch</p>
        <h1 className="font-48 font-semibold leading-tight xl:text-[56px]">Contact Us</h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
          Have a project in mind or a question for our team? We&apos;d love to hear from you — reach out
          and let&apos;s build something great together.
        </p>
      </div>
    </section>
  );
}
