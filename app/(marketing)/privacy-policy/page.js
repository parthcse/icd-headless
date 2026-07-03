import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YoastSchema from "@/components/common/YoastSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/privacy-policy/");
  return (
    yoast || {
      title: "Privacy Policy | Icecube Digital",
      description:
        "How Icecube Digital collects, uses, shares and protects the information of users, visitors and clients of icecubedigital.com.",
    }
  );
}

const EMAIL = "hello@icecubedigital.com";
const ADDRESS = "Icecube Digital, 310, Sarthik – II, Opp. Rajpath Club, Sarkhej – Gandhinagar Hwy, Bodakdev, Ahmedabad, Gujarat 380054";

export default function PrivacyPolicyPage() {
  return (
    <>
      <YoastSchema uri="/privacy-policy/" />
      <Header />
      <main>
        {/* Top section */}
        <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Legal</p>
            <h1 className="font-48 font-semibold leading-tight">Privacy Policy</h1>
          </div>
        </section>

        {/* Policy content */}
        <section className="privacy-content-section full-section">
          <div className="container">
            <div className="text-content animate fadeUp">
              <p>
                Icecube Digital, (&ldquo;Icecube Digital&rdquo; or &ldquo;<Link href="/">www.icecubedigital.com</Link>&rdquo;
                or &ldquo;we&rdquo; or &ldquo;us&rdquo;) has created this privacy policy (this &ldquo;Privacy Policy&rdquo;) in
                order to show our commitment to user, visitor &amp; customer privacy with regard to the Icecube Digital web
                site at www.icecubedigital.com (the &ldquo;Site&rdquo;). Privacy on our Site is of great importance to us.
                Because we gather important information from our users, visitors &amp; clients (collectively
                &ldquo;Clients&rdquo; or &ldquo;you&rdquo; or &ldquo;your&rdquo;), we have established this Privacy Policy as a
                means to communicate our information gathering &amp; dissemination practices. By accessing this Site, you
                acknowledge &amp; agree to this Privacy Policy &amp; also agree to the Terms of Use (&ldquo;ToU&rdquo;) of our
                Site.
              </p>

              <h2>Information We Collect &amp; How We Make Use Of It</h2>
              <p>
                We require Clients who register to use the services offered on our Site (collectively, the
                &ldquo;Service&rdquo;) to give us personally identifiable information, which may include but is not limited to
                the Client&rsquo;s first &amp; last name, company name, address, phone number, email address, credit card
                number, cookies, IP logs, &amp; other information (collectively &ldquo;Personal Information&rdquo;).
              </p>
              <p>
                Besides the Personal Information, we may also collect other information regarding your use of the Site,
                including general statistical or aggregate information, which may be collected whether or not you register for
                the Services offered on our Site. From time to time, we may also collect or ask for additional Personal
                Information, which will also be expressly included herein as Personal Information. You can opt out of providing
                this additional information by not entering it when asked or not using the Site.
              </p>
              <p>
                We use the Personal Information &amp; the information that we collect to provide &amp; maintain the Site as we
                deem appropriate in our sole discretion. We may also use the information to contact you to further discuss
                interest in our company, the services that we provide, &amp; to send information regarding our company or
                partners, such as promotions &amp; events. You may be invited to receive an email newsletter or other
                correspondence by providing an email address.
              </p>
              <p>
                We may also email (or send via other methods) information regarding updates to the Site or Icecube Digital,
                &amp; may send a customer newsletter, or other correspondence. You will have an opportunity to unsubscribe to
                any emails or mailings by clicking on an &ldquo;unsubscribe&rdquo; hyperlink contained in promotional emails we
                send you, or by e-mailing us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Any opt-out by you is not deemed valid
                until processed by Icecube Digital. It is your obligation to verify that you have been opted-out. Icecube
                Digital shall not be liable for problems with the opt-out procedures.
              </p>
              <p>
                Except as we explicitly state at the time we request information, or as provided for herein or in the Icecube
                Digital ToU Agreement, we do not disclose to third parties the information provided. All financial &amp;
                billing information that we collect through the Site is used solely to check the qualifications of prospective
                clients &amp; to bill for the Service. This billing information is not used by Icecube Digital for marketing or
                promotional purposes, except as provided for herein. We may use a third-party intermediary to manage the
                credit card processing &amp; we may share any appropriate information with them.
              </p>
              <p>In addition, we may share or disclose your information, including Personal Information, in the following situations:</p>
              <ul>
                <li>
                  We reserve the right to disclose any Personal Information or other information if required to do so by law,
                  including compliance with legal process served on Icecube Digital, or if we believe that such action is
                  necessary in order to (a) protect or defend the legal rights or property of Icecube Digital, the Site or its
                  Clients, or (b) in an emergency to protect the health &amp; safety of the Site&rsquo;s users or the general
                  public.
                </li>
                <li>
                  Personal Information you submit, &amp; other information we collect, may be shared with our parent,
                  subsidiaries, affiliates, licensors, licensees, joint venturers, partners, sponsors and/or vendors
                  (collectively, &ldquo;Affiliated Third Parties&rdquo;) to perform customer service, carry out your requests,
                  respond to inquiries, &amp; to notify you regarding any promotions, purchases or account information.
                </li>
                <li>
                  Personal Information you submit, &amp; other information we collect, will be disclosed as part of any merger
                  or acquisition, creation of a separate business to provide the Site or fulfill our services, sale or pledge
                  of company assets as well as in the event of an insolvency, bankruptcy or receivership in which Customer
                  information would be transferred as one of the business assets of the company.
                </li>
                <li>
                  Personal Information you submit, &amp; other information we collect, may be distributed or shared in order to
                  conduct any business as we, in our sole subjective discretion, deem reasonable.
                </li>
              </ul>
              <p>
                We do not respond to browser do-not-track signals or mechanisms. You may be using the Site to host data
                (including but not limited to pictures, email correspondence with other users &amp; other content) &amp;
                information (&ldquo;Data&rdquo;). We will not review, share, distribute, print, or reference any such Data
                except as provided herein &amp; in the Icecube Digital ToU, as may be required by law, or in order to conduct
                any business that we, in our sole subjective discretion, deem reasonable. Individual records may at times be
                viewed or accessed for the purpose of resolving a problem, support issue, suspected violation of any of the
                terms of this Site, as may be required by law, or as deemed necessary by Icecube Digital. Of course, you are
                responsible for maintaining the confidentiality &amp; security of your user registration &amp; password.
              </p>
              <p>
                Icecube Digital may also collect certain information from visitors to, &amp; users of, the Site, such as
                Internet addresses. This information is logged to help diagnose technical problems, &amp; to administer our
                Site in order to constantly improve the quality of the Service. We may also track &amp; analyze non-identifying
                &amp; aggregate usage &amp; volume statistical information from you &amp; provide such information to third
                parties.
              </p>
              <p>
                Icecube Digital does not wish to collect any Personal Information (or any information at all) from any persons
                under 14 years old. If you are under 14 years old, you may not use the Site.
              </p>

              <h2>Anti-Spam Policy</h2>
              <p>
                Icecube Digital.com subscribes to an Anti-Spam policy for all its communication protocols. This means that we
                do not condone unsolicited email messages, notifications, alerts or any message that you may receive from
                someone who should not have your email address.
              </p>
              <p>
                If you have received an unsolicited email message, which you would like to report to Icecube Digital please
                inform us via email at: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
              <p><strong>The following two options are available:</strong></p>
              <ul>
                <li>Inform Icecube Digital of the incident, but keep your email unblocked, or</li>
                <li>Inform Icecube Digital of the incident &amp; have your email blocked so as to not be able to receive any messages sent via Icecube Digital.</li>
              </ul>
              <p>Please include your email address, the date &amp; time you received it &amp; the contents of the message (if possible) when completing the email.</p>

              <h2>Personally Identifiable Information</h2>
              <p>
                Personally Identifiable information (PII) Definition: Any information or combination of information that
                identifies, links, or is unique to a person or individual. PII can be broken into two different categories:
                sensitive &amp; non-sensitive. PII is defined as sensitive when, if lost or compromised, it could potentially
                result in harm or identity theft. Non-sensitive PII is defined as publicly available information. This pertains
                to both client &amp; client&rsquo;s customer data.
              </p>
              <p><strong>Examples of PII (Not all inclusive) :</strong></p>
              <p><strong>Sensitive:</strong> SSN, Driver&rsquo;s License, Birth Date, Birthplace, Cell phone, Personal email or mailing address, Employment information</p>
              <p><strong>Non-sensitive:</strong> Office location, Business phone number, Business email address</p>
              <p>Sensitive PII Handling:</p>
              <ul>
                <li>Sensitive PII will not be transmitted through attachments within email or other communication tools that are not encrypted.</li>
                <li>All sensitive PII data is to be stored &amp; shared directly through specific cloud tools to ensure encryption while not in use &ndash; Google Drive.</li>
                <li>Permission to data will only be shared with those that have been agreed to be working on the specified tasks.</li>
                <li>No personal accounts will have access to sensitive PII data.</li>
                <li>No personal laptops or devices will be used to access sensitive PII data.</li>
                <li>When sensitive PII data is provided through insecure means, data is to be moved to one of the specified cloud tools &amp; any local files that may have been stored is to be deleted.</li>
                <li>Once sensitive PII data isn&rsquo;t needed anymore, delete all data previously stored.</li>
                <li>If it&rsquo;s required to store sensitive PII on a local storage device, the hard drive must be encrypted.</li>
              </ul>

              <h2>Third Party Sites</h2>
              <p>
                The Site contains links to other websites. We are not responsible for the privacy practices or the content of
                these other websites. You will need to check the policy statement of these others websites to understand their
                policies. When you access a linked site you may be disclosing private information. It is your responsibility to
                keep such information private &amp; confidential.
              </p>

              <h2>Cookies</h2>
              <p>
                When you view our Sites, we may store some information on your computer&rsquo;s hard drive. This information
                will be in the form of a &ldquo;Cookie.&rdquo; Most web browsers automatically accept Cookies, but you can
                change your browser to prevent that. Without accepting a Cookie, you can browse through our site, but you will
                be unable to establish a shopping cart session &amp; make a purchase on-line.
              </p>

              <h2>Security</h2>
              <p>
                The Site makes a reasonable effort to protect your information by using{" "}
                <Link href="/blog/what-is-ssl-certificate-why-you-need-it-and-when-to-use-it/">Secure Sockets Layer</Link> (SSL)
                technology. SSL encrypts your information to ensure it remains private &amp; secure.{" "}
                <strong>WE DO NOT REPRESENT, WARRANT AND/OR GUARANTEE THAT PERSONAL INFORMATION WILL REMAIN SECURE</strong>. To
                check the security of your connection, look at the bottom of your browser window after accessing the server. If
                you see an unbroken key or a closed lock (depending on your browser), then SSL is active. You can also check by
                looking at the URL line of your browser. When accessing a secure server, the first characters of the site will
                change from &ldquo;http&rdquo; to &ldquo;https&rdquo;.
              </p>

              <h2>Additional Information</h2>
              <p>
                This Policy is part of the ToU of the Site &amp; any use of the Site is governed by those ToU. Questions
                regarding this Policy or the practices of the Site should be directed to Icecube Digital&rsquo; Administrator by
                emailing such questions to <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or by certified mail addressed to {ADDRESS}.
              </p>

              <h2>Updates To Our Policy</h2>
              <p>
                If we make any material changes to this Privacy Policy, we will post a notice on this Site notifying users of
                the changes. In some cases, we also may send an email notifying users of the changes. You should check this
                Site periodically to see if any recent changes to this Privacy Policy have occurred. If you have any questions
                regarding this Privacy Policy, you should contact our Customer Service Department.
              </p>

              <h2>How To Contact Us</h2>
              <p>
                If you have any questions regarding the Icecube Digital privacy policy or information that you have submitted to
                us, please feel free to contact us at:
              </p>
              <p><strong>Email:</strong> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <p><strong>Mailing Address:</strong> {ADDRESS}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
