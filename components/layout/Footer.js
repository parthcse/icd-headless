export default function Footer() {
  return (
    <footer className="footer-main bg-black-light bg-[#151515] pt-space text-base xl:pt-28 xl:text-sm">
      <div className="container">
        <h4 className="font-24 mb-[0.8em]">Our Services</h4>
        <div className="grid grid-cols-1 gap-4 pb-space md:grid-cols-2 md:gap-6 lg:grid-cols-4 xl:pb-28">
          <ul className="mb-auto grid gap-2 [&_a]:transition [&_a:hover]:text-primary [&_a:hover]:underline">
            <li>
              <a href="#">ECommerce Website Design</a>
            </li>
            <li>
              <a href="#">ECommerce Web Development</a>
            </li>
            <li>
              <a href="#">Hire eCommerce Developers</a>
            </li>
            <li>
              <a href="#">Magento 2 Upgrade</a>
            </li>
            <li>
              <a href="#">Magento Development</a>
            </li>
            <li>
              <a href="#">Hire Magento Developers</a>
            </li>
            <li>
              <a href="#">Magento 2 Development</a>
            </li>
            <li>
              <a href="#">Technical SEO Services</a>
            </li>
            <li>
              <a href="#">Hire ReactJS Developers</a>
            </li>
          </ul>
          <ul className="mb-auto grid gap-2 [&_a]:transition [&_a:hover]:text-primary [&_a:hover]:underline">
            <li>
              <a href="#">Shopify Development</a>
            </li>
            <li>
              <a href="#">Hire Shopify Developers</a>
            </li>
            <li>
              <a href="#">Woocommerce Development</a>
            </li>
            <li>
              <a href="#">Hire Woocommerce Developers</a>
            </li>
            <li>
              <a href="#">WordPress Development</a>
            </li>
            <li>
              <a href="#">Hire WordPress Developers</a>
            </li>
            <li>
              <a href="#">Custom PHP Development</a>
            </li>
            <li>
              <a href="#">Local SEO Services</a>
            </li>
            <li>
              <a href="#">Hire Next.js Developers</a>
            </li>
          </ul>
          <ul className="mb-auto grid gap-2 [&_a]:transition [&_a:hover]:text-primary [&_a:hover]:underline">
            <li>
              <a href="#">PPC Management</a>
            </li>
            <li>
              <a href="#">Magento SEO Services</a>
            </li>
            <li>
              <a href="#">Shopify SEO Service</a>
            </li>
            <li>
              <a href="#">WordPress SEO Service</a>
            </li>
            <li>
              <a href="#">Professional SEO Service</a>
            </li>
            <li>
              <a href="#">Digital Marketing Service</a>
            </li>
            <li>
              <a href="#">Email Marketing Service</a>
            </li>
            <li>
              <a href="#">On Page SEO Services</a>
            </li>
            <li>
              <a href="#">Hire NodeJS Developers</a>
            </li>
          </ul>
          <div className="footer-trusted bg-[#0f0f0f] p-5 text-center xl:p-6">
            <img
              className="mx-auto mb-3 max-w-28"
              src="https://www.icecubedigital.com/wp-content/webp-express/webp-images/uploads/2023/08/top-web-development-company.png.webp"
              alt="Top web development company"
            />
            <h4 className="font-22 mb-2 leading-tight xl:text-xl">Most Trusted Company</h4>
            <p>Icecube Digital Is Rated As The Top Web Development Company By Good Firms</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pb-space-mini pt-space-mini text-center lg:flex-row lg:text-left xl:pb-10 xl:pt-10">
          <div className="grid gap-2 text-white/60">
            <ul className="flex flex-wrap items-center justify-center gap-2 [&_a]:text-white [&_a]:transition [&_a:hover]:text-primary lg:justify-start">
              <li>
                <a href="#">Home</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Our Portfolio</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Testimonial</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Our Blog</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Sitemap</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Scam Alert</a>
              </li>
              <li>|</li>
              <li>
                <a href="#">Privacy</a>
              </li>
            </ul>
            <small>Copyright © 2026 Icecube Digital. All rights reserved.</small>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 lg:ml-auto lg:flex-row lg:gap-11 xl:gap-16">
            <ul className="flex gap-3">
              <li>
                <a href="#">
                  <img src="/images/inkedin.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/instagram.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/facebook.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/twitter.svg" alt="" />
                </a>
              </li>
            </ul>
            <img src="/images/dmca.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
