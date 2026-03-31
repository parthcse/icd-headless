export default function Footer() {
  return (
    <footer className="footer-main bg-white/5 pt-space text-base">
              <div className="container">
                <h4 className="font-24 mb-[0.8em]">Our Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-space gap-4 md:gap-6">
                  <ul className="[&_a]:transition [&_a:hover]:text-primary [&_a:hover]:underline grid gap-1">
                    <li><a href="#">ECommerce Website Design</a></li>
                    <li><a href="#">ECommerce Web Development</a></li>
                    <li><a href="#">Hire eCommerce Developers</a></li>
                    <li><a href="#">Magento 2 Upgrade</a></li>
                    <li><a href="#">Magento Development</a></li>
                    <li><a href="#">Hire Magento Developers</a></li>
                    <li><a href="#">Magento 2 Development</a></li>
                    <li><a href="#">Technical SEO Services</a></li>
                    <li><a href="#">Hire ReactJS Developers</a></li>
                  </ul>
                  <ul className="[&_a]:transition [&_a:hover]:text-primary [&_a:hover]:underline grid gap-1">
                    <li><a href="#">Shopify Development</a></li>
                    <li><a href="#">Hire Shopify Developers</a></li>
                    <li><a href="#">Woocommerce Development</a></li>
                    <li><a href="#">Hire Woocommerce Developers</a></li>
                    <li><a href="#">WordPress Development</a></li>
                    <li><a href="#">Hire WordPress Developers</a></li>
                    <li><a href="#">Custom PHP Development</a></li>
                    <li><a href="#">Local SEO Services</a></li>
                    <li><a href="#">Hire Next.js Developers</a></li>
                  </ul>
                  <ul className="[&_a]:transition [&_a:hover]:text-primary [&_a:hover]:underline grid gap-1">
                    <li><a href="#">PPC Management</a></li>
                    <li><a href="#">Magento SEO Services</a></li>
                    <li><a href="#">Shopify SEO Service</a></li>
                    <li><a href="#">WordPress SEO Service</a></li>
                    <li><a href="#">Professional SEO Service</a></li>
                    <li><a href="#">Digital Marketing Service</a></li>
                    <li><a href="#">Email Marketing Service</a></li>
                    <li><a href="#">On Page SEO Services</a></li>
                    <li><a href="#">Hire NodeJS Developers</a></li>
                  </ul>
                  <div className="footer-trusted bg-black text-center p-5 xl:p-6">
                    <img
                      className="mx-auto mb-3 xl:mb-4"
                      src="https://www.icecubedigital.com/wp-content/webp-express/webp-images/uploads/2023/08/top-web-development-company.png.webp"
                      alt="Top web development company"
                    />
                    <h4 className="font-22 mb-2">Most Trusted Company</h4>
                    <p>Icecube Digital Is Rated As The Top Web Development Company By Good Firms</p>
                  </div>
                </div>
                <div className="border-t border-white/10 pt-space-mini pb-space-mini text-center gap-4 flex flex-col lg:flex-row lg:text-left">
                  <div className="text-white/60 grid gap-2">
                    <ul className="[&_a]:transition [&_a]:text-white [&_a:hover]:text-primary flex flex-wrap items-center gap-2 justify-center">
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
                  <div className="flex flex-col gap-4 justify-center items-center lg:flex-row lg:ml-auto lg:gap-11 xl:gap-16">
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
                    <img src="/images/dmca-placeholder.svg" alt="" />
                  </div> 
                </div>
              </div>
            </footer>
  );
}
