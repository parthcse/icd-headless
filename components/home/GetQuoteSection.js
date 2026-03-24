"use client";

import QuoteCTAButton from "../ui/QuoteCTAButton";

function MailIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-[#f17e3f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-[#f17e3f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-[#f17e3f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

export default function GetQuoteSection() {
  function handleSendClick(e) {
    e.preventDefault();
    e.currentTarget.closest("form")?.requestSubmit();
  }

  return (
    <section className="section-pad border-b border-[#202020]">
      <div className="site-gutter">
        <div className="site-container">
        <div className="mb-10 lg:mb-14">
          <h2 className="flex flex-col">
            <span className="section-heading-light">Let&apos;s Work Together</span>
            <span className="section-heading-bold">Get a Free Quote</span>
          </h2>
          <p className="section-desc mt-6 max-w-3xl text-zinc-300">
            Whether you are launching a new store or scaling an existing brand, our team is here to
            help. Share your goals and we will connect you with the right specialists to plan scope,
            timeline, and next steps—no obligation, just a clear path forward.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="flex w-full shrink-0 flex-col gap-6 lg:w-[500px]">
            <div className="border border-[#272727] px-[40px] py-[30px]">
              <div className="flex items-start gap-4">
                <MailIcon />
                <div>
                  <p className="font-bold text-lg text-white">Email Us</p>
                  <a href="mailto:hello@icecubedigital.com" className="mt-1 block text-xl text-zinc-300 hover:text-[#f17e3f]">
                    hello@icecubedigital.com
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-[#272727] px-[40px] py-[30px]">
              <div className="flex items-start gap-4">
                <PhoneIcon />
                <div>
                  <p className="font-bold text-lg text-white">Sales &amp; Support</p>
                  <a href="tel:+919106060593" className="mt-1 block text-xl text-zinc-300 hover:text-[#f17e3f]">
                    +91 9106060593
                  </a>
                </div>
              </div>
            </div>
            <div className="border border-[#272727] px-[40px] py-[30px]">
              <div className="flex items-start gap-4">
                <UserIcon />
                <div>
                  <p className="font-bold text-lg text-white">HR</p>
                  <a href="tel:+916352955623" className="mt-1 block text-xl text-zinc-300 hover:text-[#f17e3f]">
                    +91 6352955623
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form
            className="w-full flex-1 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Full Name</span>
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full border border-[#272727] bg-transparent px-[30px] py-[20px] text-[20px] text-white placeholder:text-zinc-500 focus:border-[#f17e3f] focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full border border-[#272727] bg-transparent px-[30px] py-[20px] text-[20px] text-white placeholder:text-zinc-500 focus:border-[#f17e3f] focus:outline-none"
                />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Message"
                className="h-[260px] w-full resize-none border border-[#272727] bg-transparent px-[30px] py-[20px] text-[20px] text-white placeholder:text-zinc-500 focus:border-[#f17e3f] focus:outline-none"
              />
            </label>
            <QuoteCTAButton href="#" onClick={handleSendClick} className="w-full justify-center sm:w-auto">
              Send Message
            </QuoteCTAButton>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}
