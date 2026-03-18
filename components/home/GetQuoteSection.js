import Reveal from "../animations/Reveal";

export default function GetQuoteSection() {
  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 p-px">
          <div className="rounded-[calc(1.5rem-1px)] bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-black/60 mb-3">
                  Let&apos;s Work Together
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight text-black">
                  Get a Free Quote
                </h2>
                <p className="mt-4 text-[15px] text-black/70 leading-relaxed max-w-lg">
                  Share a bit about your project, goals, and timelines. We&apos;ll follow up with a tailored approach and next steps within two business days.
                </p>
                <div className="mt-6 flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-[13px] text-black/70">
                    <svg className="w-5 h-5 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Free Consultation
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-black/70">
                    <svg className="w-5 h-5 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    No Obligation
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-black/70">
                    <svg className="w-5 h-5 text-black/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    48hr Response
                  </div>
                </div>
              </div>

              {/* 
                CONTACT FORM:
                You can replace this static form with a WordPress-powered form 
                (e.g., Contact Form 7 via REST API, Gravity Forms, or WPForms).
                Or use a Next.js server action / API route to handle submissions.
              */}
              <form className="space-y-4 rounded-2xl bg-black/10 backdrop-blur-sm p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wide text-black/60 mb-1.5">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full h-11 rounded-lg border border-black/15 bg-white/80 px-4 text-[13px] text-black placeholder:text-black/30 outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wide text-black/60 mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full h-11 rounded-lg border border-black/15 bg-white/80 px-4 text-[13px] text-black placeholder:text-black/30 outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wide text-black/60 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full h-11 rounded-lg border border-black/15 bg-white/80 px-4 text-[13px] text-black placeholder:text-black/30 outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-wide text-black/60 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-lg border border-black/15 bg-white/80 px-4 py-3 text-[13px] text-black placeholder:text-black/30 outline-none focus:border-black/40 focus:ring-2 focus:ring-black/10 transition resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full h-11 rounded-full bg-black text-white text-[13px] font-semibold hover:bg-black/90 transition-colors duration-200"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
