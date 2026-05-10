// SVG icons keyed by badge.icon string from data
const ICONS = {
  google: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="mx-auto" viewBox="0 0 16 16">
      <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
    </svg>
  ),
  glassdoor: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="mx-auto" viewBox="0 0 49 100">
      <path style={{ transform: "scale(1.5)", transformOrigin: "center" }} fillRule="evenodd" clipRule="evenodd" d="M39.2234 75.0135H0.0464577C0.0464577 80.5459 4.41471 85 9.84612 85H39.2234C44.6317 85 49 80.5223 49 75.0135V33.9415C49 33.7539 48.8386 33.567 48.6536 33.567H39.5698C39.3848 33.567 39.2234 33.7307 39.2234 33.9415V75.0135ZM39.2234 15C44.6317 15 49 19.4777 49 25.0102H9.82321V66.0817C9.82321 66.2694 9.66141 66.457 9.45347 66.457H0.369985C0.184952 66.457 0 66.2926 0 66.0817V25.0102C0 19.4777 4.36857 15 9.80023 15H39.2234Z" />
    </svg>
  ),
  goodfirms: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 59 100" fill="currentColor" className="mx-auto">
      <path style={{ transform: "scale(1.6)", transformOrigin: "center" }} d="M0.00427714 58.0059C0.00899712 33.2785 -0.049806 34.1752 1.81129 30.3716C4.09522 25.7036 8.35564 22.2517 14.0068 20.491C15.5337 20.0149 16.2478 20 36.9132 20H58.2437V28.2008V36.4021H38.9427C23.281 36.4021 19.4937 36.4666 18.857 36.7344C17.5464 37.2869 16.5636 38.6339 16.3845 40.1238C16.2984 40.838 16.2625 50.0977 16.3048 60.701L16.381 79.9792H8.19049H0L0.00427714 58.0059ZM20.8707 71.4173V62.8411H31.124C39.1514 62.8411 41.4674 62.7667 41.7924 62.5137C42.4544 62.0063 42.712 60.9976 42.712 58.9145V56.9718H31.7914H20.8707V50.2321C20.8707 44.8682 20.9434 43.3169 21.2261 42.6344C21.8987 41.0101 21.2753 41.0597 41.1411 41.0597H59L58.913 53.6057C58.8279 65.8025 58.8102 66.2032 58.2766 67.9882C56.7728 73.0163 53.0987 76.8734 47.738 79.0517L45.7459 79.8611L33.3085 79.9306L20.871 80V71.4233L20.8707 71.4173Z" />
    </svg>
  ),
  clutch: (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 57 100" fill="currentColor" className="mx-auto">
      <path style={{ transform: "scale(1.5)", transformOrigin: "center" }} d="M31.6706 60.771C37.6339 60.771 42.4681 55.9657 42.4681 50.0381C42.4681 44.1105 37.6339 39.3052 31.6706 39.3052C25.7073 39.3052 20.873 44.1105 20.873 50.0381C20.873 55.9657 25.7073 60.771 31.6706 60.771Z" />
      <path style={{ transform: "scale(1.5)", transformOrigin: "center" }} d="M44.4976 63.3534C41.2502 66.2585 36.9474 67.8725 32.2388 67.8725C29.8466 67.9399 27.466 67.5198 25.2433 66.6382C23.0206 65.7567 21.003 64.4322 19.3147 62.7464C17.6263 61.0606 16.303 59.0491 15.4261 56.8358C14.5492 54.6225 14.1373 52.2542 14.2158 49.8767C14.2158 39.4666 21.6036 32.2037 32.2388 32.2037C36.8663 32.2037 41.2502 33.737 44.5788 36.6421L46.8519 38.5789L56.9188 28.5723L54.4021 26.3127C48.3058 20.9078 40.4075 17.9457 32.2388 18.0008C13.5663 18.0008 0.00855435 31.3967 0.00855435 49.796C-0.0906556 54.0377 0.673963 58.2556 2.25649 62.1961C3.83901 66.1365 6.20675 69.7183 9.21737 72.7259C12.228 75.7336 15.8193 78.1052 19.7755 79.698C23.7317 81.2908 27.9711 82.0721 32.2388 81.9948C40.7631 81.9948 48.7192 79.0089 54.5645 73.6021L57 71.3426L46.7708 61.3359L44.4976 63.3534Z" />
    </svg>
  ),
};

export default function ServicesAchievementsSection({ data }) {
  return (
    <section className="services-achievements full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48">{data.eyebrow}</h3>
          <h2 className="main-title pb-2">{data.title}</h2>
        </div>
        <div className="gap-4 xl:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center leading-relaxed small">
          {data.badges.map((badge) => (
            <div key={badge.name} className="group p-8 transition-all duration-500 bg-black-light animate zoomIn">
              <div className="group-hover:text-primary font-48 mb-[0.4em] transition-all duration-500 group-hover:-translate-y-2">
                {ICONS[badge.icon]}
              </div>
              <h3 className="font-22 font-bold mb-0">{badge.name}</h3>
              <p className="font-22 mb-1">{badge.rating} <span className="text-primary">★★★★★</span></p>
              <p>{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
