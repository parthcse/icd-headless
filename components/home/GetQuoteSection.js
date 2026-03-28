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
          className="contact-quote-layout animate-init mt-8 flex flex-col gap-12 lg:mt-10 lg:flex-row lg:items-start lg:gap-16 xl:gap-[100px]"
          data-anim="animate__fadeInUp animate__delay-0.6s"
        >
          <div className="flex w-full max-w-[500px] shrink-0 flex-col gap-2.5 lg:mx-0">
            <div className="contact-info-card">
              <IconEmail />
              <div className="min-w-0 flex-1 text-white">
                <p className="contact-info-card__title">Email Us</p>
                <a
                  className="contact-info-card__link"
                  href="mailto:hello@icecubedigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@icecubedigital.com
                </a>
              </div>
            </div>
            <div className="contact-info-card">
              <IconHeadset />
              <div className="min-w-0 flex-1 text-white">
                <p className="contact-info-card__title">Sales &amp; Support</p>
                <a
                  className="contact-info-card__link"
                  href="https://wa.me/919106060593"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 9106060593
                </a>
              </div>
            </div>
            <div className="contact-info-card">
              <IconUserHr />
              <div className="min-w-0 flex-1 text-white">
                <p className="contact-info-card__title">HR</p>
                <a
                  className="contact-info-card__link"
                  href="https://wa.me/916352955623"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +91 6352955623
                </a>
              </div>
            </div>
          </div>

          <ContactQuoteForm />
        </div>
      </div>
    </section>
  );
}
