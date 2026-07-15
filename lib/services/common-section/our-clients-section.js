/**
 * Position marker for the site-wide "Our Trusted Clients" section.
 *
 * This used to hold a 5-logo strip rendered by ServicesOurClientSection. That
 * strip was replaced site-wide by the "Our Trusted Clients" grid from the home
 * page, so the logo list now lives in ONE place:
 *
 *     components/common/TrustedClientsSection.js  (edit CLIENT_LOGOS there)
 *
 * The old 5 logos (out-client-1..5) are already included in that grid's 15.
 *
 * This module is kept only so the ~171 service/company data files that do
 * `ourClients: ourClientsSection` keep compiling and keep placing the section
 * at the same position in their page order. The value itself is unused — the
 * `ourClients` renderer in app/[slug]/page.js ignores it and always renders
 * <TrustedClientsSection />. It just has to be truthy.
 */
const ourClientsSection = true;

export default ourClientsSection;
