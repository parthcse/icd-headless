import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import YoastSchema from "@/components/common/YoastSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/important-update-regarding-scammers/");
  return (
    yoast || {
      title: "Important Update Regarding Scammers Impersonating Icecube Digital",
      description:
        "How to spot and report scammers misusing the Icecube Digital brand, logo or employee names — our official channels and steps to protect yourself.",
    }
  );
}

const EMAIL = "hello@icecubedigital.com";
const PHONE = "+91 9106060593";
const WHATSAPP = "https://wa.me/919106060593";

const OFFICIAL_CHANNELS = [
  { label: "Website", href: "/", text: "https://www.icecubedigital.com", internal: true },
  { label: "Facebook", href: "https://www.facebook.com/IcecubeDigital", text: "https://www.facebook.com/IcecubeDigital" },
  { label: "Twitter", href: "https://twitter.com/Icecubedigital", text: "https://twitter.com/Icecubedigital" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ice-cube-digital", text: "https://www.linkedin.com/company/ice-cube-digital" },
  { label: "Instagram", href: "https://www.instagram.com/icecubedigital", text: "https://www.instagram.com/icecubedigital" },
  { label: "Pinterest", href: "https://www.pinterest.com/icecubedigital", text: "https://www.pinterest.com/icecubedigital" },
  { label: "Youtube", href: "https://www.youtube.com/channel/UClVinGrBJ45XuOL_Q65WGEA", text: "https://www.youtube.com/channel/UClVinGrBJ45XuOL_Q65WGEA" },
];

const PROTECT_STEPS = [
  ["Verify email addresses:", " Genuine communications from Icecube Digital will always come from an ", true, " email address. Be cautious of emails from any other domains."],
  ["Confirm job offers:", " If you receive any job offers or recruitment messages, check our official contact details or reach out to us directly to confirm."],
  ["Stop contact with scammers:", " If you suspect you’re dealing with a scammer, stop all communication immediately."],
  ["Do not send money:", " Avoid transferring any funds to unknown or unverified individuals."],
  ["Secure your accounts:", " Update your account passwords to ensure your security."],
  ["Check your settings:", " Review the privacy and security settings on your social media accounts, devices, and other platforms."],
  ["Report suspicious activities:", " Share any fraudulent activities or suspicious communications with us so we can take action."],
];

const MailLink = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;

export default function ScamAlertPage() {
  return (
    <>
      <YoastSchema uri="/important-update-regarding-scammers/" />
      <Header />
      <main>
        {/* Top section */}
        <section className="scam-alert-banner common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Security Notice</p>
            <h1 className="font-48 font-semibold leading-tight">
              Important Update Regarding Scammers Impersonating Icecube Digital
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="scam-alert-content-section full-section">
          <div className="container">
            <div className="text-content animate fadeUp">
              <p>
                At Icecube Digital, we have recently identified instances where fraudsters are misusing our brand name,
                logo, and even the names of our employees to scam individuals worldwide. These illegal actions are
                unacceptable, and we are dedicated to protecting our brand, our employees, and our valued clients from
                such scams.
              </p>

              <h2>How to Identify Common Signs of a Scam</h2>
              <p>
                Recognizing common signs of scams can help you stay safe. Remember that scammers often use deceptive
                tactics. At Icecube Digital, we are dedicated to helping you identify and avoid scams effectively. Stay
                alert and protect yourself!
              </p>
              <ul>
                <li>Scammers reach out unexpectedly.</li>
                <li>They pretend to be from a trusted company or person.</li>
                <li>They pressure you to act quickly.</li>
                <li>They suggest ways to verify them, like calling a number or visiting a website they provide.</li>
                <li>They send unexpected emails, texts, or social media messages claiming to be someone else.</li>
                <li>They try to get your personal information, like your Social Security number, bank details, or credit card information.</li>
                <li>They play with your emotions to manipulate you.</li>
                <li>They ask you to keep things secret.</li>
                <li>They present deals that seem too good to be true.</li>
              </ul>

              <h2>How to Detect Scammers Pretending to Be Icecube Digital</h2>
              <p>
                Be cautious of calls, texts, social media messages, and emails pretending to be from Icecube Digital or
                its employees. Here are some key points to remember:
              </p>

              <h3>1. We don&rsquo;t use Telegram for communication.</h3>
              <p>
                Icecube Digital&rsquo;s primary communication channels are email (<MailLink />) and phone
                (<strong>{PHONE}</strong>). We will never reach out via platforms like Telegram or other messaging
                services.
              </p>

              <h3>2. We only offer jobs to applicants who applied to us.</h3>
              <p>
                We never reach out to individuals with unsolicited job offers. Scammers may send fake job offers claiming
                to appreciate your skills. Please be cautious of:
              </p>
              <ul>
                <li>Vague job descriptions.</li>
                <li>Messages with grammatical mistakes.</li>
                <li>Offers that seem too good to be true.</li>
              </ul>
              <p>
                Avoid clicking on suspicious links. If you&rsquo;re unsure about an email&rsquo;s legitimacy, contact us
                at <MailLink /> or call <strong>{PHONE}</strong>.
              </p>

              <h3>3. We never ask employees, freelancers, or contractors for money.</h3>
              <p>
                Icecube Digital will never ask anyone to send money, share credit card details, or transfer funds. Any
                such request is fraudulent.
              </p>

              <h3>4. We don&rsquo;t charge application fees.</h3>
              <p>
                Our hiring process is free for freelancers and candidates. We do not ask for payment at any stage of
                recruitment. Contractors are paid based on agreed terms in signed contracts.
              </p>

              <h3>5. We don&rsquo;t have a mobile app.</h3>
              <p>Icecube Digital operates only through these official channels:</p>
              <ul>
                {OFFICIAL_CHANNELS.map((c) => (
                  <li key={c.label}>
                    <strong>{c.label}:</strong>{" "}
                    {c.internal ? (
                      <Link href={c.href}>{c.text}</Link>
                    ) : (
                      <a href={c.href} target="_blank" rel="noopener noreferrer">{c.text}</a>
                    )}
                  </li>
                ))}
              </ul>
              <p>
                We do not have a mobile app and will never ask you to share sensitive information through unauthorized
                links or applications.
              </p>

              <h3>6. We don&rsquo;t promote cryptocurrency.</h3>
              <p>
                Icecube Digital is not associated with any cryptocurrency business. If someone asks you to buy
                cryptocurrency or make upfront payments as part of a job, it&rsquo;s a scam.
              </p>

              <h3>7. We never ask for banking details over email.</h3>
              <p>
                Your privacy is important to us. Icecube Digital will never ask for your banking information through
                email, text, or phone.
              </p>

              <p>
                If you encounter suspicious communication claiming to be from Icecube Digital, report it immediately to{" "}
                <MailLink /> or call <strong>{PHONE}</strong>. Stay alert and protect yourself from scams.
              </p>

              <h2>What to Do If You Were Scammed or Received a Suspicious Email</h2>
              <p>
                Your report can help Icecube Digital stop scammers. If you&rsquo;ve received suspicious emails, texts, or
                phone calls from someone pretending to be from our company, please contact us immediately:
              </p>
              <ul>
                <li><strong>Email:</strong> <MailLink /></li>
                <li><strong>Phone:</strong> <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{PHONE}</a></li>
              </ul>
              <p>We will investigate and take the necessary steps to protect you, our company, our clients, and our team.</p>

              <h2>Steps to Protect Yourself:</h2>
              <ul>
                {PROTECT_STEPS.map(([label, text, hasDomain, tail]) => (
                  <li key={label}>
                    <strong>{label}</strong>
                    {text}
                    {hasDomain && (
                      <>
                        <strong>@icecubedigital.com</strong>
                        {tail}
                      </>
                    )}
                  </li>
                ))}
              </ul>

              <p>
                Join us in fighting scams by reporting any fraudulent activities to <MailLink /> or calling us at{" "}
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">{PHONE}</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <PageSchema uri="/important-update-regarding-scammers/" />
      <Footer />
    </>
  );
}
