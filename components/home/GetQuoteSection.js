import ContactQuoteForm from "./ContactQuoteForm";

export default function GetQuoteSection() {
  return (
    <section className="home-contant full-section xl:pt-28 xl:pb-36">
      <div className="container">
        <div className="heading-wrap mx-auto max-w-5xl xl:pb-16 animate fadeUp">
          <h3 className="mb-0 font-48 font-normal">Let’s Work Together</h3>
          <h2 className="main-title mb-0">Get a Free Quote</h2>
          <p>
            We’re thrilled to connect with you! Whether you’re looking to elevate your digital presence,
            innovate your brand, or explore new opportunities in the digital landscape, we’re here to make it
            happen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-space-small lg:grid-cols-12 xl:gap-x-20 animate fadeUp" style={{ animationDelay: "0.3s" }}>
          <div className="grid gap-2 text-lg lg:col-span-5">
            <div className="flex items-start gap-space-small border border-[#272727] px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <img
                className="max-h-[1em] max-w-[1em] shrink-0 pt-[0.15em] font-48"
                src="/images/email-icon.svg"
                alt=""
              />
              <div className="min-w-0 flex-1">
                <p className="font-semibold">Email Us</p>
                <a href="mailto:hello@icecubedigital.com" target="_blank" rel="noopener noreferrer">
                  hello@icecubedigital.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-space-small border border-[#272727] px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <img
                className="max-h-[1em] max-w-[1em] shrink-0 pt-[0.15em] font-48"
                src="/images/call-icon.svg"
                alt=""
              />
              <div className="min-w-0 flex-1">
                <p className="font-semibold">Sales &amp; Support</p>
                <a href="tel:+919106060593" target="_blank" rel="noopener noreferrer">
                  +91 9106060593
                </a>
              </div>
            </div>
            <div className="flex items-start gap-space-small border border-[#272727] px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <img
                className="max-h-[1em] max-w-[1em] shrink-0 pt-[0.15em] font-48"
                src="/images/user-icon.svg"
                alt=""
              />
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
