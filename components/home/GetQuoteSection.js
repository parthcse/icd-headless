import ContactQuoteForm from "./ContactQuoteForm";
import { IconEmail, IconHeadset, IconUserHr } from "../icons/ContactChannelIcons";

export default function GetQuoteSection() {
  return (
    <section className="home-contant full-section">
      <div className="container">
        <div
          className="header-wrap mx-auto grid max-w-5xl gap-[0.5em] pb-space-mini text-center animate-init"
          data-anim="animate__fadeInUp animate__delay-0.4s"
        >
          <h3 className="font-30 mb-0 font-normal">Let’s Work Together</h3>
          <h2 className="main-title mb-0">Get a Free Quote</h2>
          <p>
            We’re thrilled to connect with you! Whether you’re looking to elevate your digital
            presence, innovate your brand, or explore new opportunities in the digital landscape,
            we’re here to make it happen.
          </p>
        </div>

        <div
          className="contact-quote-layout animate-init mt-8 grid grid-cols-1 gap-4 md:gap-space-small lg:mt-10 lg:grid-cols-12 xl:gap-x-20"
          data-anim="animate__fadeInUp animate__delay-0.6s"
        >
          <div className="grid gap-2 text-lg lg:col-span-5">
            <div className="flex items-start gap-space-small border border-white/10 px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <IconEmail />
              <div className="min-w-0 flex-1 text-white">
                <p className="font-semibold">Email Us</p>
                <a
                  className="hover:text-primary"
                  href="mailto:hello@icecubedigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@icecubedigital.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-space-small border border-white/10 px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <IconHeadset />
              <div className="min-w-0 flex-1 text-white">
                <p className="font-semibold">Sales &amp; Support</p>
                <a
                  className="hover:text-primary"
                  href="https://wa.me/919106060593"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 9106060593
                </a>
              </div>
            </div>
            <div className="flex items-start gap-space-small border border-white/10 px-space-small py-space-small lg:gap-6 lg:px-8 lg:py-6">
              <IconUserHr />
              <div className="min-w-0 flex-1 text-white">
                <p className="font-semibold">HR</p>
                <a
                  className="hover:text-primary"
                  href="https://wa.me/916352955623"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
