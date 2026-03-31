import ContactQuoteForm from "./ContactQuoteForm";

export default function GetQuoteSection() {
  return (
    <section className="home-contant full-section xl:pt-28 xl:pb-36">
      <div className="container">
        <div className="header-wrap animated wpb_animate wpb_fadeUp mx-auto grid max-w-5xl gap-[0.5em] pb-space-mini text-center xl:pb-16 xl:text-lg">
          <h3 className="font-48 mb-0 font-normal">Let’s Work Together</h3>
          <h2 className="main-title mb-0">Get a Free Quote</h2>
          <p>
            We’re thrilled to connect with you! Whether you’re looking to elevate your digital
            presence, innovate your brand, or explore new opportunities in the digital landscape,
            we’re here to make it happen.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:gap-space-small lg:grid-cols-12 xl:gap-x-20">
          <div className="grid gap-2 text-lg lg:col-span-5">
            <div className="flex items-start gap-space-small border border-white/10 px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <svg
                className="h-[1em] shrink-0 font-48 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">Email Us</p>
                <a href="mailto:hello@icecubedigital.com" target="_blank" rel="noopener noreferrer">
                  hello@icecubedigital.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-space-small border border-white/10 px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <svg
                className="h-[1em] shrink-0 font-48 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 16v-3a7 7 0 1114 0v3M5 16a2 2 0 002 2h1M19 16a2 2 0 01-2 2h-1M8 18v2m8-2v2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">Sales &amp; Support</p>
                <a href="tel:+919106060593" target="_blank" rel="noopener noreferrer">
                  +91 9106060593
                </a>
              </div>
            </div>
            <div className="flex items-start gap-space-small border border-white/10 px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <svg
                className="h-[1em] shrink-0 font-48 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 20a8 8 0 0116 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">HR</p>
                <a href="tel:+916352955623" target="_blank" rel="noopener noreferrer">
                  +91 6352955623
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
